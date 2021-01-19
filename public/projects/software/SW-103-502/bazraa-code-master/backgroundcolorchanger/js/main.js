var myColors = ["pink", "aqua", "aquamarine", "brown"]
var i = 0
var myInput = document.querySelector("input")

function backgroundChanger() {
    document.body.style.backgroundColor = myColors[i]
    i++
    if (i == myColors.length) {
        i = 0
    }
}

function addColor() {
    document.body.style.backgroundColor = myInput.value
    if (document.body.style.backgroundColor == myInput.value) {
        myColors.push(myInput.value)

    } else {
        alert("Error")

    }
    myInput.value = ""
}