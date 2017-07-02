//Promise 对象

/*
1.Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
    它由社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了Promise对象
2.所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果.其中有两个特点：
    对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和Rejected（已失败）。
        只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态
    一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected。
        只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果
3.promise的缺点：
    无法取消Promise，一旦新建它就会立即执行，无法中途取消
    如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
    当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）
4.resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 Pending 变为 Resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
  reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 Pending 变为 Rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去
  Promise实例生成以后，可以用then方法分别指定Resolved状态和Reject状态的回调函数
5.then方法是定义在原型对象Promise.prototype上的。它的作用是为 Promise 实例添加状态改变时的回调函数
  then方法的第一个参数是Resolved状态的回调函数，第二个参数（可选）是Rejected状态的回调函数
6.Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数
7.Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
8.Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例
9.有时需要将现有对象转为Promise对象，Promise.resolve方法就起到这个作用
10.Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected
11.Promise对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，都有可能无法捕捉到（因为Promise内部的错误不会冒泡到全局）。
    因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误
12.finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行
13.
*/

//基本用法
var promise = new Promise(function(resolve, reject) {
    // ... some code
    if (value) {
        /* 异步操作成功 */
        resolve(value);
    } else {
        reject(error);
    }
});
promise.then(function(value) {
    // success
}, function(error) {
    // failure
});

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
});