let a= true
let i = 0
let zurag= ["images/kobe1920 1.jpg","images/kobe1920 2.jpg","images/kobe1920 3.jpg","images/kobe1920 4.jpg"]
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
    document.getElementById("img").src = zurag[i]
    i++
    if(i==zurag.length){
        i=i-i
    }
}