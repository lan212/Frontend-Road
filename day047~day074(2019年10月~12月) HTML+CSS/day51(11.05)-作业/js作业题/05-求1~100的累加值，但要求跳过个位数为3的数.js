// 5. 求整数1～100的累加值，但要求跳过所有个位为3的数【用continue实现】

// 步骤：
// 先声明一个变量，作为总和
let sum = 0;
// 循环1-100
for (let i = 0; i <= 100; i++) {
    // 判断这个数的个位是不是3
    if (i % 10 == 3) {
        // 如果是3，直接跳出循环
        continue;
    }
    // 否则加入总和
    else {
        sum += i
    }
}
// 输出
console.log(sum);

