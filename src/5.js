//数值的扩展

/*
1.ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示
2.ES6 在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法
3.ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变
4.Number.isInteger()用来判断一个值是否为整数。需要注意的是，在 JavaScript 内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值
5.ES6在Number对象上面，新增一个极小的常量Number.EPSILON
6.Math.trunc方法用于去除一个数的小数部分，返回整数部分
7.Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值
8.Math.cbrt方法用于计算一个数的立方根
9.Math.clz32方法返回一个数的32位无符号整数形式有多少个前导0
10.Math.imul方法返回两个数以32位带符号整数形式相乘的结果，返回的也是一个32位的带符号整数
11.Math.fround方法返回一个数的单精度浮点数形式
12.Math.hypot方法返回所有参数的平方和的平方根
13.Math.expm1(x)返回ex - 1，即Math.exp(x) - 1
14.Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN
15.Math.log10(x)返回以10为底的x的对数。如果x小于0，则返回NaN
16.Math.log2(x)返回以2为底的x的对数。如果x小于0，则返回NaN
17.三角函数
    Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
    Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
    Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
    Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
    Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
    Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
18.Math.sign()用来判断一个值的正负，但是如果参数是-0，它会返回-0
19.指数运算符可以与等号结合，形成一个新的赋值运算符（**=）
*/

console.log(Math.sign(-5)); // -1
console.log(Math.sign(5)); // +1
console.log(Math.sign(0)); // +0
console.log(Math.sign(-0)); // -0