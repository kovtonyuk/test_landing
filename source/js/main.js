/*------------ Открытие формы по нажатии кнопки ------------*/
(function () {
    var openFormButton = document.querySelector('.arrow-down');
    var form = document.querySelector('.form');
    var nav = document.querySelector('.nav');

    if(openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault();
            SK.form.open();
        })
    }

    /*------------ Валидация полей формы по клику кнопки ------------*/
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

    /*------------ Скрол меню по клику на пункт ------------*/
    if(nav) {
        nav.addEventListener('click', function (e) {
            var target = e.target;

            if(target.tagName.toLowerCase() !== 'a') {
                return;
            }

            e.preventDefault();
            SK.navigation.toggleToActiveLink(target);
        });
    }
}());