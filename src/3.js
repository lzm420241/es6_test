//字符串的扩展

/*
1.JavaScript 允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点
2.ES6提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点
3.ES5提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符（Unicode编号大于0xFFFF）
4.ES6为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历
5.提出字符串实例的at方法，可以识别Unicode编号大于0xFFFF的字符，返回正确的字符
6.ES6提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为Unicode正规化
7.includes()：返回布尔值，表示是否找到了参数字符串
8.startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部
9.endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部
10.repeat方法返回一个新字符串，表示将原字符串重复n次
11.padStart()用于头部补全，padEnd()用于尾部补全
12.模板字符串（template string）是增强版的字符串，用反引号（`）标识
13.String.raw方法，往往用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串
*/

let a = [1, 2, 3, 4, 5, 6, 7];
for(item of a){
    console.log(item);
}
let b = "i'mlizhiming";
for(item of b){
    console.log(item);
}