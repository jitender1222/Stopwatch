const start=document.querySelector('.start');
const pause=document.querySelector('.pause');
const reset=document.querySelector('.reset');
let seconds=document.querySelector('.seconds');
let min=document.querySelector('.min');
let hrs=document.querySelector('.hrs');
let resets=document.querySelector('.reset');
let value=00;
let minutes=00;
let id;

function timerStart(){ 
    value++;
    if(value<10){
        seconds.innerHTML='0'+value;   
    }
    if(value>10){
        seconds.innerHTML=value;
    }
    if(value>99){
        minutes++;
        min.innerHTML='0'+minutes + ":";
        value=0;
        seconds.innerHTML='0'+value;
     }
     if(minutes>9){
        min.innerHTML=minutes + ":";
     }
}

start.addEventListener('click',()=>{
    id=setInterval(timerStart);
})

pause.addEventListener('click',()=>{
    clearInterval(id);
})

reset.addEventListener('click',()=>{
    clearInterval(id);
    value="00";
    minutes="00:";
    seconds.innerHTML=value;
    min.innerHTML=minutes;
})