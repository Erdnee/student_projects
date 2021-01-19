let x = false
let y = true
let z = true
let input = document.getElementById("input")

function huvaah() {
    if (x) {
        document.calc.txt.value += '/';
        x = false
        y = true
    }
}

function urjeh() {
    if (x) {
        document.calc.txt.value += '*'
        y = true
        x = false
    }

}

function nemeh() {
    if (x) {
        document.calc.txt.value += '+'
        y = true
        x = false
    }

}

function hasah() {
    if (x) {
        document.calc.txt.value += '-'
        y = true
        x = false
    }
}

function one() {
    document.calc.txt.value += '1'
    x = true
}

function two() {
    document.calc.txt.value += '2'
    x = true
}

function three() {
    document.calc.txt.value += '3'
    x = true
}

function four() {
    document.calc.txt.value += '4'
    x = true
}

function five() {
    document.calc.txt.value += '5'
    x = true
}

function six() {
    document.calc.txt.value += '6'
    x = true
}

function seven() {
    document.calc.txt.value += '7'
    x = true
}

function eigth() {
    document.calc.txt.value += '8'
    x = true
}

function nine() {
    document.calc.txt.value += '9'
    x = true
    z = true
}

function zero() {
    document.calc.txt.value += '0'
    x = true
}

function twoZero() {
    document.calc.txt.value += '00'
    x = true
    z = true
}

function tseg() {
    if (x && y && z) {
        document.calc.txt.value += '.'
        x = false
        y = false
    }
}

function hariu() {
    if (document.calc.txt.value != "") {
        document.calc.txt.value = eval(calc.txt.value)
        y = true
        x = true
    } else {
        x = false
    }
}

function reset() {
    document.calc.txt.value = ''
    x = false
    y = true
    z = true

}