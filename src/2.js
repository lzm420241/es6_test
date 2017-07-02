//变量的解构赋值

/*
1.ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）
2.如果解构不成功会返回undefined
3.如果等号的右边不是数组，那么将会报错
4.只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
5.解构赋值允许指定默认值
6.变量解构赋值有哪些应用：
    交换变量的值
    从函数返回多个值
    函数参数的定义
    提取JSON数据
    函数参数的默认值
    遍历Map结构
    输入模块的指定方法
*/

let [a, b, c] = [1, 2, 3];
let [c1,[c2,c3,c4],c5] = [1,[2,3,4],5];
let [x, y = 'b'] = ['a', undefined];
console.log(a, b , c);
console.log(c1,c2,c3,c4,c5);
// let [key] = 5;

//对象的解构赋值
let { foo, bar } = { foo: "aaa", bar: "bbb" };
console.log(foo);
console.log(bar);
