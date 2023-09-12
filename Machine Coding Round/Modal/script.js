const btn = document.querySelector("button") ; 
const modal = document.querySelector(".modal") ;
const close =  document.querySelector(".fa-x") ; 

btn.addEventListener("click" , ()=>{

    modal.style.display = "block" ;

})

close.addEventListener("click" , ()=>{

    modal.style.display = "none" ;

})

