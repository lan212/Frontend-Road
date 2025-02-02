// 需求: 求1!+2!+3!+...+10!的和

// 分析：
// 首先要知道每个阶乘数怎么算？
// 1! = 1       1
// 2! = 1*2     1！* 2
// 3! = 1*2*3   2！* 3
// 由此得出: 每个数的阶乘 = 上一个阶乘 * 这个数本身
// 然后我们需要 一个 声明一个变量 sum 将 所有阶乘加起来

// 步骤：
// 声明一个变量作为总和
var sum = 0
// 声明一个变量作为每次的阶乘数
var jie = 1
// 动用循环求出每次的阶乘数
for (var i=1; i<=10; i++)
{
    // 根据规律，算出每次阶乘数，   每个数的阶乘 = 上一个阶乘 * 这个数本身
    jie = jie * i
    // console.log(jie);    测试一下每次的阶乘数是否符合规律，是否正确
    // 将每次得出的阶乘数累加到 sum 里
    sum = sum + jie 
}
// 输出最后的总和
console.log(sum);