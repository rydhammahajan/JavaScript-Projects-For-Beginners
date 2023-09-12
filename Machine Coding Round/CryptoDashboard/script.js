const crypto_container = document.getElementById("crypto-cards") ; 

let crypto_data = new Array(100).fill(10); 

(async function (){ 
     
    console.log(crypto_data) ;
    
    crypto_data.forEach(element => {
    
        const child =  document.createElement("div") ; 
    
        child.innerHTML +=  `<div class="card">
        <img class = "coin-image" src =""alt = "image"/>
        <div class = "coin-name">
            <h2>Coin Name</h2>
            <div>category</div>
        </div>
        <div class = "coin-price">
            <h3>Price</h3>
            <div>share</div>
        </div>        
    </div>`
    crypto_container.appendChild(child) ;
    
    }); 
})() ;