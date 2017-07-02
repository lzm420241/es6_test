//对象的扩展

/*
1.bject.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
    Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用
    用途：
        为对象添加属性
        为对象添加方法
        克隆对象
        将多个对象合并到某个对象
        为属性指定默认值
2.对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象
3.属性的遍历
    for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）
    Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）
    Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）
    Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性
    Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管属性名是 Symbol 或字符串，也不管是否可枚举

4.Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的prototype对象，返回参数对象本身
5.Object.getPrototypeOf()用于读取一个对象的原型对象
6.Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名
7.Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值
8.Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
*/

var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target); // {a:1, b:2, c:3}

let obj1 = { foo: 123 };
console.log(Object.getOwnPropertyDescriptor(obj1, 'foo'));

var obj = { foo: 'bar', baz: 42 };
Object.keys(obj)
// ["foo", "baz"]