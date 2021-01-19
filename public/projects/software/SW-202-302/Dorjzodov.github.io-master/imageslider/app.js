let q = 1

function next() {
    if (q == 5) {
        q = q - q
    }
    q++
    document.getElementById("next").href = "#slide-" + q

}

function prev() {
    if (q == 1) {
        q = q + 5
    }
    q--
    document.getElementById("prev").href = "#slide-" + q

}