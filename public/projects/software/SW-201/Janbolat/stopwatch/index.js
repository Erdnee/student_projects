	var i = 0;
	var m = 0;
	var h = 0;
	var p1 = document.getElementById('minut')
	var p2 = document.getElementById('tsag')
	var p3 = document.getElementById('sec')
	var stop = 0
	var intervalId = 0
	var div1 = document.getElementById("div1")
	var too = 0;
function start() {
	    
	 if (intervalId == 0) {
	  	intervalId = setInterval(secFunction,10)
	 }
	 else {
	 	clearInterval(intervalId)
	 	intervalId = 0	
	 }
	 	 
}
function secFunction(){
	
		p3.innerHTML = i
		i++
		if (i == 100) {
			i = 1 
			m++
			if (m < 10) {
				p1.innerHTML = "0" + m
			}
			else {
				p1.innerHTML = m
			}
		}
		if (m == 59) {
			m = -1 
			if (m == -1) {
				h++
				if (h < 10) {
					p2.innerHTML = "0" + h
				}
				else {
					p2.innerHTML = h
				}
			}
			
		}
}
function reset(){
		p1.innerHTML = "00"
		p2.innerHTML = "00"
		p3.innerHTML = "00"
		i = 0;
		m = 0;
		h = 0;
}
function lap(){
		too++
		var p = document.createElement("p")
		p.innerHTML = too + "--" +p2.innerHTML +":"+p1.innerHTML +":"+p3.innerHTML
		document.getElementById("div1").append(p)
		p.style.float = "left" 
		p.style.border = "2px solid red"
		p.style.padding = "1.5vw"
		p.style.width = "94%"
		p.style.textAlign = "center"

}
// (m < 10 ? "0"+m : m) - minut ni 10s baga bwl 0string nemj bichne nuhtsul bielehgu bwl shuud m utgiig bichne