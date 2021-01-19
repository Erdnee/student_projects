let inputValue = document.getElementById("inputValue").value
let input = document.getElementById("inputValue")
let y = 1
let x, c, buttonRemove, spanRemove
function go() {
    if (input.value == "") {
        alert("utga oruulna uu")
    } else {
        let div = document.createElement("div")
        div.setAttribute("id", "div" + y)
        let span = document.createElement("span")
        span.innerHTML = document.getElementById("inputValue").value
        let button = document.createElement("span")
        button.innerHTML = " " + "-" + "<hr>"
        button.style.color = "red"
        document.getElementById("div").appendChild(div)
        document.getElementById("div" + y).appendChild(document.body.appendChild(span))
        document.getElementById("div" + y).appendChild(document.body.appendChild(button))
        button.onclick = function() {
            div.remove()
        }
        input.value = ""
        y++
    }


}