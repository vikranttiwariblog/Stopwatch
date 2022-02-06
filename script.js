let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

function start(){
    timer = true;
    watchController();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

function watchController(){

    if(timer == true){
        count = count + 1;

        if(count == 100){
            sec = sec + 1;
            count = 0;
        }

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }

        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        let newCount = count;
        let newSec = sec;
        let newMin = min;
        let newHr = hr;

        if(count < 10){
            newCount = "0" + newCount;
        }
        if(sec < 10){
            newSec = "0" + newSec;
        }
        if(min < 10){
            newMin = "0" + newMin;
        }
        if(hr < 10){
            newHr = "0" + newHr;
        }

        document.getElementById("hr").innerHTML = newHr;
        document.getElementById("min").innerHTML = newMin;
        document.getElementById("sec").innerHTML = newSec;
        document.getElementById("count").innerHTML = newCount;
        setTimeout("watchController()",10);
    }
}