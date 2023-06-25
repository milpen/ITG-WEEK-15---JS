//Задание 1
// Выведите числа от 1 до 10 в консоль

for (number = 1; number <= 10; number++) {
    console.log(number);
}


//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
 for (i=1; i<=20; i++) {
    if (i % 2 !==0) {
    } else {
        console.log(i);
    }
 }
//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let a = 10; a > 0; a--) {
	console.log(a);
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let b = 1; b <= 10; b++) {
const number = b * 5;
console.log(4, number);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let res = 0;
for (let i = 1; i <= 100; i++) {
	res += i;
}
console.log(res);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let d = 1; d <= array.length; d++) {
console.log(6, d);
}
//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let e = 0; e < numbers.length; e++) {
sum += numbers[e];
}
console.log(7, sum);
//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (let f = 0; f < animals.length; f++) {
const animalsPretty = animals[f] + "- прекрасное животное";
animals[f] = animalsPretty;
}
//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for (let letter of str) {
console.log(9, letter);
}
//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
const array2 = [1, 2, 3, 4, 5];
for (let element of array2) {
console.log(10, element);
}
//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
for (let word of sentences) {
let arrays = word.split(" ");
arrays.forEach((item) => {
console.log(11, item);
});
}
//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
const numbers2 = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let number of numbers2) {
sum2 += number;
}
console.log(12, sum2);
//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for (let element of list) {
console.log(13, element.length);
}
//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words3 = ["Hello", "world", "string"];
for (let element of words3) {
const upperCase = element.toUpperCase();
console.log(14, upperCase);
}
//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
function getVowels(str) {
for (let element of str.toLowerCase()) {
if (vowels.includes(element)) {
vowelCount += 1;
}
}
return vowelCount;
}
console.log(15, getVowels(greeting));
//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ['Hello', 'world', '!'];
const string = words.join(" ");
console.log(16, string);
//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let g = 1;

while (g <= 10) {
console.log(17, g);
g++;
};
//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let h = 10;
while (h >= 1) {
console.log(18, h);
h--;
}
//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
function isPositive(arr) {
let count = 0;
while (count < arr.length - 1) {
if (arr[count] < 0) {
allPositive = false;
console.log(19, arr[count]);
break;
}
count++;
}
}
isPositive(allNumbers);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
getPositiveElements = () => {
let j = 0;
do {
    console.log(20, random[j]);
    j++;
} while (random[j] >= 0);
};
getPositiveElements();
//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let count = 1;
do {
if (count % 3 !== 0) {
    console.log(21, count);
}
count++;
} while (count <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let res4 = 0;
while (res4 <= 100) {
let newResult = prompt("Введите число");
if (isNaN(+newResult)) {
    newResult = prompt("Введите только число");
}
res4 = res4 + +newResult;
}
//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
const colors = document.querySelectorAll("h4");
console.log(colors);
for (let elem of colors) {
elem.style.backgroundColor = "#2ca8e6";
}
//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";
let maxLenght = 6;

do {
  let randomIndex = Math.floor(Math.random() * alphabet.length);
  randomString += alphabet[randomIndex];
} while (randomString.length < maxLenght);
console.log(24, randomString);
