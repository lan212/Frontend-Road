//  需求：4. 遍历1到100之间（包含1和100）的所有数字，统计能被5整除的偶数的个数，最后将个数打印在控制台（while实现）

//  分析：先找出1-100之间的所有数字，判断出能被5整除的偶数，然后用一个计数器统计起来。

//  步骤：
// 先声明一个变量，用于计数
var a = 0
// 声明一个变量，作为计数器
var count = 0
// 声明一个变量，作为while循环的初始值
var i = 1
// 动用一个while循环，取值范围在100以内
while (i<=100) 
{
    // 判断是不是能被5整除的偶数
    if (i%5==0 && i%2==0)
    {
        // 计数器加一
        count++
    }    
    // 步进
    i++
}
// 输出计数器的值
console.log(count);
