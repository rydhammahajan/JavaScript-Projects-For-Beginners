let database = {};
const textArea = document.querySelector(".inputArea input") ; 
const button = document.querySelector(".inputArea button") ; 
const wishlistBox = document.querySelector(".wishlist") ; 

//Fetching Data from Local Storage
window.addEventListener("load" , ()=>{
    database = JSON.parse(localStorage.getItem("wishList")) ; 
    for(let wish in database) {
        renderWishList(wish , database[wish].string , database[wish].checked) ; 
    }
})

//Adding EventListeners to the Add Button
button.addEventListener("click" , (e)=>{

    if(textArea.value != "") {
        addWish(textArea.value) ; 
        textArea.value = "" ; 
    }
})
textArea.addEventListener("keydown" , (e)=>{
    
    if(e.code == "Enter" && textArea.value != "") {
        addWish(textArea.value) ; 
        textArea.value = "" ; 
    }
})

//Insert HTML Element to add wish
function addWish(value) {

    const id = Date.now() ;
    renderWishList(id , value) ; 
    database= {
        ...database , 
        [id] : {
            string : value  , 
            checked : false  
        }
        
    }
    localStorage.setItem("wishList" , JSON.stringify(database)) ; 
}

function renderWishList(id , value , checkStatus = false){

    const ele = document.createElement("div") ;  

    ele.classList.add("d-flex" , "col-12" ,  "wish" ,"position-relative") ; 

    ele.innerHTML = `

    <input type = "checkbox" class="my-1" data-id = ${id} data-value = "checkbox" ${checkStatus === true ? "checked" : ""}>
    <label class="ps-4 col-9 col-lg-11">${value}</label>
    <img width="30" height="30" src="https://img.icons8.com/ios/50/waste.png" alt="waste" class = "delete" data-id = ${id} , data-value = "delete button" />
    `
    wishlistBox.appendChild(ele) ;
}

//Handlig Delete and Checkbox
wishlistBox.addEventListener("click" , (e)=>{

    if(e.target.dataset.value === "delete button") {

        let id = e.target.dataset.id ;
        delete database[id] ; 
        const parent = e.target.parentElement  ; 
        wishlistBox.removeChild(parent) ;

    }else if(e.target.dataset.value === "checkbox") {

        let id = e.target.dataset.id ;
        if(database[id].checked) {
            database[id].checked = false ; 
            e.target.removeAttribute("checked")
        }else{
            database[id].checked = true ; 
            e.target.setAttribute("checked" , true)
        }

    }
    localStorage.setItem("wishList" , JSON.stringify(database)) ; 
})



