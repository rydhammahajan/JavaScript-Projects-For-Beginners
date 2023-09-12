// const divs = document.querySelectorAll("div") ; 
let click = 0 ;  

let firstDiv ; 
let secondDiv ; 

document.addEventListener("click" , (e)=>{

    if(e.target.innerHTML === "") {
        if(click === 0) {
            firstDiv = e.target ; 
            firstDiv.innerHTML = firstDiv.dataset.value ; 
            
        }else if(click === 1) {
            secondDiv = e.target  ;
            secondDiv.innerHTML = secondDiv.dataset.value ; 
             
        }
        click++ ; 
    }
    
    setTimeout(()=>{
        if(click >= 2 ) {

            if(firstDiv.dataset.value !== secondDiv.dataset.value) {
                firstDiv.innerHTML = "" ;
                secondDiv.innerHTML = "" ;
    
            }
    
            click  = 0 ; 
    
        }
    } , 500)
})
