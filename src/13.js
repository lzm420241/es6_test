//Iterator 和 for...of 循环

/*
1.Iterator 的作用有三个：
  一是为各种数据结构，提供一个统一的、简便的访问接口；
  二是使得数据结构的成员能够按某种次序排列；
  三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费
2.Iterator 的遍历过程
    （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
    （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
    （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
    （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置
3.Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制,即for...of循环
4.调用 Iterator 接口的场合
    解构赋值
    扩展运算符
    yield*
5.遍历器对象除了具有next方法，还可以具有return方法和throw方法。
  如果你自己写遍历器对象生成函数，那么next方法是必须部署的，return方法和throw方法是否部署是可选的
*/


//模拟next方法返回值的例子
var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { value: undefined, done: true };
        }
    };
}

//字符串的 Iterator 接口
var someString = "hi";
typeof someString[Symbol.iterator]
    // "function"

var iterator = someString[Symbol.iterator]();

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }