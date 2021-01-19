let minSpan = document.getElementById("minSpan")
let secSpan = document.getElementById("secSpan")
let doleSpan = document.getElementById("doleSpan")
let x = false
let interval
let q = 1
let w = 1
let e = 1
let qwe = 1
let laps = true
if (x == false) {
    document.getElementById("lapButton").style.pointerEvents = "none"
    document.getElementById("lapButton").style.backgroundColor = "lightgrey"
    document.getElementById("lapButton").style.color = "grey"
}

function start() {
    if (x == false) {
        interval = setInterval(timer, 0.1)
        x = true
        document.getElementById("startButton").innerHTML = "Pause"
        laps = false
        document.getElementById("lapButton").style.backgroundColor = "white"
        document.getElementById("lapButton").style.color = "black"
        document.getElementById("lapButton").style.pointerEvents = "unset"

    } else {
        clearInterval(interval)
        x = false
        document.getElementById("startButton").innerHTML = "Start"
        document.getElementById("lapButton").style.pointerEvents = "none"
        document.getElementById("lapButton").style.backgroundColor = "lightgrey"
        document.getElementById("lapButton").style.color = "grey"
        laps = true
    }
}

function timer() {
    if (doleSpan.innerHTML < 9) {
        doleSpan.innerHTML = "0" + q
    } else {
        doleSpan.innerHTML = q
    }
    if (doleSpan.innerHTML > 98) {
        q = 0
        doleSpan.innerHTML = "0" + q
        if (secSpan.innerHTML < 9) {
            secSpan.innerHTML = "0" + w
        } else {
            secSpan.innerHTML = w

        }
        w++
    }
    if (secSpan.innerHTML > 59) {
        w = 0
        secSpan.innerHTML = "0" + w
        w++
        if (minSpan.innerHTML < 9) {
            minSpan.innerHTML = "0" + e
            e++
        } else {
            minSpan.innerHTML = e
            e++

        }
    }

    q++
}

function reset() {

    minSpan.innerHTML = "00"
    secSpan.innerHTML = "00"
    doleSpan.innerHTML = "00"
    q = 1
    w = 1
    e = 1
    qwe = 1
    clearInterval(interval)
    laps = true
    x = false
    document.getElementById("startButton").innerHTML = "Start"
    document.getElementById("remove").remove()
    let div = document.createElement("div")
    div.setAttribute("id", "remove")
    document.getElementById("lapDiv").append(div)
    document.getElementById("lapButton").style.pointerEvents = "none"
    document.getElementById("lapButton").style.backgroundColor = "lightgrey"
    document.getElementById("lapButton").style.color = "grey"
}


function lap() {
    if (!laps) {
        let p = document.createElement('p')
        p.setAttribute("class", "pTag")
        p.setAttribute("id", "pTag")
        p.innerHTML = "#" + qwe + "     " + minSpan.innerHTML + ":" + secSpan.innerHTML + ":" + doleSpan.innerHTML
        document.getElementById("remove").append(p)
        qwe++
    }

}