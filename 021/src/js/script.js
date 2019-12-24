let box = document.querySelector('.box');

// Если нужно узнать ТОЧНЫЕ данные ширины и высоты элемента(без бордера и полосы прокрутки) // На них не влияют свойства css

// let width = box.clientWidth,
//     height = box.clientHeight;


// console.log(width); // 483 // Почему 483? Потому что 17px занимает полоса прокрутки. 
// console.log(height); // 600

// Данные шираниы и высоты без бордера и полосы прокрутки

// let width = box.offsetWidth,
//     height = box.offsetHeight;


// console.log(width); // 500 
// console.log(height); // 600

// Данные ширины и высоты с учетом полосы прокрутки(по горизонтали) и скролла(по вертикали)

let width = box.scrollWidth,
    height = box.scrollHeight;


console.log(width); // 500 
console.log(height); // 600

// Раскрываем скрытый контент(при скролле)

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop); // Показывает расстояние в px, на которое опущен контент при скролле вниз
    box.scrollTop = 0;
});

// Правила box-sizing: border-box для элемента - включает padding

// Получение координат элемента в JS

console.log(box.getBoundingClientRect().left);



// Работа с документом на странице

console.log(document.documentElement.clientWidth); // Получает ширинну документа
console.log(document.documentElement.clientHeight); // Получает высоту документа
console.log(document.documentElement.scrollTop); // Показывает сколько в пикселях отмотали на странице сверху


scrollBy(0, 200); // Страница перемещается по координатам относительно нашего текущего местоположения scrollBy(x,y)
scrollTo(0, 200); // Страница перемещается в определенные координаты на странице scrollTo(x, y)