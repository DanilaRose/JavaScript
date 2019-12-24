let more = document.querySelector('.more'), // Кнопка
    overlay = document.querySelector('.overlay'), // Модальное окно
    close = document.querySelector('.popup-close'); // Крестик

// Клик на кнопку
more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash'); // Обращаемся к кнопке через this и добавляем ей класс, для которого прописана анимация
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы, когда открывается модальное окно
});

// Клик на крестик
close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash'); // Обращаемся к more, так как этой переменной добавляли класс "more-splash"
    document.body.style.overflow = ''; // Возобновляем прокрутку старницы, после закрытия модального окна
});


