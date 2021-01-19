let a= true
let i = 0
let zurag=["zurag1.jpg","zurag2.jpg","zurag3.jpg","zurag4.jpg"]
let interval =0

function start() {
    if(a==true){
        interval = setInterval(slide,1000)
        a = false
    }else{
        clearInterval(interval)
        a=true
    }
}
function slide() {
    document.getElementById("img").src ="img/"+ zurag[i]
    i++
    if(i==zurag.length){
        i=i-i
    }
}