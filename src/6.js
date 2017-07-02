//数组的扩展

/*
1.Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）
2.扩展运算符（...）也可以将某些数据结构转为数组
3.Array.of方法用于将一组值，转换为数组
4.数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组
    target（必需）：从该位置开始替换数据。
    start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
    end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
5.数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，
    直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined
    数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
6.fill方法使用给定值，填充一个数组
7.keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
8.Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
*/

let ps = document.querySelectorAll('p');
Array.from(ps).forEach(function (p) {
    console.log(typeof p);
    console.log(p);
});

console.log(Array.of(1, 2, 3));
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
console.log([1, 4, -5, 10].find((n) => n < 0));

console.log(
    [1, 5, 10, 15].findIndex(function (value, index, arr) {
        return value > 9;
    }) // 2
);

['a', 'b', 'c'].fill(7);

for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"


[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false




