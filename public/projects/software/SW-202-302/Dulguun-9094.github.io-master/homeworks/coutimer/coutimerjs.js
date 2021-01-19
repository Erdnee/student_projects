var x = 0
var inputValue = Number(document.getElementById("inputValue").value)

 function plus(){       
    var inputValue = Number(document.getElementById("inputValue").value)
    var h1tag= Number(document.getElementById("h1tag").innerHTML)
    if(inputValue == ""){
            var quiz=h1tag+1
    }else{
            var quiz=h1tag + inputValue  
    }
        document.getElementById("h1tag").innerHTML= quiz  

}

 function minus(){
        var inputValue = Number(document.getElementById("inputValue").value)
        var h1tag= Number(document.getElementById("h1tag").innerHTML)
    if (inputValue == "") {
            var quiz = h1tag - 1 
    } else {
            var quiz = h1tag - inputValue  
    }
        document.getElementById("h1tag").innerHTML = quiz
}

 function reset(){
        var inputValue = Number(document.getElementById("inputValue").value)
        var h1tag= Number(document.getElementById("h1tag").innerHTML)
        var quiz = h1tag - h1tag    
        document.getElementById("h1tag").innerHTML = quiz
} 