//  1. 1-100之间所有数的总和 与 平均值(while实现)

//先声明一个变量，并赋值 作为 循环的初始值
var i = 1
var sum = 0
//动用一个while循环，条件表达式控制在小于100的范围
while (i<=100) {
    //将每个数加入sum总和中
    sum += i; 
    //步进表达式，让i的值每次加1    
    i++
}
console.log(`总和为${sum}，平均值为${sum/100}`);


