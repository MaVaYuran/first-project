//task5
const userString = prompt('Введите текст для обрезки');
const startSliceIndex = prompt(
  'Введите индекс, с которого нужно начать обрезку строки'
);
const endSliceIndex = prompt(
  'Введите индекс, которым нужно закончить обрезку строки'
);
const string = userString
  .trim()
  .substring(Number(startSliceIndex), Number(endSliceIndex));
alert(`Результат: ${string}`);

//task6
const userText = prompt('Введите текст').trim();
const fragmentOfText = prompt('Введите слово из текста').trim();
const indexOfFragment = userText.indexOf(fragmentOfText);
const string1 = userText.slice(0, indexOfFragment);
alert('Результат: ' + string1);
