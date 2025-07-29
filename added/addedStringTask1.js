const javaScriptDescription =
  'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';

const newString = javaScriptDescription.substring(
  0,
  Math.floor(javaScriptDescription.length / 2)
);
replacedString1 = newString.replaceAll('a', 'A');
replacedString2 = replacedString1.replaceAll('а', 'А');
nospasesString = replacedString2.replaceAll(' ', '');
// console.log(nospasesString.length);
console.log(
  'Middle char: ' + nospasesString[Math.floor(nospasesString.length / 2)]
);
console.log(nospasesString.repeat(3));
