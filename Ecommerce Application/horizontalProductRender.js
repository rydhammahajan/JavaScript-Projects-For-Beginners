function horizontalProductRender({_id , name , img , alt , brand , newPrice , oldPrice , discount , rating , cart}){

    let buttonContent = `<i class="fas fa-shopping-cart"></i> Add to Cart`;

    if (cart > 0) {
        buttonContent = 
        `<div class = "d-flex justify-content-around">
            <i class="fa-solid fa-minus pt-2" data-name = "cart-minus" data-id = ${_id}></i>
            ${cart}
            <i class="fa-solid fa-plus pt-2 " data-name = "cart-plus" data-id = ${_id}></i>
            
        </div>` ;
    }


    return(
        `<div class = "product-card d-flex justify-content-around col-12 px-2 py-3 gap-5" data-id = ${_id}>
            <div class = "d-flex  col-3 cart-image-container">
                <img src = ${img} alt = ${alt}>
            </div>

            <div class = "d-flex flex-column align-items-start gap-2">
                <div class="brand-name fs-3">${brand}</div>
                <div class="product-name fs-6">${name}</div>
                <div class="product-price d-flex gap-2">
                    <div class = "new-price">Rs. ${newPrice}</div>
                    <div class = "old-price">Rs.${oldPrice}</div>
                    <div class = "discount text-danger">(${discount}% off)</div>
                </div>
                <div class = "product-rating">${rating}
                <i class="fas fa-star" ></i>
                </div>
                <button class = "add-to-cart col-10 border-0 p-2 fs-5" data-id = ${_id} name = "add-to-cart">
                ${buttonContent}
                </button>
            </div>
            
    </div>`
    )

}

export default horizontalProductRender ; 
