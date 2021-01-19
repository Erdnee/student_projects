let x = 1
let y = 2
let z = 3
let q = 1
// let e = 3
let div1="div" + x
let div2="div" + y
let div3="div" + z  

function prev(){
    document.getElementById("div1").classList.remove("div"+x)
    document.getElementById("div1").classList.add("div"+y)
    
    document.getElementById("div2").classList.remove("div"+y)
    document.getElementById("div2").classList.add("div"+z)
    
    document.getElementById("div3").classList.remove("div"+z)
    document.getElementById("div3").classList.add("div"+x)
    x++
    y++
    z++
    if(z==4){
        z=z-3
    }
    if(y==4){
        y=y-3
    }
    if(x==4){
        x=x-3
    }
}
// function divHidden(){
//     if (q==4) {
//         document.getElementById("div3").style.visibility="visible"
        
//     }else{
//     document.getElementById("div"+q).style.visibility="hidden"

//     }
//     if (q==1) {
//         document.getElementById("div3").style.visibility="visible"
//     }
//     if (q==2) {
//         document.getElementById("div1").style.visibility="visible"
//     }
//     if (q==3) {
//         document.getElementById("div2").style.visibility="visible"
//     }
//     if(q==4){
//         document.getElementById("div3").style.visibility="visible"
//     }   
//     if(q==4){
//         q=q-4
//     }
//     q++
// }
//Шинэ гаргалгаа 
function divHidden(){
    if(q==0){
     
    }else{
        document.getElementById("div"+q).style.visibility="hidden"
    }
    if(q>1){
        document.getElementById("div"+(q-1)).style.visibility="visible"
    }
    if(q==0){
        document.getElementById("div3").style.visibility="visible"
    }
    if(q==3){
        q=q-4
    }
    q++

}