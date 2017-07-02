//Proxy  Reflect

/*
1.Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写
2.ES6 原生提供 Proxy 构造函数--var proxy = new Proxy(target, handler);
3.Proxy支持的操作如下：
    1）get(target, propKey, receiver)拦截对象属性的读取
    2）set(target, propKey, value, receiver)拦截对象属性的设置
    3）has(target, propKey)拦截propKey in proxy的操作，返回一个布尔值
    4）deleteProperty(target, propKey)拦截delete proxy[propKey]的操作，返回一个布尔值
    5）ownKeys(target)拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，
        返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性
    6）getOwnPropertyDescriptor(target, propKey)拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象
4.Proxy 实例的方法
    get
    set
    apply方法拦截函数的调用、call和apply操作
    has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符
    construct方法用于拦截new命令
    deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除
    defineProperty方法拦截了Object.defineProperty操作
    getOwnPropertyDescriptor方法拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined
5.Reflect静态方法
    Reflect.apply(target,thisArg,args)
    Reflect.construct(target,args)
    Reflect.get(target,name,receiver)
    Reflect.set(target,name,value,receiver)
    Reflect.defineProperty(target,name,desc)
    Reflect.deleteProperty(target,name)
    Reflect.has(target,name)
    Reflect.ownKeys(target)
    Reflect.isExtensible(target)
    Reflect.preventExtensions(target)
    Reflect.getOwnPropertyDescriptor(target, name)
    Reflect.getPrototypeOf(target)
    Reflect.setPrototypeOf(target, prototype)
*/

var obj = new Proxy({}, {
    get: function(target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function(target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});

obj.count = 1
    //  setting count!
    ++obj.count
    //  getting count!
    //  setting count!
    //  2