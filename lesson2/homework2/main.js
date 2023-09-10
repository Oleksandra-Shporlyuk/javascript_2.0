// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 2, 3, 'as', 'df', 're', 34, true, false, 55];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {
//     title:'dead',
//     pageCount:23,
//     genre:'roman'
// }
// let book2 = {
//     title:'life',
//     pageCount:50,
//     genre:'romans'
// }
// let book3 = {
//     title:'mans',
//     pageCount:55,
//     genre:'detectiv'
// }
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let book1 = {
//     title: 'life',
//     pageCount: 23,
//     genre: 'roman',
//     authors: [{name: 'dkdkd', age: 23}]
// }
let book2 = {
    title: 'life',
    pageCount: 50,
    genre: 'romans',
    authors: [{name: 'dkd', age: 23}]

}
let book3 = {
    title: 'mans',
    pageCount: 55,
    genre: 'detectiv',
    authors: [{name: 'dkdf', age: 23}]

}
console.log(book3)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'user1', username: 'us1', password: 1},
    {name: 'user2', username: 'us2', password: 2},
    {name: 'user3', username: 'us3', password: 3},
    {name: 'user4', username: 'us4', password: 4},
    {name: 'user5', username: 'us5', password: 5},
    {name: 'user6', username: 'us6', password: 6},
    {name: 'user7', username: 'us7', password: 7},
    {name: 'user8', username: 'us8', password: 8},
    {name: 'user9', username: 'us9', password: 9},
    {name: 'user10', username: 'us10', password: 10}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
let x = 10;
if (x !== 0) {
    console.log('Okey')
} else {
    console.log('Not Okey')
}


//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 59;
if (time > 0 && time <= 15) {
    console.log('1 day')
} else if (time > 15 && time <= 30) {
    console.log('2 day')
} else if (time > 30 && time <= 45) {
    console.log('3 day')
} else if (time > 45 && time <= 60) {
    console.log('4 day')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 31;
if (day > 0 && day <= 10) {
    console.log('1 decada')
} else if (day > 10 && day <= 20) {
    console.log('2 decada')
} else if (day > 20 && day <= 31) {
    console.log('3 decada')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let SCHEDULE = prompt('Який сьогодні день тижня?');
switch (SCHEDULE) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Вівторок');
        break;
    case '3':
        console.log('Середа');
        break;
    case '4':
        console.log('Четвер');
        break;
    case '5':
        console.log('Пятниця');
        break;
    case '6':
        console.log('Субота');
        break;
    case '7':
        console.log('Неділя');
        break;
    default:
        console.log('errors')

}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
let a = 1;
let b = 2;
if (a > b) {
    console.log('a: ', a);
} else if (b > a) {
    console.log('b: ', b);
} else if (b === a) {
    console.log('equal');
}



//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


let y ;
y = y || 'default';
y = y ?? 'default';

console.log(y);
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0].monthDuration > 5){
//     console.log('Super!!!')
// } if (coursesAndDurationArray[1].monthDuration > 5){
//     console.log('Super!!!')
// } if (coursesAndDurationArray[2].monthDuration > 5){
//     console.log('Super!!!')
// } if (coursesAndDurationArray[3].monthDuration > 5){
//     console.log('Super!!!')
// } if (coursesAndDurationArray[4].monthDuration > 5){
//     console.log('Super!!!')
// } if (coursesAndDurationArray[5].monthDuration > 5){
//     console.log('Super!!!')
// }




