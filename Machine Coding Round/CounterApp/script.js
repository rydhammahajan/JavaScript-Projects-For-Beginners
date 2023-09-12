const displayArea = document.getElementById("ans-display") ; 
const inputArea = document.querySelector("input") ; 
let inputValue = inputArea.innerText ; 

const buttons = Array.from(document.querySelectorAll("button"))

inputArea.addEventListener("change" , (e)=>{
    inputValue = e.target.value; 
})

buttons.forEach((button)=>{

    button.addEventListener("click" , (e)=>{

        if((e.target.value === "plus" || e.target.value === "minus") && inputValue === "" ){
            alert("Please select Increment/Decrement Value") ;
        }
        else if(e.target.value === "plus") {
            displayArea.innerText = parseInt(inputValue) + parseInt(displayArea.innerText)
        }
        else if(e.target.value === "minus") {
            displayArea.innerText =  parseInt(displayArea.innerText)-parseInt(inputValue) ;
        }else if(e.target.value === "reset") {
            displayArea.innerText = "0" ; 
        } 
    })

})