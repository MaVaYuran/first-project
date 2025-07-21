// for (let i = 0; i < 3; i += 1) {
//   let newStudent = prompt('Введите имя нового студента!');
//   if (newStudent) {
//     newStudent = newStudent.trim();
//     alert(`Добро пожаловать, ${newStudent}!`)
//   }
// }

//do... while
let i = 0;
do {
  let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  i++;
} while (i < 3);

// //while
let k = 0;
while (k < 3) {
  let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  k++;
}

//task5
let sum = 0;
for (let i = 100; i > 0; i--) {
  sum += i;
}
alert('Сумма ' + sum);
