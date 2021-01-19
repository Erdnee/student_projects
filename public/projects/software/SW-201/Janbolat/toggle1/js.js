var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var num = 0;
function click1(){
	num++;
	if (num > 3) {
		num = 0;
	}
	if(num == 1){
		box1.style.display = 'none';
	}
	if (num == 2) {
		box2.style.display = 'none';
		box1.style.display = 'block';
	}
	if (num == 3) {
		box3.style.display = 'none';
		box2.style.display = 'block';
	}
	if (num == 0) {
		box3.style.display = 'block';
	}
}