//task1

const existingUserLogin = 'the_best_user';
const existingUserPassword = '12345678';

const userLogin = prompt('Введите логин').trim();
const userPassword = prompt('Введите пароль').trim();

if (existingUserLogin === userLogin && existingUserPassword === userPassword) {
  alert(`Добро пожаловать, ${userLogin}!`);
} else {
  alert('Логин и (или) Пароль введены неверно!');
}
//task2

const question1 = 'Сколько будет 2 + 2?';
const question2 = 'Сколько будет 2 * 2?';
const question3 =
  'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?';
const question4 =
  'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?';
const question5 = 'Сколько будет 2 + 2 * 2?';

const corrAnswer1 = 4;
const corrAnswer2 = 4;
const corrAnswer3 = 1;
const corrAnswer4 = 12;
const corrAnswer5 = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;

const unswer1 = Number(prompt(question1));
if (unswer1 === corrAnswer1) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}

const unswer2 = Number(prompt(question2));
if (unswer2 === corrAnswer2) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}

const unswer3 = Number(prompt(question3));
if (unswer3 === corrAnswer3) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}

const unswer4 = Number(prompt(question4));
if (unswer4 === corrAnswer4) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}

const unswer5 = Number(prompt(question5));

if (unswer5 === corrAnswer5) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}
alert(
  `Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}.`
);
