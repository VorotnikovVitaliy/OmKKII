const specialistsItemsBox = document.getElementById('specialists_items_box');
const specialistsMobileLabraryButtom = document.getElementById('specialists_items_mobile_labrary');

specialistsMobileLabraryButtom.addEventListener('click', function(e){
    specialistsItemsBox.classList.toggle('open');
    specialistsMobileLabraryButtom.classList.toggle('active');

})