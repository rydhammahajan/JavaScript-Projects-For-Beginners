const cardContainer = document.querySelector("#card-container") ; 

const API_URL = "https://fakestoreapi.com/products" ;

let cardsData = [] ; 
let displayData = []  ;
let page = 0 ; 


async function fetchAPI () {

    const data = await fetch(API_URL) ; 
    const data_json = await data.json() ; 
    console.log(data_json) ;
    cardsData = data_json ;
    displayData = cardsData.slice(page*10 , 10*(page+1)) ; 
    InsertCards() ;   
}

function InsertCards(){

    cardContainer.innerHTML = "" ;
    if(displayData.length > 0) {

        
        displayData.map((card)=>{
            const rating = Math.floor(card.rating.rate) ; 
            const ele = document.createElement("div") ;
            ele.classList.add("single-card") ; 

            ele.innerHTML = `
            <div class = "card-image">
                <img src = ${card.image} height = "180px" width = "150px"/>
            </div>
            <div class = "card-title">${card.title}</div>
            <div>${card.category}</div>

            <div class = "star-rating" data-value = ${rating}>

                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                
            </div>
            <div>R ating Count: ${card.rating.count}</div>

            <button class = "card-button">
                Buy Now
            </button>
            `
            cardContainer.appendChild(ele) ; 

        })

        StarRatings() ; 

    }

}

function StarRatings() {

    const starContainer = Array.from(document.getElementsByClassName("star-rating")); 

    starContainer.forEach(element => {
        const stars = element.dataset.value ; 
        const children = element.children ;  
        for(let i=0 ; i<stars ; i++) {
            children[i].style.color = "gold" ; 
        }
    });

}

const buttons = Array.from(document.getElementsByClassName("pointers")) ;

buttons.forEach((btn)=>{
    
    btn.addEventListener("click" , (e)=>{

        if(e.target.dataset.value === "prev") {
            page-- ; 
            if(page === 0) {
                e.target.setAttribute("disabled" , true) ; 
            }
            e.target.nextElementSibling.removeAttribute("disabled"); 
        }
        else if(e.target.dataset.value === "next" ) {
            page++ ;
            if(page === 1) {
                e.target.setAttribute("disabled" , true) ; 
            } 
            e.target.previousElementSibling.removeAttribute("disabled");
        }

        console.log(page) ;
        fetchAPI() ;

    })
})

fetchAPI() ;