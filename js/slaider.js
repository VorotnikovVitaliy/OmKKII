let slaider = document.getElementsByClassName('slaider-item'),
    dot = document.getElementsByClassName('slaider-dot'),
    slaiderIndex = 1;


function showSlaider (n) {
    
    if(n < 1){
        slaiderIndex = slaider.length;
    }else if(n > slaider.length) {
        slaiderIndex = 1;
    }
    for(let i = 0; i < slaider.length; i++) {
        slaider[i].style.display = 'none';
    }
    for(let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace("active", "");
    }
    slaider[slaiderIndex - 1].style.display = 'flex';
    dot[slaiderIndex - 1].className += " active";
}

function currentSlaider (n) {
    showSlaider(slaiderIndex = n);
    makeTimer();
}

let timer = 0;
makeTimer();
function makeTimer(){
    clearInterval(timer) 
    timer = setInterval(function(){
        slaiderIndex++;
        showSlaider(slaiderIndex);
    },10000);
}

  

