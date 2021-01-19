let y = 1

function next() {
    if (y == 4) {
        y = y - y
    }
    y++
    document.getElementById("next").href = "#slide-" + y

}

function prev() {
    if (y == 1) {
        y = y + 4
    }
    y--
    document.getElementById("prev").href = "#slide-" + y

}