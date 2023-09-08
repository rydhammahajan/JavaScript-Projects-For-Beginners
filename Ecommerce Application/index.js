import { products } from "./db/product.js";
import productRender from "./productRender.js";

const product_container = document.querySelector(".product-container")
const hamburger_icon = document.querySelector(".hamburger") ;
const nav_bar =   document.querySelector(".responsive-navbar-part") ;
let product_items = JSON.parse(localStorage.getItem("product-items")) || products;

hamburger_icon.addEventListener("click" , ()=>{
    nav_bar.classList.toggle("d-none")
})

function productRendering(){
    product_container.innerHTML = "" ;
    for(let product of  product_items) {
        product_container.innerHTML += productRender(product) ; 
    }

    localStorage.setItem("product-items" , JSON.stringify(product_items)) ;
}

product_container.addEventListener("click" , (e)=>{
    
    if(e.target?.name === "add-to-cart" || e.target?.dataset.name === "cart-plus") {

        let id = e.target.dataset.id ;
        for(let index =0 ; index < product_items.length ; index++) {
            if(product_items[index]._id === id) {

                if(product_items[index]?.cart) {
                    product_items[index].cart += 1 ; 
                }else{
                    product_items[index] = {
                        ...product_items[index]  , 
                        cart : 1 ,
                    }
                }
               
                productRendering() ;
            }
        }
    }

    else if( e.target?.dataset.name === "cart-minus"){

        let id = e.target.dataset.id ;
        for(let index =0 ; index < product_items.length ; index++) {
            if(product_items[index]._id === id) {
                product_items[index].cart -= 1 ; 
                if(product_items[index].cart === 0) {
                    delete product_items[index].cart 
                }
                productRendering() ;
            }
        }
    }
})

productRendering() ;
