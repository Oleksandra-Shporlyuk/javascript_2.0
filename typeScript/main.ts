// let str: string = 'hello';
// str = 'qwqwqw';
//
// let num: number = 100;
// num = 10;
//
// let bool: boolean = true;
// bool = false;
//
// // let numbers : any[] = [123,true];
// // let numberss : number[] = [123,12];
// // let numberss : string[] = [123,12];
//
//
// interface IUser {
//     id: number;
//     name: string;
//     skills: string[];
//     status?: boolean;
// }
//
// let obj: IUser;
// obj = {
//     id: 12,
//     name: 'sasha',
//     skills: ['dfdf', 'fgfg']
// }
// let obj2 : IUser;
// obj2 = {
//     id:1,
//     name:'sasha',
//     skills:['dfdf','dfdf']
// }
//
// function  calc(a:number,b:number):void {
//     console.log(a+b);
// }
//
// calc(12,12);



/////////////////////LESSON 2 HOMEWORK/////////////////////////

// let arr : any[];
//     arr = [1, 2, 3, 'as', 'df', 're', 34, true, false, 55];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);

// interface IBooks {
//     title:string,
//     pageCount:number,
//     genre:string
// }
//
// let book1:IBooks
//     book1 = {
//     title:'dead',
//     pageCount:23,
//     genre:'roman'
// }
// let book2:IBooks
// book2 = {
//     title:'life',
//     pageCount:50,
//     genre:'romans'
// }
// let book3:IBooks;
// book3 = {
//     title:'mans',
//     pageCount:55,
//     genre:'detectiv'
// }

// interface IBooks {
//     title:string,
//     pageCount:number,
//     genre:string,
//     authors:object[]
// }
//
// let book1: IBooks;
//     book1 = {
//     title: 'dead',
//     pageCount: 23,
//     genre: 'fgfg',
//     authors: [{name: 'dkdkd', age: 23}]
// }
// let book2: IBooks;
//     book2 = {
//     title: 'dead',
//     pageCount: 23,
//     genre: 'roman',
//     authors: [{name: 'dkdkd', age: 23}]
// }
// let book3: IBooks;
//     book3 = {
//     title: 'dead',
//     pageCount: 23,
//     genre: 'roman',
//     authors: [{name: 'dkdkd', age: 23}]
// }

// interface IUsers {
//     name:string,
//     username:string,
//     password:number
// }
//
// let users: IUsers[];
//     users = [
//     {name: 'user1', username: 'us1', password: 1},
//     {name: 'user2', username: 'us2', password: 2},
//     {name: 'user3', username: 'us3', password: 3},
//     {name: 'user4', username: 'us4', password: 4},
//     {name: 'user5', username: 'us5', password: 5},
//     {name: 'user6', username: 'us6', password: 6},
//     {name: 'user7', username: 'us7', password: 7},
//     {name: 'user8', username: 'us8', password: 8},
//     {name: 'user9', username: 'us9', password: 9},
//     {name: 'user10', username: 'us10', password: 10}
// ]

// let x : number;
//     x= 10;
// if (x !== 0) {
//     console.log('Okey')
// } else {
//     console.log('Not Okey')
// }

// let time:number;
//     time = 59;
// if (time > 0 && time <= 15) {
//     console.log('1 day')
// } else if (time > 15 && time <= 30) {
//     console.log('2 day')
// } else if (time > 30 && time <= 45) {
//     console.log('3 day')
// } else if (time > 45 && time <= 60) {
//     console.log('4 day')
// }

// interface ICoursesAndDurationArray {
//     title:string,
//     monthDuration:number
// }
// let coursesAndDurationArray : ICoursesAndDurationArray[];
//     coursesAndDurationArray = [
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



////////////////LESSON 3 HOMEWORK///////////////////////

// let listOfItems: string[];
//     listOfItems= ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (const item of listOfItems) {
//     document.write(`
//         <li>${item}</li>
//     `)
// }
// document.write(`</ul>`)


// interface IProducts {
//     title:string,
//     price:number,
//     image:string
// }
//
// let products:IProducts[];
//     products= [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for (const product of products) {
//     document.write(`<div class="product-card">
// <h3 class="product-title">Product - ${product.title}. Price - ${product.price}</h3>
// <img src=${product.image} alt="">
// </div>`)
// }

////////////////LESSON 4 HOMEWORK////////////////////////

// function areaRectangle (a:number,b:number):number  {
//     return a * b;
// }
// console.log(areaRectangle(10, 20));

// function areaCircle (a:number,r:number,h:number):number  {
//     return a * r * h;
// }
// console.log(areaCircle(10, 5,4));

// function areaCylinder (r:number,h:number):number{
//     return 2 * Math.PI * r * h;
// }
// console.log(areaCylinder(10, 20));

////????????///consultation!!!!!
///!!!!!!!!!!// function textP(text:string):string{
//     document.write(`<p>${text}</p>`)
// }
// textP('hello okten');

// function list(liText:string):void{
//     document.write(`
// <ul>
// <li>${liText}</li>
// <li>${liText}</li>
// <li>${liText}</li>
// </ul>
// `)
// }
// list('okten');


// function list(liText:string,num:number[]):void{
//     document.write(`<ul>`)
//     for (const item of num) {
//         document.write(`
//             <li>${liText}</li>
//         `)
//     }
//     document.write(`</ul>`)
// }
// let num = [1,2,3,4,5];
// list('hello',num);


// function list(arrElements:any[]):void{
//     document.write(`<ul>`)
//     for (const item of arrElements) {
//         document.write(`
//             <li>${item}</li>
//         `)
//     }
//     document.write(`</ul>`)
// }
// let arrElements = [1,2,'hello',true,5];
// list(arrElements);


////????????///consultation!!!!!
// function exchange(sumUAH:number,currencyValues:any,exchangeCurrency:string):number{
//         let value;
//     for (let i = 0; i < currencyValues.length; i++) {
//         const currencyValue = currencyValues[i];
//         if (currencyValue.currency === exchangeCurrency){
//             value = currencyValue.value;
//             break;
//         }
//     }
//
//
//     const exchangedAmount = sumUAH / value;
//     return exchangedAmount;
// }
// let currencyValues = [
//     {currency:'USD',value:40},
//     {currency:'EUR',value:42}
// ]
// console.log(exchange(20000, currencyValues, 'EUR'));







