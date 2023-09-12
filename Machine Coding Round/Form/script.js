const name =  document.getElementById("name") ; 
const email = document.getElementById("email") ;

name.addEventListener("keyup" , (e)=>{
    if(e.target.nextElementSibling) {
        const ele = e.target.nextElementSibling ; 
        ele.remove() ;
    }
})
name.addEventListener("change" , (e)=>{

    const val = e.target.value ; 

    if(!val.match("^[A-Za-z]+$")) {
        const ele = document.createElement("p") ; 
        ele.style.color = "red" ;
        ele.innerText = "Please Enter a valid alphabetical name" ; 
        e.target.insertAdjacentElement("afterend" , ele) ; 
    }

})

email.addEventListener("keyup" , (e)=>{
    if(e.target.nextElementSibling) {
        const ele = e.target.nextElementSibling ; 
        ele.remove() ;
    }
})
email.addEventListener("change" , (e)=>{

    const val = e.target.value ; 

    if(!val.match("^[A-Za-z0-9._]+@[A-Za-z]+.[A-Za-z]{2,}$")) {
        const ele = document.createElement("p") ; 
        ele.style.color = "red" ;

        ele.innerText = "Please Enter a valid email" ; 
        e.target.insertAdjacentElement("afterend" , ele) ; 
    }

})