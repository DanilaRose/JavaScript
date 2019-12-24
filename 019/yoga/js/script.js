// 'esversion: 6';
// window.addEventListener('DOMContentLoaded', function () { // JS начинает срабатывать только тогда, когда загрузилось все DOM-дерево(вся структура сайта)
    
//     'use strict'; // Переводит весь код на странице в строгий режим
//     let tab = document.querySelectorAll('.info-header-tab'), // Меню
//         info = document.querySelectorAll('.info-header')[0], // Родитель меню
//         tabContent = document.querySelectorAll('.info-tabcontent'); // Родитель контента
    
//     // Скрываем все tabContent
//     function hideTabContent(a) {
//         for (let i = a; i < tabContent.length; i++) {
//             tabContent[i].classList.remove('show'); // Он в css прописал класс show, который скрывает контент (css: .show: flex)
//             tabContent[i].classList.add('hide'); // и класс hide, который добавляет новый класс (css: .hide: none)
//         }
//     }

//     hideTabContent(1); // Что происходит: вместо "a" подставляется 1 и цикл срабатывает уже не с 0, а с 1 - то есть скрывает все элементы, кроме первого

//     // Показываем определенный tabContent
//     function showTabContent(b) {
//         if (tabContent[b].classList.contains('hide')) { // Проверяем, действительно ли этот элемент скрыт
//             tabContent[b].classList.remove('hide');
//             tabContent[b].classList.add('show');
//         }
//     }
//     // Назначаем обработчик событий при клике на каждый из табов(элемент меню)
//     info.addEventListener('click', function (event) {
//         let target = event.target;
//         if (target && target.classList.contains('info-header-tab')) { // Проверяем: 1) мы попали в цель 2) мы попали точно в конкретный элемент(в конкретный класс)
//             // Берем все наши табы перебираем их и сравниваем с тем, куда мы кликнули
//             for (let i = 0; i < tab.length; i++) {
//                 if (target == tab[i]) {
//                     hideTabContent(0);
//                     showTabContent(i);
//                     break;
//                 }

//             }
//         }
//     });
// }); 



// // ТАБЫ - как разделители контента на странице

window.addEventListener('DOMContentLoaded', function () {
    let info = document.querySelectorAll('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        content = document.querySelectorAll('.info-tabcontent');
    // Скрываем конткент
    function hideContent(a) {
        for (let i = a; i < content.length; i++) {
            content[i].classList.remove('show');
            content[i].classList.add('hide');
        }
    }
    hideContent(1);
    // Показываем определенный конткент
    function showContent(b) {
        if (content[b].classList.contains('hide')) {
            content[b].classList.remove('hide');
            content[b].classList.add('show');
        }
    }
    // Перебираем пункты меню. Назначаем обработчик событий при клике на элемент меню
    info[0].addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideContent(0);
                    showContent(i);
                    break;
                }
            }
        }
    });
});