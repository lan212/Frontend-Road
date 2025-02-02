//  需求：2. 求1~100以内(包含1和100)能同时被3，5整除的数的和，并将求出的和打印到控制台上.(while实现)
// 
//  分析：先用while循环找出1-100所有的数，然后挑出能被3，5同时整除的数，然后加入到一个总和中，并输出

//  步骤:
// 声明一个变量，作为总和
var sum = 0
// 声明一个变量，作为while循环的初始值
var i = 1
// 动用一个while循环，循环条件为100以内的数
while (i<=100) 
{
    // 利用判断挑出符合条件的数
    if (i%3==0 && i%5==0)
    {
        //将符合条件的数加入总和
        sum += i
    }
    // 步进表达式，让i递进
    i++
}
// 输出总和
console.log(sum);
