const libreryTextOpen = document.getElementById('librery_text');
const libreryTextButtom = document.getElementById('librery_text_buttom');

libreryTextButtom.addEventListener('click', function(e){
    libreryTextOpen.classList.toggle('open');
    libreryTextButtom.classList.toggle('active');

})