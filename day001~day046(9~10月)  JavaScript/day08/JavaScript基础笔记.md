#  JavaScript 概念介绍

## 注释

### 什么是注释？

我们在写代码时，应该为代码写一些注释，用来说明这段代码的用途，将来工作时，便于我们查看代码。

## 变量

### 什么是变量？干什么使用的？

值可以改变的量，用来保存数据时使用。

使用变量时需要先使用`var`定义这个变量

用来保存程序运行时要使用的数据。

## 常量

### 什么是常量？干什么用的？什么时候使用？

常量：程序运行时，值不能被改变的量。

当你觉得这个值以后不应该被随意改变时就使用常量。

使用`const`定义常量。

## 数据类型

### 什么是数据类型？干什么用的？什么时候用？

在定义变量和常量时要为它的值使用某一种类型，比如：数字，数组等。

具体使用哪种类型，需要我们锻炼了，来根据实际情况选择。

JS中一共有`七种`数据类型。



## 运算符

### 什么是运算符？干什么用的？什么时候使用？

对变量和常量中的数据进行运算的符号，比如：加（+），减（-），乘（*），除（/），比如：5/5。当我们需要对数据进行运算时使用等。



## 流程控制

### 什么是流程控制？干什么用的？什么时候使用？

控制代码执行的顺序。

当要控制代码执行的顺序时使用。

比如：

* 判断是否执行一段代码

  if ：如果

  else ：否则

* 让一段代码重复执行

  for



## 函数

### 什么是函数？干什么用的？ 什么时候使用？

当我们要使用一串代码时，我们可以为这个代码起一个名字，然后使用时直接使用这个名字。

目的：

1. 方便：避免编写重复的代码，有些代码需要经常使用，如果每次使用都写一遍的话太麻烦，所以我们可以把它定义成一个函数，起一个名字，以后用这个名字即可。

2. 我们后期一般会把一个大项目，分解成多个小功能，每个小功能是一个函数，然后通过这个函数拼出一个大项目。

   使用`function`定义函数



# JS代码的执行

## 在网页中执行（网站前端）

流程：

1. 创建一个网页文件

   文件名以`.html`结尾的文件命名即可。

2. 编写JS代码

   JS代码必须要写在：`<script>...</script>`中间

   

   ```js
   <script>
   // 一行一个代码   （注释）
   // 弹出一个框，显示 Hello World ~
   alert('Hello World ~')
   alert(100)
   alert('双击 666')
   </script>
   ```

   

   如果Js代码编写的不符合语法规则：

   1. 不显示效果
   2. 会报错

   如何查看代码是否错误，以及哪里错了：

   1. 在网页中单击鼠标右键
   2. 选择检查
   3. 在console栏中查看错误

## 在 Node 中执行 （网站后端）

1. 在电脑中安装 Node

如何判断我的电脑上有没有安装 Node？

在 `命令行` 中执行 `node -v`  这个指令，如果显示出Node 的版本号说明安装了。

2. 创建 `.js`  文件
3. 编写 JS 代码

注意：不需要加 script 标签，直接写JS代码即可。

4. 运行这个 JS 文件

在命令行中执行代码：

```js
node 文件名.js
```

运行代码

### Node 中运行代码时   要注意路径

默认情况下 node 只会在当前目录中找，如果文件在子目录中需要把子目录的名字写完。

例如：

```
猜牌/card/ XXX.js
```



# 注释

## 单行注释

以 `//` 开头的就是单行注释，只能 `//` 后面这一行有注释效果。



```js
// 这些都是注释
var name = 'tom'   // 定义 name 变量
```



## 多行注释

以 `/* ... */`  包含的内容都是注释，中间的内容可以跨多行。



```js
/* 多行注释
我是注释
我也是注释
我还是注释
*/

var age = 10      /* 定义年龄  10 岁  */
var gender = '男'    /*  定义 性别 男 */
```



# 变量

## 定义变量

 在使用一个变量之前必须要先定义这个变量。

语法一，定义变量 并 不赋值

```
var 变量名
```

语法二，定义变量 并 赋值

```
var 变量名 = 值
```

方法三，同时定义多个变量

```
var 变量名1 ， 变量名 ， 变量名3
```

方法四，定义多个变量 并 赋值

```
var 变量名1=值1 ， 变量名2=值2 ， 变量名3 ， 变量名4=值4
```

（赋值时， 除了数字以外都需要加”  '。。。'  “）



示例：

```js
var name = 'tom'
var age = 10

var date = '2019-09-23' , day='周一' 


// 修改 age 变量的值为 20
age = 20

// 第一次使用时必须先定义
var school = '传智'    



// 再使用时就不需要使用 var 了
// 修改值
school = '传智全栈班'
```





## 变量名的命名规则

规则：

1. 变量名只能包含数字，字母，下划线 （_）。
2. 不能以数字开头
3. 不能是一些关键字（ JS 中有些单词已经被占用了，比如var, if ,for 等等）
4. 不推荐使用中文

示例、

```js
// var 3Abeiw = 12   // 错误：不能以数字开头


var _Af390op_fda = 32    // 可以
// var _fd(3) = 23       // 错误，只能是数字、字母、下划线

var name_fda = 32       // 可以

var 中文 = 32         // 可以但不要使用~

```



## 推荐的命名规范

我们在定义命名时，名字应该这样：

1. 名字最好是单词 或者 拼音 （让人一看就知道是什么）
2. 多个单词组成，每个单词首字母大写 （驼峰命名法）
3. 多个单词时，所有单词都小写，中间用 _ 隔开

示例、

```js
var fasdfd_f23 = 20  // 坏的名字
var age = 20      // 推荐
var nianling = 20    // 推荐，拼音

var thisisgoodstotalprice = 100  // —. 不好
var this_is_goods_total_price = 100  // 推荐
var thisIsGoodsTotalPrice = 100  // 推荐
```





## 变量的输出

使用 `console.log` 对变量的值进行输出



# 常量

## 定义常量

```
const 常量名 = 值
```



## 常量的命名规范

一般常量都用  `大写` 。

```js
const name = 'tom'  //不好的常量名，因为小写了
const SCHOOL = '传智'   //好的常量名，推荐用大写
```







  





