document.querySelectorAll('.librery_text_buttom').forEach((el) => {
    el.addEventListener('click', () => {
        let hidden_text_block = el.previousElementSibling;
        
        if(hidden_text_block.style.maxHeight) {
            document.querySelectorAll('.librery_text_block.hidden').forEach((el) => el.style.maxHeight = null)
            document.querySelectorAll('.librery_text_buttom > p').forEach((el) => el.innerHTML = "Показать все")
        } else {
            document.querySelectorAll('.librery_text_block.hidden').forEach((el) => el.style.maxHeight = null)
            hidden_text_block.style.maxHeight = hidden_text_block.scrollHeight + 'px'
            document.querySelectorAll('.librery_text_buttom > p').forEach((el) => el.innerHTML = "Скрыть")
        }
        
    });
    
})