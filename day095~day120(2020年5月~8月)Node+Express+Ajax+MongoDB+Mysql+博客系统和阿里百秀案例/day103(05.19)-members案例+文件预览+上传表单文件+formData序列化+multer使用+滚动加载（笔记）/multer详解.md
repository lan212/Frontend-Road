Express默认并不处理HTTP请求体中的数据，对于普通请求体(JSON、二进制、字符串)数据，可以使用body-parser中间件。而文件上传(multipart/form-data请求)，可以基于请求流处理，也可以使用formidable模块或Multer中间件。

\1. multer中间件

Multer是Express官方推出的，用于Node.jsmultipart/form-data请求数据处理的中间件。

它基于busboy构建，可以高效的处理文件上传，但并不处理multipart/form-data之外的用户请求。

\2. 安装

npm install multer --save
\3. 使用

**Multer在解析完请求体后，会向Request对象中添加一个body对象和一个file或files对象（上传多个文件时使用files对象 ）。其中，body对象中包含所提交表单中的文本字段（如果有），而file(或files)对象中包含通过表单上传的文件。**

基本使用示例如下：

var express = require('express')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var app = express()
app.post('/profile', upload.single('avatar'), function (req, res, next) {
// req.file 是 `avatar` 文件
// req.body 对象中是表单中提交的文本字段(如果有)
})
app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
// req.files 是 `photos` 文件数组
// req.body 对象中是表单中提交的文本字段(如果有)
})
var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
// req.files 是一个对象 (String -> Array)，文件的字段名是其 key，文件数组是 key的值
//
// 如：
// req.files['avatar'][0] -> File
// req.files['gallery'] -> Array
//
// req.body 对象中是表单中提交的文本字段(如果有)
})

在使用中，如果仅需要处理multipart表单中的文本字段，可以使用multer中的.single() 、 .array()或fields()方法。

如，可以像下面这样使用.array()方法：

var express = require('express')
var app = express()
var multer = require('multer')
var upload = multer()
app.post('/profile', upload.array(), function (req, res, next) {
// req.body 中包含文本字段
})
\4. multer的API
4.1 文件对象

multer解析完上传文件后，会被保存为一个包含以下字段的对象：

fieldname - 表单提交的文件名(input控件的name属性)
       originalname - 文件在用户设备中的原始名称
       encoding - 文件的编码类型
       mimetype - 文件的Mime类型
       size - 文件的大小
       destination - 文件的保存目录(DiskStorage)
       filename - 文件在destination中的名称(DiskStorage)
       path - 上传文件的全路径(DiskStorage)

buffer - 文件对象的Buffer(MemoryStorage)

4.2 方法

multer(opts) - 创建对象

引用multer模块后，我们会获取到一个顶级方法。该方法是一个工厂函数，可以使用这个方法创建Multer对象。它接受一个选项对象，最基本的选项是dest，它告诉 Multer 文件的存储位置。如果忽略该选项，文件会被保存在内存中，并且永远不会写入硬盘中。

默认情况下，Multer会对文件进行重命令，以避免名称冲突。重命名函数，可以按需要自定义。

Multer的选项对象中可以包含以下值：

dest或storage - 文件存储位置
       fileFilter - 函数，控制可上传的文件类型
       limits - 上传数据限制(文件大小)

在一般的Web应用中，只有dest选项需要设置。使用示例如下：

var upload = multer({ dest: 'uploads/' })

如果需要对上传文件做更多控制，可以使用storage代替dest，Multer会将存储引擎由DiskStorage(硬盘存储)切换为MemoryStorage(内存存储)。

创建multer对象后，我们可以使用以下实例来接收上传文件：

.single(fieldname) - 单个文件上传

接收一个名为fieldname的上传文件，所上传的文件会被保存在req.file。

.array(fieldname[, maxCount]) - 多个文件上传

接收名为fieldname的，多个上传文件数组。可选参数maxCount表示可接受的文件数量，上传文件数超出该参数指定的数据后会抛出一个错误。文件数组会被保存在req.files中。

.fields(fields) - 多个文件上传

接收通过fields指定的多个上传文件。文件数组对象会被保存在req.files中。

fields是一个包含对象的数组，对象中会包含name和maxCount两个属性：

[
{ name: 'avatar', maxCount: 1 },
{ name: 'gallery', maxCount: 8 }
]

.none() - 仅解析文本字段

仅解析文本字段。如果请求中有任何上传文件，会触发'LIMIT_UNEXPECTED_FILE'错误。这个方法与upload.fields([])类似。

.any() - 接收所有文件

接收请求中的所有文件。上传文件数组会被保存在req.files中。

4.3 选项参数

storage - 存储引擎

该选项有以下两个可选项：

DiskStorage - 硬盘存储
       MemoryStorage - 内存存储

.diskStorage(obj)与硬盘存储

硬盘存储引擎提供了将文件存储到磁盘的完全控制：

var storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, '/tmp/my-uploads')
},
filename: function (req, file, cb) {
cb(null, file.fieldname + '-' + Date.now())
}
})
var upload = multer({ storage: storage })

.diskStorage()方法提供了文件存储位置控制权限，该方法接收一个对象参数，其中包含两destination和filename两个属性。

destination用于设置文件的存储目录，可以是一个函数或字符串。若未提供该参数，将使用系统的临时目录。

filename用于设置文件名。若未提供该参数，将使用一个随机字符串，且文件名中不包含扩展名。

.memoryStorage()与内存存储

内存存储引擎会以Buffer的形式将文件保存在内存中。该方法没有任何参数：

var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

limits - 文件尺寸

该选项用于设置文件尺寸，Multer 会将这个对象传递至busboy中。limits对象中可以包含以下可选值：

fieldNameSize - 字段名最大尺寸。默认值：100 bytes
       fieldSize - 字段值最大尺寸。默认值：1MB
       fields - 非文件字段的最大数量。默认值：Infinity
       fileSize - multipart 表单中，文件的最大尺寸。默认值：Infinity
       files - multipart 表单中，文件最大数量。默认值：Infinity
       parts - multipart 表单中，最大组件(fields+files)数量。默认值：Infinity

headerPairs - 默认值：2000

fileFilter - 文件筛选

fileFilter用于控制要哪些文件是可接受的，哪些是要被拒绝的。使用形式如下：

function fileFilter (req, file, cb) {
// 需要调用回调函数 `cb`，
// 并在第二个参数中传入一个布尔值，用于指示文件是否可接受
// 如果要拒绝文件，上传则传入 `false`。如:
cb(null, false)
// 如果接受上传文件，则传入 `true`。如:
cb(null, true)
// 出错后，可以在第一个参数中传入一个错误：
cb(new Error('I don\'t have a clue!'))
}