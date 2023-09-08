function priceContainerRender(priceObject){

    return `
    <div class="fs-3">Price Details</div>

            <div class = "d-flex justify-content-between gap-5">
                <span>Price (${priceObject.count}) items</span>
                <span>Rs. ${priceObject.total_amount-100}</span>
            </div>

            <div class = "d-flex justify-content-between">
                <span>Discount</span>
                <span>Rs. ${priceObject.discount}</span>
            </div>
            <div class = "d-flex justify-content-between">
                <span>Delivery Charge</span>
                <span>Rs. ${priceObject.delivery_charge}</span>
            </div>
            <div class = "d-flex justify-content-between">
                <span>Total Amount</span>
                <span>Rs. ${priceObject.total_amount}</span>
            </div>
            <div>
                You will save Rs.${priceObject.discount}
            </div>
            <button class = "place-order border-0 p-2 fs-3">Place Order</button>

    `
}

export default priceContainerRender ;