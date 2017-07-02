//let const

/*
1.let 实现了块级作用域的功能
2.let 不允许重复声明

3.const声明一个只读的常量，一旦声明就不可改变
4.const只声明不赋值会报错
5.const本质是并不是变量的值不得改动，而是变量指向的那个内存地址不得改动，当
    对象中使用const时，他的内部数据结构就无法控制了
6.es6有6中声明方式：var，function，let，const，import，class
*/

let i = 100;
for(let i = 0; i < 10; i++){
    console.log("inner i 's value: ", i);
}
console.log("outer I's value: ", i);

const a = "hello";