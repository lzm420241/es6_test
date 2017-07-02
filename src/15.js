//async 函数

/*
1.async 函数是什么？一句话，它就是 Generator 函数的语法糖
2.async函数对 Generator 函数的改进，体现在以下四点
    内置执行器
    更好的语义
    更广的适用性
    返回值是 Promise,这说明可以在返回值的时候使用then方法了
*/

//采用generator的方式实现

var fs = require('fs');

var readFile = function(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, function(error, data) {
            if (error) reject(error);
            resolve(data);
        });
    });
};

var gen = function*() {
    var f1 = yield readFile('/etc/fstab');
    var f2 = yield readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
};

//采用async的方式实现
var asyncReadFile = async function() {
    var f1 = await readFile('/etc/fstab');
    var f2 = await readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
};