document.querySelectorAll('.specialists_items.mobile_labrary').forEach((el) => {
    el.addEventListener('click', () => {
        let hidden_items_box = el.nextElementSibling;

        if(hidden_items_box.style.maxHeight) {
            document.querySelectorAll('.specialists_items_box').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.specialists_items_box').forEach((el) => el.style.maxHeight = null)
            hidden_items_box.style.maxHeight = hidden_items_box.scrollHeight + 'px'
        }
        
    });
    
})