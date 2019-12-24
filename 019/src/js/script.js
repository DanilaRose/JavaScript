let elem = document.querySelector('.elem');

function myAnimation() {
    let pos = 0; // Начальная позиция (top: 0, left: 0) равна 0

    let id = setInterval(frame, 10); // Переменная setInterval, где аргумент(callback function(frame) и 10 мс- задержка) 

    function frame() {
        if (pos == 300) { // Если конечная позиция элемента(top: 300 и left: 300) равна 300px
            clearInterval(id); //  Анимация прекарщается
        } else {
            pos++; // Увеличение позиции (top и left) на 1px
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px';
        }
    }
}
elem.addEventListener('click', myAnimation);


let btnBlocks = document.querySelectorAll('.btn-block')[0],
    btnFirst = document.querySelectorAll('button');

btnBlocks.addEventListener('mouseover', function (enter) {
   if (enter.target && enter.target.matches('button.first')) {
       console.log('hello');
   } 
});

// ДЕЛЕГИРОВАНИЕ -  "Когда мы говорим классному руководителю, чтобы он донес информацию до каждого ученика в классе, даже нового" (где классный руководитель - родитель, ученики - потомки)

// let btnBlock = document.querySelector('.btn-block'), // Родитель
//     btn = document.querySelectorAll('button'); // Потомок

// btnBlock.addEventListener('click', function (event) {
//     if (event.target && event.target.classList.contains('first')) { // Проверяем, что, то, куда мы кликнули мышью действительно event и что, то, куда мы попали содержит класс "first"
//         console.log('Hello');
//     }
// });
    
    
 
// let btnBlock = document.querySelector('.btn-block'), // Родитель
//     btn = document.querySelectorAll('button'); // Потомок

// btnBlock.addEventListener('click', function (event) {
//     if (event.target && event.target.matches('button.first')) { // Ищем определенную кнопку с определенным классом
//         console.log('Hello');
//     }
// });