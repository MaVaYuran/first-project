//task1
console.log('Task 1');
const myName = 'Maria';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Maksim';
const reasonText = 'это интересно и позволяет работать из любой точки мира';
const numberOfMonth = 4;

console.log(
  `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по programmingLanguage у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage} ${numberOfMonth} месяца уверена, что пройду данный курс до конца!`
);
//task2
console.log('Task 2');
let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по programmingLanguage у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage} ${numberOfMonth} месяца уверена, что пройду данный курс до конца!`;
const newString = myInfoText.replaceAll('JavaScript', 'javascript');
myInfoText = newString;
const newString1 = myInfoText.replaceAll('курс', 'КУРС');
myInfoText = newString1;
console.log(myInfoText);
console.log('Length:', myInfoText.length);
console.log('First char:', myInfoText[0]);
console.log('Last char:', myInfoText[myInfoText.length - 1]);

//task3
const userName = prompt('Как вас зовут?');
alert(`Вас зовут ${userName.trim().toUpperCase()}`);

//task4
const userAge = prompt('Сколько вам лет?');
alert(
  `Вас зовут ${userName.trim().toUpperCase()} и вам ${Number(
    userAge.trim()
  )} лет`
);
