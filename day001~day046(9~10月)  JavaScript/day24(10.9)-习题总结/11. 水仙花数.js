// 需求: 利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。

// 分析：水仙花数是三位数，所以范围在100-999之间，需要用循环从这个区间中找出水仙花数
//      利用判断 在循环里 挑出符合水仙花数条件的数(条件是各位数立方和等于该数本身，所以要定义三个变量挑出各位数，用于判断)，打印输出

// 步骤：
// 构建一个for循环，循环范围在100-999之间
for (var i=100; i<=999; i++)
{
    //声明三个变量  挑出三位数 中 的每位数  , 用于 判断条件 
    var gewei = i%10
    var shiwei = parseInt(i%100/10)
    var baiwei = parseInt(i/100)
    // 用 if 判断，条件是各位数立方和等于该数本身
    if (gewei*gewei*gewei+shiwei*shiwei*shiwei+baiwei*baiwei*baiwei==i)
    {
        //符合条件：打印输出 这个三位数  ，输出的数则为水仙花数
        console.log(i);
    }
}