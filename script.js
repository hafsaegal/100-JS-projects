const start= document.getElementById("start");
const stop= document.getElementById("stop");
const reset= document.getElementById("reset");
const timer= document.getElementById("timer");

let timeLeft=1500;
let interval;

const updateTimer= () => {
    const minutes= Math.floor(timeLeft/60);
    const seconds= timeLeft % 60;

    timer.innerHTML = `${minutes}:${seconds}`;
    

}

const startTimer= () => {
    interval = setInterval(() =>{}, 1000)
}