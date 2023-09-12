let para = document.querySelector(".para") ; 
        let text  = para.innerText.split(" : ") ; 
        let id  ; 

        function currentTime(){
            let text  = para.innerText.split(" : ") ; 
            let seconds  = Number(text[2]) ; 
            let minutes = Number(text[1])  ; 
            let hours = Number(text[0]) ; 
            return {seconds , minutes , hours} ; 
        }

        document.addEventListener("click" , (e)=>{

            if(e.target.name === "start") {

                let {seconds , hours , minutes} = currentTime() ;
                id = setInterval(()=>{
                
                    seconds += 1  ; 
                    if(seconds == 60) {
                        seconds = 0 ;
                        minutes += 1 ;

                        if(minutes == 60){
                            minutes = 0 ; 
                            hours = 1 ; 
                        }
                    }

                    let string_hours = hours < 10 ? `0${hours}` : hours ; 
                    let string_minutes = minutes < 10 ? `0${minutes}` : minutes ; 
                    let string_seconds = seconds < 10 ? `0${seconds}` : seconds ; 

                    para.innerText = `${string_hours} : ${string_minutes} : ${string_seconds}` ; 
                }, 200) ;

            }else if(e.target.name === "stop"){
                clearInterval(id) ; 
            }else if(e.target.name === "reset") {
                clearInterval(id) ; 
                para.innerText = `00 : 00 : 00` ; 
            }
        })
