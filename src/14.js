//Generator 函数的语法

/*
1.Generator 函数有多种理解角度
    从语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态
    形式上，Generator 函数是一个普通函数，但是有两个特征。
        一是，function关键字与函数名之间有一个星号；
        二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）
2.由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志
3.如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的,这个就需要用到yield*表达式，
  用来在一个 Generator 函数里面执行另一个 Generator 函数
4.应用
    异步操作的同步化表达
    控制流管理
    部署 Iterator 接口
5.异步编程的方法，大概有下面四种。
    回调函数
    事件监听
    发布/订阅
    Promise 对象
6.
*/

//代码定义了一个 Generator 函数helloWorldGenerator，它内部有两个yield表达式（hello和world），
// 即该函数有三个状态：hello，world 和 return 语句（结束执行）
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();

console.log("first next: ", hw.next());
console.log("second next: ", hw.next());
console.log("third next: ", hw.next());

//代码中，yield后面的表达式123 + 456，不会立即求值，只会在next方法将指针移到这一句时，才会求值
function* gen() {
    yield 123 + 456;
}

function* inner() {
    yield 'hello!';
}

function* outer1() {
    yield 'open';
    yield inner();
    yield 'close';
}

var gen1 = outer1()
console.log(gen1.next().value); // "open"
console.log(gen1.next().value); // 返回一个遍历器对象
console.log(gen1.next().value); // "close"

function* outer2() {
    yield 'open'
    yield* inner()
    yield 'close'
}

var gen2 = outer2()
console.log(gen2.next().value); // "open"
console.log(gen2.next().value); // "hello!"
console.log(gen2.next().value); // "close"