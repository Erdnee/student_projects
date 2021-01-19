var un = 0
var inputValue = Number(document.getElementById("inputValue").value)
function nemeh(){       
    var inputValue = Number(document.getElementById("inputValue").value)
    var h1tag= Number(document.getElementById("h1tag").innerHTML)
    if(inputValue == ""){
        var hariu=h1tag+1
    }else{
        var hariu=h1tag + inputValue  
    }
    document.getElementById("h1tag").innerHTML= hariu  

}

function hasah(){
    var inputValue = Number(document.getElementById("inputValue").value)
    var h1tag= Number(document.getElementById("h1tag").innerHTML)
    if (inputValue == "") {
        var hariu= h1tag - 1 
    } else {
        var hariu= h1tag - inputValue  
    }
    document.getElementById("h1tag").innerHTML= hariu
}
function reset(){
    var inputValue = Number(document.getElementById("inputValue").value)
    var h1tag= Number(document.getElementById("h1tag").innerHTML)
    var hariu= h1tag - h1tag    
    document.getElementById("h1tag").innerHTML= hariu
} 