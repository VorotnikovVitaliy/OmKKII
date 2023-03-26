document.querySelectorAll('.item_col_header.mobile').forEach((el) => {
    el.addEventListener('click', () => {
        let hidden_col_item = el.nextElementSibling;

        if(hidden_col_item.style.maxHeight) {
            document.querySelectorAll('.col_items.mobile').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.col_items.mobile').forEach((el) => el.style.maxHeight = null)
            hidden_col_item.style.maxHeight = hidden_col_item.scrollHeight + 'px'
        }
        
    });
    
})