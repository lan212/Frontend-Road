## js解答题

1. 系统构造函数创建对象的格式

   ```js
   let obj = new Object();
   ```

2. 工厂函数创建对象的格式

   ```js
   function createObj(name,age) {
       let obj = {};
       obj.name = name;
       obj.age = age;
       return obj;
   }
   
   let newObj = createObj();
   ```

3. 自定义构造函数创建对象的格式

   ```js
   function CreateObj(name,age) {
       this.name = name;
       this.age = age;
   }
   let obj = new CreateObj();
   ```
   
4. 构造函数创建对象有什么好处？

   创建自定义的构造函数意味着将来可以将他的实例标识为一种特定的类型，这就是构造函数比工厂函数强的地方。因为它知道自己从哪里来，通过谁产生的。


## js编程题

1. 定义一个人的对象, 属性有姓名，年龄，性别，身高，方法有：能吃饭，能跑步，
 - 要求分别使用 `4` 种方式创建下面要求的对象
 - 遍历对象，将对象的属性和值输出来，并且调用其中的一个方法，将结果在控制台输出
 - 将对象得 `年龄` 这个属性删除
 - 将对象的 `身高` 的值题换成"180cm"
 - 给对象添加属性 `学号` ，通过两种方式

 ```js

````

 2. 编写一个程序，让用户输入一个5位数，判断该 五位数是否为 `回文数`。（判断第一位和第五位是否一样，第二位和第四位是否一样）如果用户输入的不是5位数提示错误并继续输入直到用户输入一个5位数

    ```js
    
    ```

3. 求10! 的结果（提示：10! = 1x2x3x4x5x6x7x8x9x10）

    ```js
    
    ```

4. 操作数组 var arr = [2,3,4,5,6] 

    ```js
    1) 将1放到数组中2的前面
    2) 删除数组中的6
    3) 将数组的所有剩余元素求和
    4) 在 3) 的基础上通过length求出数组元素和的平均值
    5) 用方法判断数组中是否有6这个元素，有返回索引，无则返回false
    ```