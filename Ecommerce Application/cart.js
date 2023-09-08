import horizontalProductRender from "./horizontalProductRender.js"; 
import priceContainerRender from "./priceContainerRender.js";
const cart_container = document.querySelector(".cart-container")
const price_container = document.querySelector(".price-container")  ;
const hamburger_icon = document.querySelector(".hamburger") ;
const nav_bar =   document.querySelector(".responsive-navbar-part") ;
let cart_items = JSON.parse(localStorage.getItem("product-items")) ;

hamburger_icon.addEventListener("click" , ()=>{
    nav_bar.classList.toggle("d-none")
})

function priceDetails(){

    let priceObject = {
        count : 0 , 
        discount : 0 , 
        delivery_charge : 100 ,
        total_amount : 100 , 
    }
    cart_items.forEach((element) => {
        
        if(element.hasOwnProperty("cart")) {
            priceObject.count += element.cart ; 
            priceObject.discount += element.cart * (element.oldPrice-element.newPrice)  ;
            priceObject.total_amount += element.cart * (element.newPrice) ;
        }

    });

    return priceObject ;

}

function cartRendering(){
    let count = 0 ; 
    cart_container.innerHTML = "" ;
    if(cart_items != null) {
        for(let product of  cart_items) {

            if(product.hasOwnProperty("cart")) {
                console.log(product) ;
                cart_container.innerHTML += horizontalProductRender(product) ; 
                count++ ; 
            }
            
        }
    }
    if(count === 0) {
        price_container.classList.add("d-none") ; 
        cart_container.innerHTML += `
        <div class = "fs-1 pt-5 mt-5 d-flex flex-column gap-5 align-items-center message col-12"><i class="fa-solid fa-box-open fa-2xl"></i> Cart is Empty</div>
        `
    }else{
        price_container.classList.remove("d-none") ; 
        let temp = priceDetails() ;
        console.log(temp) ;
        price_container.innerHTML = "" ;
        price_container.innerHTML += priceContainerRender(temp) ; 
    }
    
    localStorage.setItem("product-items" , JSON.stringify(cart_items)) ;
}
cart_container.addEventListener("click" , (e)=>{
    
    if(e.target?.name === "add-to-cart" || e.target?.dataset.name === "cart-plus") {

        let id = e.target.dataset.id ;
        for(let index =0 ; index < cart_items.length ; index++) {
            if(cart_items[index]._id === id) {

                if(cart_items[index]?.cart) {
                    cart_items[index].cart += 1 ; 
                }else{
                    cart_items[index] = {
                        ...cart_items[index]  , 
                        cart : 1 ,
                    }
                }
               
                cartRendering() ;
            }
        }
    }

    else if( e.target?.dataset.name === "cart-minus"){

        let id = e.target.dataset.id ;
        for(let index =0 ; index < cart_items.length ; index++) {
            if(cart_items[index]._id === id) {
                cart_items[index].cart -= 1 ; 
                if(cart_items[index].cart === 0) {
                    delete cart_items[index].cart 
                }
                cartRendering() ;
            }
        }
    }
})
cartRendering() ;