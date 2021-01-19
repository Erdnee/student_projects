let x = true
let miniut
let secound
let interval
let min = document.getElementById("minSpan")
let sec = document.getElementById("secSpan")
let i = 0
let color = ["red", "blue"]
let colorInterval
document.getElementById("stop").style.visibility = "hidden"

function startButton() {
    if (min.value == "" && sec.value == "") {
        alert("Та утга оруулна уу!!")
    } else {
        if (x == true) {
            let minInputValue = Number(document.getElementById("minInput").value)
            let secInputValue = Number(document.getElementById("secInput").value)
            console.log(secInputValue)
            x = false
            interval = setInterval(timer, 1000)
            miniut = minInputValue
            secound = eval(secInputValue)
            if (secound < 10) {
                sec.innerHTML = "0" + secound
            } else {
                sec.innerHTML = secound

            }
            document.body.style.backgroundColor = "lightblue"
            clearInterval(colorInterval)
            document.getElementById("start").style.visibility = "hidden"
            document.getElementById("minInput").style.visibility = "hidden"
            document.getElementById("secInput").style.visibility = "hidden"
            document.getElementById("start").style.float = "right"
        } else {
            clearInterval(interval)
            min.innerHTML = "00"
            sec.innerHTML = "00"
            x = true
        }
    }

}

function timer() {
    if (secound == 0) {
        secound = secound + 60
        miniut--

    }
    if (secound < 11) {
        secound--
        sec.innerHTML = "0" + secound
    } else {
        secound--
        sec.innerHTML = secound
    }
    if (miniut < 10) {
        if (miniut == 0) {
            min.innerHTML = "0" + miniut
        } else {
            min.innerHTML = "0" + miniut
        }
    } else {
        min.innerHTML = miniut
    }
    if (miniut == 0 || secound > 59) {
        if (secound == 0) {
            min.innerHTML = "00"
            sec.innerHTML = "00"
            clearInterval(interval)
            colorInterval = setInterval(colorChanger, 100)
            document.getElementById("stop").style.visibility = "visible"
            document.getElementById("stop").style.float = "left"
            x = true

        }
        if (secound > 59) {
            min.innerHTML = "00"
            sec.innerHTML = "00"
            clearInterval(interval)
            x = true
            alert("Таний Secound 59 аас гэтэрсэн байна!!!!")
        }
    }
}

function colorChanger() {
    document.body.style.backgroundColor = color[i]
    i++
    if (color.length == i) {
        i = 0
    }
}

function stop() {
    clearInterval(colorInterval)
    document.getElementById("start").style.visibility = "visible"
    document.getElementById("start").style.float = "left"
    document.getElementById("stop").style.visibility = "hidden"
    document.getElementById("stop").style.float = "none"
    document.getElementById("minInput").style.visibility = "visible"
    document.getElementById("secInput").style.visibility = "visible"
    document.body.style.backgroundColor = "lightblue"

}