import countries from "./countries.js";

const ans_container = document.querySelector(".ans") ; 
const search_box = document.querySelector(".search-box") ;
const angle_up = document.querySelector(".fa-angle-up") ;
const angle_down = document.querySelector(".fa-angle-down") ;
const item_list = document.querySelector(".item-list")  ;
const input = document.querySelector("input") ; 
const debounceHandler = debounce(inputHandler , 500) ; 

let count = 0 ; 
function displayList(countries){
    console.log(count) ; 
    count+= 1 ;
    item_list.innerHTML = "" ;

    if(countries.length === 0) {
        item_list.innerHTML = `<div class = "fs-4 px-3 text-center text-secondary">OOps! Country Not Found</div>`
    }

    else {
        countries.forEach((country)=>{
            item_list.innerHTML +=  `<li class="ps-4 fs-4 text-secondary" data-type = "country-name">
            ${country}
        </li>`;    
        })
    }
}

function inputHandler(value){

    value = value.toLowerCase() ;
    const temp_arr = countries.filter((country)=>{
        country  = country.toLowerCase(); 
        if(country.includes(value)) {
            return true; 
        }
        return false ;
    })
    displayList(temp_arr) ;
}

function debounce(callback , delay){

    let timer ; 
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            callback(...args) ;
        }, delay)
    }
}

document.addEventListener("click" , (e)=>{

    if(e.target?.dataset?.name === "drop-up" || e.target?.dataset?.name === "drop-down" ) {
        angle_up.classList.toggle("d-none") ;
        angle_down.classList.toggle("d-none") ;
        search_box.classList.toggle("d-none") ;
        input.value = "" ;
        if(angle_down.classList.contains("d-none") === false) displayList(countries) ;

    }else if(e.target?.dataset?.type === "country-name") {
        ans_container.innerText = e.target.innerText ;
        angle_up.classList.toggle("d-none") ;
        angle_down.classList.toggle("d-none") ;
        search_box.classList.toggle("d-none") ;
    }
})

document.addEventListener("keyup" , (e)=>{
    if(e.target?.dataset?.name === "search-country") {
        debounceHandler(e.target.value)
    }
})

