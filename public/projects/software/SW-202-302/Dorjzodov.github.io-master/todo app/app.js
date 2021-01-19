let inputValue = document.getElementById("inputValue").value
let input = document.getElementById("inputValue")
let q = 1
let x, c, buttonRemove, spanRemove
    // function go() {
    //     let span=document.createElement("span")
    //     span.innerHTML=q+"-"+document.getElementById("inputValue").value
    //     let button=document.createElement("button")
    //     button.innerHTML="remove"
    //     span.setAttribute("id", "span"+q)
    //     button.setAttribute("id","button"+q)
    //     document.body.appendChild(span)
    //     document.body.appendChild(button)
    //     button.onclick=function(){
    //         q--
    //         document.getElementById("span"+q).remove() 
    //         button.remove()
    //     }
    //     q++
    // }
function go() {
    if (input.value == "") {
        alert("utga oruulna uu")
    } else {
        let div = document.createElement("div")
        div.setAttribute("id", "div" + q)
        let span = document.createElement("span")
        span.innerHTML = document.getElementById("inputValue").value
        let button = document.createElement("button")
        button.innerHTML = "remove"
        document.body.appendChild(div)
        document.getElementById("div" + q).appendChild(document.body.appendChild(span))
        document.getElementById("div" + q).appendChild(document.body.appendChild(button))
        button.onclick = function() {
            div.remove()
        }
        input.value = ""
        q++
    }


}