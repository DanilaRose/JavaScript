
// КОНСТРУКТОРЫ И КЛАССЫ

// // ES5
// // функция КОНСТРУКТОР - с помощью нее можно создавать новых пользователей (однотипных)
// function User(name, id) { // функция по классификации - относиться к ОБЪЕКТАМ(в нее можно записать и методы и свойства)
//     this.name = name;  // У каждого пользователя, есть уникальное имя
//     this.id = id;  // У каждого пользователя есть уникальный идентификатор 
//     this.human = true;
//     this.hello = function () {   // Метод в функции-конструкторе
//         console.log('Hello!' + this.name);  // Сейчас, используя this - мы обращаемся напрямую к элементу объекта. 
//     };
// }

// User.prototype.exit = function (name) { // При помощи свойства "prototype" мы можем добавлять новые методы в конструктор, и они будут прототипно наследоваться у потомков 
//     console.log('Пользователь ' + this.name + ' ушел');
// };

// // Функцию, как и многое другое можно создать через оператор new
// let ivan = new User('Ivan', 25), // В этих переменных лежат не функции, а объекты. Когда мы вызвали функцию с "User" и передали ей какие-то аргументы - она стала ФУНКЦИЕЙ-КОНСТРУКТОРОМ
//     alex = new User('Alex', 20); // В этих переменных лежат не функции, а объекты. Когда мы вызвали функцию с "User" и передали ей какие-то аргументы - она стала ФУНКЦИЕЙ-КОНСТРУКТОРОМ

// console.log(ivan);
// console.log(alex);

// ivan.exit() // exit - это метод




// ES6


class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello! ${this.name}`);
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`);
    }
}
let ivan = new User('Ivan', 23);
let alex = new User('Alex', 20);
console.log(ivan);
console.log(alex);
ivan.hello();
alex.hello();