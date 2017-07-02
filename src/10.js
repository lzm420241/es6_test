// Set和Map数据结构

/*
1.ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值
    Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化
    向Set加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值
    向 Set 实例添加了两个NaN，但是只能加入一个。这表明，在 Set 内部，两个NaN是相等
2.Set 实例的属性和方法
    Set.prototype.constructor：构造函数，默认就是Set函数
    Set.prototype.size：返回Set实例的成员总数
    add(value)：添加某个值，返回Set结构本身
    delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
    has(value)：返回一个布尔值，表示该值是否为Set的成员。
    clear()：清除所有成员，没有返回值
3.Array.from方法可以将 Set 结构转为数组
4.Set遍历操作
    keys()：返回键名的遍历器
    values()：返回键值的遍历器
    entries()：返回键值对的遍历器
    forEach()：使用回调函数遍历每个成员
5.数组的map和filter方法也可以用于 Set 了
6.WeakSet 结构与 Set 类似，但与 Set 有两个区别
    WeakSet 的成员只能是对象，而不能是其他类型的值
    WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，也就是说，如果其他对象都不再引用该对象，
            那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中，因此WeakSet 的成员是不适合引用的
7.WeakSet结构有以下三个方法：
    WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
    WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
    WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中
8.WeakSet没有size属性，没有办法遍历它的成员
9.Map的含义及基本使用方法
    ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
10.实例的属性和操作方法
    size属性
    set(key, value)
    get(key)
    has(key)
    delete(key)
    clear()
11.遍历方法
    keys()：返回键名的遍历器
    values()：返回键值的遍历器
    entries()：返回所有成员的遍历器
    forEach()：遍历 Map 的所有成员
12.结合数组的map方法、filter方法，可以实现 Map 的遍历和过滤（Map 本身没有map和filter方法）
13.与其他数据结构的互相转换
    Map 转为数组最方便的方法，就是使用扩展运算符（...）
    将数组传入 Map 构造函数，就可以转为 Map
    如果所有 Map 的键都是字符串，它可以转为对象
14.WeakMap与Map的区别有两点
    WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
    WeakMap 就是为了解决这个问题而诞生的，它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内
15.WeakMap只有四个方法可用：get()、set()、has()、delete()
16.WeakMap用途
    WeakMap 应用的典型场合就是 DOM 节点作为键名
    WeakMap 的另一个用处是部署私有属性
*/

const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
    console.log(i);
}
// 2 3 5 4

let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
    console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
    console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

let set1 = new Set([1, 2, 3]);
set1.forEach((value, key) => console.log(value * 2))
    // 2
    // 4
    // 6

const a = [
    [1, 2],
    [3, 4]
];
const ws = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]}

const m = new Map();
const o = { p: 'Hello World' };

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false

const name = new Map();
var myName = [
    ['firstName', 'li'],
    ['lastName', 'zhiming']
];
name.set(myName, 'li');
console.log(name);

const items = [
    ['name', '张三'],
    ['title', 'Author']
];

const map = new Map();

items.forEach(
    ([key, value]) => map.set(key, value)
);