var display = document.querySelector("#display")
var startStopButton = document.querySelector("button")
var lapButton = document.querySelectorAll("button")[2]
var minutes = 0
var seconds = 0
var doli = 0
var displayMinutes
var displaySeconds
var displayDoli
var stop = true  
var intervalId
var laps = document.querySelector("#laps")
var lapNumber = 1
function toggleStart(){
    if(stop){
        startStopButton.innerHTML = "Stop"
        intervalId = setInterval(run,10) 
        lapButton.disabled = false
    }
    else{
        startStopButton.innerHTML = "Start"
        clearInterval(intervalId)   
        lapButton.disabled = true
    }
    stop = !stop
}

function run(){
        doli++ 
    if(doli == 100){
        seconds++
        doli = 0   
    }
    if(seconds == 60){
        minutes++
        seconds = 0
    }
    if(seconds < 10){
        displaySeconds = "0"+seconds
    }else{
        displaySeconds = seconds
    }
    if(minutes < 10){
        displayMinutes = "0"+minutes
    }else{
        displayMinutes = minutes
    }   
    if(doli < 10){
        displayDoli = "0"+doli
    }else{
        displayDoli = doli
    }
    display.innerHTML = displayMinutes + ":" + displaySeconds + ":" + displayDoli
    
}

function reset(){
    display.innerHTML = "00:00:00"
    minutes = 0
    seconds = 0 
    doli = 0
    laps.innerHTML = ""
    lapNumber = 1
    if(!stop){
        toggleStart()
    }
}

function lap(){
    var lapNo = document.createElement("div")
    var lapTime = document.createElement("div")
    lapNo.innerHTML = lapNumber
    lapTime.innerHTML = displayMinutes + ":" + displaySeconds + ":" + displayDoli
    laps.append(lapNo, lapTime)
    lapNumber++
}