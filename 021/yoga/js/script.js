

// ТАЙМЕР НА САЙТЕ:

// 1) Определить дедлайн
// 2) Определить сколько времени осталось до дедлайна. От времени дедлайна отнимаем настоящую дату. И из них вытаскиваем дни, часы, минуты, секунды
// 3) Настраиваем таймер на странице. Прописываем функцию, которая будет изменять оставшуюся дату на странице в зависимости от нашего времени
// 4) Указать функцию, которая будет обновлять данные(дату) каждую секунду(если потребуется)

// let deadline = '2019-12-31'; // 1) Определили deadline

// function getTimeRemaining(endTime) {
//     let t = Date.parse(endTime) - Date.parse(new Date()), // МИЛИСЕКУНДЫ 2) Создали перменную(вычислили МИЛИСЕКУНДЫ), в которой из deadline-а отняли нынешнюю дату
//         seconds = Math.floor((t / 1000) % 60), // СЕКУНДЫ. Окуругляем до целого числа. Берем переменную "t" и получаем из нее секунды(делим на 1000), но в таком случае мы можем получить и 100 секунд, а необходимо максимум 59, поэтому (% 60). Другими словами: берем 5000 секунд и делим их на 60(как в формуле) = количество целых минут: 5000 / 60 = 83.3(3), где 3 - это и есть наши секунды, а 83 - количество целых минут 
//         minutes = Math.floor((t / 1000 / 60) % 60), // МИНУТЫ. Милисекунды / 1000 = кол-во секунд. Кол-во секунд / 60 = кол-во минут. И опять же нам нужно число после запятой в конечном результате, поэтому % 60
//         hours = Math.floor((t / (1000 * 60 * 60))); // ЧАСЫ. 1000 милисекунд * 60 секунд и * 60 = кол-во часов. Так как таймер заканчивается на часах, их может быть огромное количество, поэтому % 60 - не требуется
//         // hours = Math.floor((t / 1000 / 60 / 60) % 24), // ЧАСЫ. Этот случай используется, если на часах таймер не останавливается, есть еще дни, тогда кол-во часов будет ограничено и нам необходимо опять получить значение после запятой в итоговом результате - % 24 (в сутках 24 часа)
//         // days = Math.floor((t / (1000 * 60 * 60 * 24))), // ДНИ. Когда таймер заканчивается на днях, их число также может быть неограниченным, поэтому значение после запятой не требуется. * 24 - потому что в сутках 24 часа

//     return {   // Вывести из функции несколько переменных сразу - нельзя, поэтому заварачиваем их в объект и экспортируем объект
//         'total': t,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds,
//     };
// }

// // 3) Превращаем статичную верстку в динмическую (создаем таймер на странице)

//     // Чтобы создать таймер на странице необходимо: 
// // 1) получить блок, в котором таймер будет расположен
// // 2) daedline, который будем устанавливать


// function setClock(id, endTime) {   // находим наш блок через "id" поэтому первым аргументом функции будет "id". Второй аргумент - переменная "endTime" - в ней будет deadline
//     let timer = document.getElementById(id), // В эту переменную получаем наш блок, в котором таймер и в качестве аргумента(в скобках) указываем переменную "id", которую указали аргументом в функции ранее
//         hours = timer.querySelector('.hours'), // Получаем "hours" в переменной timer, тобишь в нашем блоке с таймером находим элемент с классом "hours"
//         minutes = timer.querySelector('.minutes'), // Получаем "minutes" в переменной timer, тобишь в нашем блоке с таймером находим элемент с классом "minutes"
//         seconds = timer.querySelector('.seconds'); // Получаем "seconds" в переменной timer, тобишь в нашем блоке с таймером находим элемент с классом "seconds"
//         timeInterval = setInterval(updateClock, 1000);
    
//     // 4) Запускаем скрипт через 1 секунду с помощью setInterval
//     function updateClock() {
//         let t = getTimeRemaining(endTime);
//         hours.textContent = t.hours;
//         minutes.textContent = t.minutes;
//         seconds.textContent = t.seconds;

//     // 5) остановка таймера, когда deadline будет достигнут
//         if (t.total <=0) {
//             clearInterval(timeInterval);
//         }
//     }
// }

// setClock('timer', deadline); // "timer" - id блока, в котором будет расположен таймер. Наша переменная deadline


// let deadline = '2020-02-11';

// function getVariables(endTime) {
//     let t = Date.parse(endTime) - Date.parse(new Date()),
//         seconds = Math.floor((t / 1000) % 60),
//         minutes = Math.floor((t / 1000 / 60) % 60),
//         hours = Math.floor((t / (1000 * 60 * 60)));
    
//     return {
//         'total': t,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds,
//     };
// }

// function setClock(id, endTime) {
//     let timer = document.getElementById(id),
//         hours = timer.querySelector('.hours'),
//         minutes = timer.querySelector('.minutes'),
//         seconds = timer.querySelector('.seconds'),
//         timeInterval = setInterval(updateClock, 1000);
    
//     function updateClock() {
//         let t = getVariables(endTime);
//         hours.textContent = t.hours;
//         minutes.textContent = t.minutes;
//         seconds.textContent = t.seconds;

//         if (t.total <= 0) {
//             clearInterval(timeInterval);
//         }
//     }
// }
// setClock('timer', deadline);

let deadline = '2020-02-11';

function timeLeft(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60)));
    
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setClock(id, endTime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
    
    function updateClock() {
        let t = timeLeft(endTime);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}
setClock('timer', deadline);