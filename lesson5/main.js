// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const areaRectangle = (a,b) => {
    return a * b;
}
console.log(areaRectangle(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const areaCircle = (a,r,h) => {
    return a * r * h;
}
console.log(areaCircle(10, 5,4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const areaCylinder = (r,h)=>{
    return 2 * Math.PI * r * h;
}
console.log(areaCylinder(10, 20));

// - створити функцію яка приймає масив та виводить кожен його елемент
const arrFunc = (arr) => {
    for (const item of arr) {
        console.log(item)
    }
}
let arr = [1,2,3];
arrFunc(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const textP=(text)=>{
    document.write(`<p>${text}</p>`)
}
textP('hello okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const list=(liText)=>{
    document.write(`
<ul>
<li>${liText}</li>
<li>${liText}</li>
<li>${liText}</li>
</ul>
`)
}
list('okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const list=(liText,num)=>{
    document.write(`<ul>`)
    for (const item of num) {
        document.write(`
            <li>${liText}</li>
        `)
    }
    document.write(`</ul>`)
}
let num = [1,2,3,4,5];
list('hello',num);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const list=(arrElements)=>{
    document.write(`<ul>`)
    for (const item of arrElements) {
        document.write(`
            <li>${item}</li>
        `)
    }
    document.write(`</ul>`)
}
let arrElements = [1,2,'hello',true,5];
list(arrElements);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
const userBlock=(users)=>{
    for (const user of users) {
        document.write(`<div>${user.id} - ${user.name}, age - ${user.age}</div>`)
    }
}
let users = [
    {id:1,name:'Sasha',age:12},
    {id:2,name:'Sasha2',age:13},
    {id:3,name:'Sasha3',age:14}
];
userBlock(users);

// - створити функцію яка повертає найменьше число з масив
const minNum=(arrNums)=>{
    let min = arrNums[0];
    for (let i = 0; i < arrNums.length; i++) {
        const num = arrNums[i];
        if (num < min ){
            min = num;
            console.log(min);
        }
    }
}
let arrNums = [4,13,1,3,5,7];
minNum(arrNums);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та
// повертає його.
// Приклад sum([1,2,10]) //->13
const sum=(arr)=>{
    let box = 0;

    for (let i = 0; i < arr.length; i++) {
        box += arr[i];
    }
    return box;
}
let arr = [1,2,3,4];
let result = sum(arr);
console.log(result);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap=(arr,index1,index2)=>{
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length){
        return arr;
    }
    let change = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = change;

    return arr;
}
let array = [11,22,33,44];
swap(array, 0, 1);
console.log(array);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
        let value;
    for (let i = 0; i < currencyValues.length; i++) {
        const currencyValue = currencyValues[i];
        if (currencyValue.currency === exchangeCurrency){
            value = currencyValue.value;
            break;
        }
    }
    if (value === undefined){
        return 'Error'
    }

    const exchangedAmount = sumUAH / value;
    return exchangedAmount;
}
let currencyValues = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42}
]
console.log(exchange(20000, currencyValues, 'EUR'));

// /study

// function reverseNumber(n){
//     n = n + "";
//     return n.split('').reverse().join('')
//
// }
// console.log(reverseNumber(12345));
//
// function strABC(words){
//         return words.split('').sort().join('');
// }
//
// console.log(strABC('283746530561482'));

