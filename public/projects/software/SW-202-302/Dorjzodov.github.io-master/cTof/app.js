function cToF() {
    var f = Number(prompt('Temperature in celsius'))
    if (f === Number(f) ) {
        c= f *1.8+32
        alert(c+"F")
    } else {
        alert('Tanii oruulsan utga buruu bna ' + 'Ta to oruulna uu' )
    }
}
function fToC() {
    var f = Number(prompt('Temperature in celsius'))
    if (f === Number(f) ) {
        f = (f -32)/1.8;
        alert(f+'C')
    } else {
        alert('Tanii oruulsan utga buruu bna ' + 'Ta to oruulna uu' )
    }
} 
