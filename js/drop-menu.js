document.querySelectorAll('.header-menu-icon').forEach((el) => {
    el.addEventListener('click', () => {
        let menu_drop = el.nextElementSibling;
        // console.log(menu_drop);
        if(menu_drop.style.maxHeight) {
            document.querySelectorAll('.header_menu_drop').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.header_menu_drop').forEach((el) => el.style.maxHeight = null)
            menu_drop.style.maxHeight = menu_drop.scrollHeight + 'px'

        }
        
    });
    
})








