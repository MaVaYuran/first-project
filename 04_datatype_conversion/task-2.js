// console.log(Number('10'), typeof Number('10')); // явное
//1
console.log(+'50', typeof +'50'); //неявное
console.log(Number('50'), typeof Number('50'));
//2
console.log(Number('100'), typeof Number('100')); //явное
//3
console.log('' + 1, typeof ('' + 1)); //неявное
console.log(String(1), typeof String(1));
//4
console.log(String(1), typeof String(1)); //явное
//5
console.log(Boolean(0), typeof Boolean(0)); //явное
//6
console.log(+'001', typeof +'001'); //неявное
console.log(Number('001'), typeof Number('001'));
//7
console.log(1 + '', typeof (1 + '')); //неявное
console.log(String(1), typeof String(1));
//8
console.log(Boolean(1), typeof Boolean(1)); //явное
//9
console.log(String(001), typeof String(001)); //явное
//10
console.log(Number('Hello World'), typeof Number('Hello World')); //явное

console.log('Task 3');

console.log(Number(console.log), Boolean(console.log), String(console.log));
console.log(
  Number({ name: 'Maxim' }),
  Boolean({ name: 'Maxim' }),
  String({ name: 'Maxim' })
);
console.log(Number(Number), Boolean(Number), String(Number));
console.log(Number(''), Boolean(''), String(''));
console.log(Number(0), Boolean(0), String(0));
console.log(Number(-10), Boolean(-10), String(-10));
console.log(Number('-105'), Boolean('-105'), String('-105'));
console.log(
  // Number(Symbol('key')) TypeError: Cannot convert a Symbol value to a number
  Boolean(Symbol('key')),
  String(Symbol('key'))
);
