// let ongo = ["pink", "black", "blue", "green", "purple", "red", "yellow", "grey"]
// let body = document.getElementById("body")
// let c = 0

// function dar() {
//     let x = document.getElementById("body")
//     c = c + 1
//     body.style.backgroundColor = ongo[c]
//     if (c === (ongo.length - 1)) {
//         c = c - (ongo.length - 1)
//     }
// }

// function pusher() {
//     let inputValue = document.getElementById("inputValue").value
//     ongo.push(inputValue)
//     document.getElementById("inputValue").value = ""
//     body.style.backgroundColor = inputValue

// }
// let interval
// let i = 0
// let click = true

// function bodyClick() {
//     if (click == true) {
//         interval = setInterval(colorChanger, 1000)
//     } else {

//     }
// }

// function colorChanger() {

// }
var count = 0;
var body = document.getElementById("body")
var colors = ["blue", "red", "black", "orange"]
var validCode = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function changecol() {
    body.style.backgroundColor = colors[count]
    count++
    console.log(count)
    if (count == colors.length) {
        count = 0;
    }
}

function pusher() {
    var y = document.getElementById("in").value
    console.log(colors)
    document.getElementById("in").value = ""
    var valid = hexChecker(y)
    if (valid == true) {
        colors.push("#" + y)
        body.style.backgroundColor = "#" + y
    } else {
        alert("Таны hex код буруу байна")
    }
}

function hexChecker(hex) {
    if (hex.length == 6) {
        for (var i = 0; i <=
            5; i++) {
            if (!validCode.includes(hex[i])) {
                return false
            }
        }
    } else {
        return false
    }
    return true
}