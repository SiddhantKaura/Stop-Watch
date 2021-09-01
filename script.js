var obj = document.getElementsByClassName('btn-run')[0];
var inv = document.getElementsByClassName('invisible')[0];
var ctr = document.getElementsByClassName('counter')[0];
var inp = document.getElementById('inputId');

function updateCounter(){
    inv.classList.add('cover-up'); // transition up takes place

    setTimeout(function(){
        ctr.innerHTML = parseInt(inv.innerHTML);
        inv.classList.remove('cover-up');
        inv.innerHTML = parseInt(inv.innerHTML)+1;
    },500);
}

function setInitial(){
    ctr.innerHTML = 0;
    inv.innerHTML = 1;
    inp.value = 0;
}

function runHandler(){
    let newTime = document.getElementById('inputId').value;
       
    let i = 0;
    var interval = setInterval(function(){
        if(newTime < 0 || newTime > 99){
            clearInterval(interval);
            alert('Invalid Input');
            setInitial();
            return;
        }
        if(i == newTime){
            clearInterval(interval);
            setInitial();
            return;
        }
        i += 1;
        updateCounter();
    },1000);
    console.log(newTime);
}

obj.addEventListener('click',runHandler);