
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
users.filter(value => {
    if (value.id % 2 === 0){
        console.log(value);
    }
});

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let userSort = users.sort((a, b) => a.id - b.id);
console.log(userSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'name1', 'surname1', 'email@1', 123,['tomato','milk']),
    new Client(2, 'name2', 'surname2', 'email@2', 123,['tomato','milk','water']),
    new Client(3, 'name3', 'surname3', 'email@3', 123,['tomato','milk','water','egg']),
    new Client(4, 'name4', 'surname4', 'email@4', 123,['tomato']),
    new Client(5, 'name5', 'surname5', 'email@5', 123,['tomato','milk']),
    new Client(6, 'name6', 'surname6', 'email@6', 123,['tomato','milk','water']),
    new Client(7, 'name7', 'surname7', 'email@7', 123,['tomato','milk','egg']),
    new Client(8, 'name8', 'surname8', 'email@8', 123,['tomato','milk','bread']),
    new Client(9, 'name9', 'surname9', 'email@9', 123,['tomato','milk']),
    new Client(10, 'name10', 'surname10', 'email@10', 123,['tomato','milk']),
]


// створити пустий масив, наповнити його 10 об'єктами Client
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortOrder = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortOrder);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model,manufacturer, year, maxSpeed, engineVolume,driver){
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

//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


//  class Car {
//
//      constructor  (model,manufacturer, year, maxSpeed, engineVolume,driver){
//          this.model = model;
//          this.manufacturer = manufacturer;
//          this.year = year;
//          this.maxSpeed = maxSpeed;
//          this.engineVolume = engineVolume;
//          this.driver = null;
//          this.drive = function () {
//              return `Їдемо зі швидкістю ${maxSpeed} на годину`
//          }
//          this.info = function () {
//              return `model - ${model};
//         manufacturer - ${manufacturer};
//         year - ${year};
//         maxSpeed - ${maxSpeed};
//         engineVolume - ${engineVolume}`
//          }
//
//          this.increaseMaxSpeed = function (newSpeed) {
//              return `Попередня максимальна швидкість була ${maxSpeed}, нова швидкість - ${maxSpeed+newSpeed}`
//          }
//          this.changeYear = function (newYear) {
//              return `Попередній рік випуску був ${year}, новий рік - ${newYear}`
//          }
//          this.addDriver = function (driver) {
//              if (typeof driver === 'object') {
//                  this.driver = driver;
//              } else {
//                  console.error('Error - must be object');
//              }
//          };
//
//      }
//  }
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




//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

function Cinderella (name,age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
class Prince {

    constructor(name, age, shoeFound) {
        this.name = name;
        this.age = age;
        this.shoeFound = shoeFound;
    }
}
let prince = new Prince('Vasya',31,39);

let cinderellas = [
    new Cinderella('Cinderella1',20,30),
    new Cinderella('Cinderella2',22,32),
    new Cinderella('Cinderella3',23,33),
    new Cinderella('Cinderella4',24,34),
    new Cinderella('Cinderella5',25,35),
    new Cinderella('Cinderella6',26,36),
    new Cinderella('Cinderella7',29,37),
    new Cinderella('Cinderella8',28,38),
    new Cinderella('Cinderella9',29,39),
    new Cinderella('Cinderella10',30,40)
];
for (const cinderella of cinderellas) {
    if (prince.shoeFound === cinderella.footSize){
        console.log(`Дівчина, яку шукав ${prince.name} це - ${cinderella.name}`)
    }
}

//// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let cinderellasFind = cinderellas.find(function (findGirl){
    if (findGirl.footSize === prince.shoeFound){
        return `This is - ${findGirl}`
    }
});
console.log(cinderellasFind);