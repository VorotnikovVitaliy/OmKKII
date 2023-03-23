document.querySelectorAll('.partners_buttom').forEach((el) => {
    el.addEventListener('click', () => {
        let hidden_partners = el.previousElementSibling;
        
        if(hidden_partners.style.maxHeight) {
            document.querySelectorAll('.partners_items_hidden').forEach((el) => el.style.maxHeight = null)
            document.querySelectorAll('.partners_buttom').forEach((el) => el.innerHTML = "Показать ещё")
        } else {
            document.querySelectorAll('.partners_items_hidden').forEach((el) => el.style.maxHeight = null)
            hidden_partners.style.maxHeight = hidden_partners.scrollHeight + 'px'
            document.querySelectorAll('.partners_buttom').forEach((el) => el.innerHTML = "Скрыть")
        }
        console.log(hidden_partners)
    });
    
})