const menuItems = Array.from(document.querySelectorAll('.menu__item'));

menuItems.forEach(item => {
    if (item.querySelector('.menu_sub')) {
        item.querySelector('.menu__link').onclick = function (event) {            
            if (item.querySelector('.menu_active')) {
                item.querySelector('.menu_active').classList.remove('menu_active');
            } else {
                document.querySelectorAll('.menu_sub').forEach(item => {
                    if (item.classList.contains('menu_active')) {
                        item.classList.remove('menu_active');
                    };
                });                 
                item.querySelector('.menu_sub').classList.add('menu_active');
            };
            return false;
        };
    };
});