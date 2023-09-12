
const header = document.querySelector("h1") ; 

header.addEventListener("click" , ()=>{

    if(header.classList.contains("green")) {
        header.classList.remove("green") ; 
        header.classList.add("red") ; 
    }else{
        header.classList.remove("red") ; 
        header.classList.add("green") ; 
    }
})

window.addEventListener("load" , ()=>{
    const item = localStorage.getItem("name") ; 
    if(!item) {
        localStorage.setItem("name" , "Rydham Mahajan") ; 
    }else{
        const ele = document.createElement("p") ; 
        ele.style.color = "red" ; 
        ele.innerText = "My Name is " + item ; 
        document.querySelector("body").appendChild(ele) ;

    }

})
