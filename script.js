const start=document.querySelector('.start');
const pause=document.querySelector('.pause');
const reset=document.querySelector('.reset');
let seconds=document.querySelector('.seconds');
let resets=document.querySelector('.reset');
let value;
let id;

function timerStart(){
   
}

start.addEventListener('click',()=>{
    id=setInterval(timerStart,1000);
})

pause.addEventListener('click',()=>{
    clearInterval(id);
})

reset.addEventListener('click',()=>{
    clearInterval(id);
    seconds.innerHTML='00';
})