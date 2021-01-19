var input = document.getElementById('input')
function nemeh() {
	var p = document.createElement("p")
	var btn = document.createElement("button")
		p.innerHTML = input.value
		document.getElementById("div1").append(p,btn)
		btn.innerHTML = "-"
		btn.style.float = "right"
		btn.style.margin = "1em"
		p.style.float = "left"
		p.style.width = "45vw"
		btn.onclick = function(){
			p.style.display = "none"
			btn.style.display = "none"
		}
		input.value = ""
}

	<script>
		function goBack() {
		  window.history.back();
		}
	</script>