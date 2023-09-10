//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id,name,surname,email) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
}
let users = [
    new User(1,'name1','surname1','email@1'),
    new User(2,'name2','surname2','email@2'),
    new User(3,'name3','surname3','email@3'),
    new User(4,'name4','surname4','email@4'),
    new User(5,'name5','surname5','email@5'),
    new User(6,'name6','surname6','email@6'),
    new User(7,'name7','surname7','email@7'),
    new User(8,'name8','surname8','email@8'),
    new User(9,'name9','surname9','email@9'),
    new User(10,'name10','surname10','email@10')
];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let usersParni = [];
let usersNeParni = [];
users.filter((value) => {
    if (value.id % 2 === 0) {
        usersParni.push(value);
    } if (value.id % 2 !== 0){
        usersNeParni.push(value);
    }
});
console.log(usersParni);
console.log(usersNeParni);


//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSort = users.sort((a, b) => b.id - a.id );
console.log(usersSort);








