
// - Знайти та вивести довижину настипних стрінгових значень

// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.length);
// let str2 = 'lorem ipsum';
// console.log(str2.length);
// let str3 = 'javascript is cool';
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення

// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.toUpperCase());
// let str2 = 'lorem ipsum';
// console.log(str2.toUpperCase());
// let str3 = 'javascript is cool';
// console.log(str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення

// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// console.log(str1.toLowerCase());
// let str2 = 'LOREM IPSUM';
// console.log(str2.toLowerCase());
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str3.toLowerCase());


// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());


// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// function stringToArray(str) {
//     return str.split(' ');
// }
// console.log(stringToArray(str));



//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let nums = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(nums.map(value => value.toString()));



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [2, 3, 1];
//
// function sortNums(nums,direction) {
//     if (direction === 'ascending') {
//         nums.sort((a, b) => {
//             return a - b;
//         })}
//
//         if  (direction === 'descending') {
//             nums.sort((a, b) => {
//                 return b - a;
//             })
//         }
//     return nums;
//     }
//
//
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));



// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration
// let sortArray = coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration;
// });
// console.log(sortArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filterArray = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filterArray);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let mapArray = coursesAndDurationArray.map((value, index) => {
//     return {id:index+1,...value};
// });
// console.log(mapArray);



//описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {color: 'black', suit: 'spades', value: '6'},
    {color: 'black', suit: 'spades', value: '7'},
    {color: 'black', suit: 'spades', value: '8'},
    {color: 'black', suit: 'spades', value: '9'},
    {color: 'black', suit: 'spades', value: '10'},
    {color: 'black', suit: 'spades', value: 'jack'},
    {color: 'black', suit: 'spades', value: 'queen'},
    {color: 'black', suit: 'spades', value: 'king'},
    {color: 'black', suit: 'spades', value: 'ace'},
    {color: 'red', suit: 'hearts', value: '6'},
    {color: 'red', suit: 'hearts', value: '7'},
    {color: 'red', suit: 'hearts', value: '8'},
    {color: 'red', suit: 'hearts', value: '9'},
    {color: 'red', suit: 'hearts', value: '10'},
    {color: 'red', suit: 'hearts', value: 'jack'},
    {color: 'red', suit: 'hearts', value: 'queen'},
    {color: 'red', suit: 'hearts', value: 'king'},
    {color: 'red', suit: 'hearts', value: 'ace'},
    {color: 'black', suit: 'clubs', value: '6'},
    {color: 'black', suit: 'clubs', value: '7'},
    {color: 'black', suit: 'clubs', value: '8'},
    {color: 'black', suit: 'clubs', value: '9'},
    {color: 'black', suit: 'clubs', value: '10'},
    {color: 'black', suit: 'clubs', value: 'jack'},
    {color: 'black', suit: 'clubs', value: 'queen'},
    {color: 'black', suit: 'clubs', value: 'king'},
    {color: 'black', suit: 'clubs', value: 'ace'},
    {color: 'red', suit: 'diamonds', value: '6'},
    {color: 'red', suit: 'diamonds', value: '7'},
    {color: 'red', suit: 'diamonds', value: '8'},
    {color: 'red', suit: 'diamonds', value: '9'},
    {color: 'red', suit: 'diamonds', value: '10'},
    {color: 'red', suit: 'diamonds', value: 'jack'},
    {color: 'red', suit: 'diamonds', value: 'queen'},
    {color: 'red', suit: 'diamonds', value: 'king'},
    {color: 'red', suit: 'diamonds', value: 'ace'}
];

//- знайти піковий туз
let ageSpades = cards.filter(value => value.value === 'ace' && value.suit === 'spades');
console.log(ageSpades);

//  - всі шістки
let allSix = cards.filter(value => value.value === '6');
console.log(allSix);

//  - всі червоні карти
let allRed = cards.filter(value => value.color === 'red');
console.log(allRed);

//  - всі буби
let allClubs = cards.filter(value => value.suit === 'clubs');
console.log(allClubs);

//  - всі трефи від 9 та більше
let allDiamond = cards.filter(value => value.suit === 'diamonds' && parseInt(value.value)>=9);
console.log(allDiamond);



//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let reduce = cards.reduce((previousValue, card) => {
        if (card.suit === 'diamonds'){
            previousValue.diamonds.push(card);
        } else if (card.suit === 'clubs'){
            previousValue.clubs.push(card);
        } else if (card.suit === 'hearts'){
            previousValue.hearts.push(card);
        } else if (card.suit === 'spades'){
            previousValue.spades.push(card);
        }
        return previousValue;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(reduce);





