var myColor = ["black","yellow","red","blue"]
            var count = 0
            var myInput = document.querySelector("#input1")
            var time = true
            function addColor(){
                if(myInput.value==""){
                    alert("hooson bn, ungu oruulna uu")
                }
                document.body.style.backgroundColor = myInput.value
                myColor.push(myInput.value)
                myInput.value=""
            }
            function changeColor(){
                if(count>=0){
                    
                    document.body.style.backgroundColor=[myColor[count]]
                    count++
                    if(count == myColor.length){
                        count=0
                    } 
                }
            }
            
            function startPause(){
                if(time == true){
                    document.getElementById("button1").innerHTML="Pause"
                    myInterval = setInterval( changeColor ,500)
                    time = false
                }else{
                    clearInterval(myInterval)
                    time = true
                    document.getElementById("button1").innerHTML="Change"
                }
                
            }
            