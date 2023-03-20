const scroll_new = document.querySelector('.news_scroll');
const scroll_item = document.querySelector('.news_scroll_item');
const width = scroll_item.offsetWidth;
const body = document.body;

console.log(width)

scroll_new.addEventListener('wheel', function(e) {
    const scroll_new = e.currentTarget

    if(e.wheelDelta > 0){
        this.scrollLeft -= width+24;
    } else {
        this.scrollLeft += width+24;
    }

    

}, {passive: true});


