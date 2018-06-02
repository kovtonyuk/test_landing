/*------------ Открытие формы по нажатии кнопки ------------*/
(function () {
    var openFormButton = document.querySelector('.arrow-down');
    var form = document.querySelector('.form');

    if(openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault();
            SK.form.open();
        })
    }

    /*------------ Валидация по клику кнопки ------------*/
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (SK.form.isValid()) {
                console.log('All good');
            } else {
                console.log('Is not valid');
            }
        })
    }
}());