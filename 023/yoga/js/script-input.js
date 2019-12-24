let input = document.querySelector('#age');

function showUser(surname, name) {
    let b = alert('Пользователь ' + surname + ' ' + name + ' его возраст ' + this.value);
    return b; // Вывод значение из функции
}
let d = showUser.apply(input); // Связываем контекст вызова this и input(можно использовать call())


let numbers = {
    numberA: 5,
    numberB: 6,
    sum: function () {
        function calculate() {
           return this.numberA + this.numberB;
        }
        return calculate.call(this);
    }
};
console.log(numbers.sum());