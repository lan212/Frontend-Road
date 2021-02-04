// 引入mongoose
const mongoose = require("mongoose");

// 连接数据库
mongoose.connect("mongodb://localhost/fullstack2019", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("数据库连接成功");
}).catch((err) => {
    console.log("数据库连接失败");
})

// 设置集合Student规则
let studentSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 6,
        required: true
    },
    age: {
        type: Number,
        max: [25, "年龄不能大于25岁"],
        required: true,
    },
    gender: {
        type: String,
        enum: {
            values: ["男", "女"],
            message: "性别只能填男/女"
        },
        required: true
    },
    hobbies: {
        type: [String],
        enum: {
            values: ["draw", "computer", 'sing', "football", "running"],
            message: "您的爱好不在范围内"
        }
    }
})

// 创建集合
let Student = new mongoose.model("Student", studentSchema);

// 插入文档
Student.create({
    name: "杨文林",
    age: 19,
    gender: "男",
    hobbies: ["computer", "draw"]
}).then((data) => {
    console.log(data);
}).catch((err) => {
    for (let key in err.errors) {
        // 输出错误信息
        console.log(err.errors[key].properties.message);
    }
});
Student.create({
    name: "贾拉拉",
    age: 18,
    gender: "女",
    hobbies: ["sing", "draw", "football"]
}).then((data) => {
    console.log(data);
}).catch((err) => {
    for (let key in err.errors) {
        // 输出错误信息
        console.log(err.errors[key].properties.message);
    }
});
Student.create({
    name: "姚姚",
    age: 24,
    gender: "女",
    hobbies: ["running", "computer", "football"]
}).then((data) => {
    console.log(data);
}).catch((err) => {
    for (let key in err.errors) {
        // 输出错误信息
        console.log(err.errors[key].properties.message);
    }
});
Student.create({
    name: "王凯",
    age: 25,
    gender: "男",
    hobbies: ["sing", "computer"]
}).then((data) => {
    console.log(data);
}).catch((err) => {
    for (let key in err.errors) {
        // 输出错误信息
        console.log(err.errors[key].properties.message);
    }
})