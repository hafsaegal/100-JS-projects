const start= document.getElementById("start");
const stop= document.getElementById("stop");
const reset= document.getElementById("reset");
const timer= document.getElementById("timer");

let timeLeft=1500;// total time 25min x60
let interval;//variable that isn't assigned anything as it will be constantly updated as time changes


//create function
const updateTimer= () => {
    //create variable and change it to a whole number
    const minutes= Math.floor(timeLeft/60);
    const seconds= timeLeft % 60;// give reminder
   
    //access the timer and add variable
    //padstart doesn't work with intergers, hence change to string; if it goes down to one digit add "0"
    timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    

}
// variable that assigns a function that takes 2 arguments: a function and a time:1000. It executes the function every second.


const startTimer= () => {
    interval = setInterval(() =>{
        timeLeft--;
        updateTimer();

        if (timeLeft=== 0){
            clearInterval(interval);// clear info
            alert("Time's up!");//alert user
            timeLeft = 1500;// reset the clock
            updateTimer();// display using updateTimer
        }


    }, 1000)
};

const stopTimer= () => clearInterval(interval);//stop at the whatever number

const resetTimer = () => {
    clearInterval(interval);
    timeLeft=1500;
    updateTimer();
};

//assign function to those buttons
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click",resetTimer);
