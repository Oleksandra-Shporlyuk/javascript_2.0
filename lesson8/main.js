//////////////////ФУНКЦІЇ КОНСТРУКТОРИ///////

// function User(name,age,status,wife,husbandName) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
//     this.husband = {name:husbandName}
//     this.greeting = function (){
//         console.log('hi')
//     }
//
// }
//
// let user1 = new User('sasha',23,true);
// let user2 = new User('sasha2',21,true);
// let user3 = new User('sasha2',21,true,{name:'masha',age:43});
// let user4 = new User('sasha2',21,true,{name:'masha',age:43},'oleg');
// class User {
//
//     constructor(name, age, status) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
// }

/////////////////////////////// task //////////////////////

//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
 function User(id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
 }
 let users = [
     new User(2, 'name1', 'surname1', 'email@1', 123),
     new User(1, 'name2', 'surname2', 'email@2', 123),
     new User(3, 'name3', 'surname3', 'email@3', 123),
     new User(4, 'name4', 'surname4', 'email@4', 123),
     new User(5, 'name5', 'surname5', 'email@5', 123),
     new User(6, 'name6', 'surname6', 'email@6', 123),
     new User(7, 'name7', 'surname7', 'email@7', 123),
     new User(8, 'name8', 'surname8', 'email@8', 123),
     new User(9, 'name9', 'surname9', 'email@9', 123),
     new User(10, 'name10', 'surname10', 'email@10', 123)
 ];

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// users.filter(value => {
//     if (value.id % 2 === 0){
//         console.log(value);
//     }
// });

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let userSort = users.sort((a, b) => a.id - b.id);
// console.log(userSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clients = [
//     new Client(1, 'name1', 'surname1', 'email@1', 123,['tomato','milk']),
//     new Client(2, 'name2', 'surname2', 'email@2', 123,['tomato','milk','water']),
//     new Client(3, 'name3', 'surname3', 'email@3', 123,['tomato','milk','water','egg']),
//     new Client(4, 'name4', 'surname4', 'email@4', 123,['tomato']),
//     new Client(5, 'name5', 'surname5', 'email@5', 123,['tomato','milk']),
//     new Client(6, 'name6', 'surname6', 'email@6', 123,['tomato','milk','water']),
//     new Client(7, 'name7', 'surname7', 'email@7', 123,['tomato','milk','egg']),
//     new Client(8, 'name8', 'surname8', 'email@8', 123,['tomato','milk','bread']),
//     new Client(9, 'name9', 'surname9', 'email@9', 123,['tomato','milk']),
//     new Client(10, 'name10', 'surname10', 'email@10', 123,['tomato','milk']),
// ]

// створити пустий масив, наповнити його 10 об'єктами Client
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortOrder = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sortOrder);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model,manufacturer, year, maxSpeed, engineVolume,driver){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.driver = null;
//     this.drive = function () {
//         return `Їдемо зі швидкістю ${maxSpeed} на годину`
//     }
//     this.info = function () {
//         return `model - ${model};
//         manufacturer - ${manufacturer};
//         year - ${year};
//         maxSpeed - ${maxSpeed};
//         engineVolume - ${engineVolume}`
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         return `Попередня максимальна швидкість була ${maxSpeed}, нова швидкість - ${maxSpeed+newSpeed}`
//     }
//     this.changeYear = function (newYear) {
//         return `Попередній рік випуску був ${year}, новий рік - ${newYear}`
//     }
//     this.addDriver = function (driver) {
//         if (typeof driver === 'object') {
//             this.driver = driver;
//         } else {
//             console.error('Error - must be object');
//         }
//     };
//
// }
//
// let car = new Car('bmw','Germany',2022,400,4,'Oleg');
// let driver1 = {
//     name:'Oleg',
//     age:23
// }
// console.log(car);
// console.log(car.drive());
// console.log(car.info());
// console.log(car.increaseMaxSpeed(200));
// console.log(car.changeYear(2023));
// car.addDriver(driver1);

//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


 class Car {

     constructor  (model,manufacturer, year, maxSpeed, engineVolume,driver){
         this.model = model;
         this.manufacturer = manufacturer;
         this.year = year;
         this.maxSpeed = maxSpeed;
         this.engineVolume = engineVolume;
         this.driver = null;
         this.drive = function () {
             return `Їдемо зі швидкістю ${maxSpeed} на годину`
         }
         this.info = function () {
             return `model - ${model}; 
        manufacturer - ${manufacturer}; 
        year - ${year}; 
        maxSpeed - ${maxSpeed}; 
        engineVolume - ${engineVolume}`
         }

         this.increaseMaxSpeed = function (newSpeed) {
             return `Попередня максимальна швидкість була ${maxSpeed}, нова швидкість - ${maxSpeed+newSpeed}`
         }
         this.changeYear = function (newYear) {
             return `Попередній рік випуску був ${year}, новий рік - ${newYear}`
         }
         this.addDriver = function (driver) {
             if (typeof driver === 'object') {
                 this.driver = driver;
             } else {
                 console.error('Error - must be object');
             }
         };

     }
 }

let car = new Car('bmw','Germany',2022,400,4,'Oleg');
let driver1 = {
    name:'Oleg',
    age:23
}
console.log(car);
console.log(car.drive());
console.log(car.info());
console.log(car.increaseMaxSpeed(200));
console.log(car.changeYear(2023));
car.addDriver(driver1);