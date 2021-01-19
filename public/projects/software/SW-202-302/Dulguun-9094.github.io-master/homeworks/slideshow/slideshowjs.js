let a= true
let i = 0
let zurag=["galaxy.jpg", "house.jpg", "chill.jpg"]
let interval = 0

function start() {
    if(a==true){
        interval = setInterval(slide,1000)
        a = false
    }else{
        clearInterval(interval)
        a = true
    }
}
function slide() {
    document.getElementById("img").src ="images/"+ zurag[i]
    i++;
    if(i == zurag.length){
        i = i-i
    }
}