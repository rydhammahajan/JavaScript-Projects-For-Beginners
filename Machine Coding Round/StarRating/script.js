const stars =  Array.from(document.getElementsByClassName("fa-star")) ; 

const rating = document.getElementById("rating")
console.log(stars) ;

stars.forEach((star , index)=>{
    star.addEventListener("click" , (e)=>{
        for(let i=0 ; i<=index ; i++) {
            stars[i].classList.add("golden") ; 
        }
        for(let j=index+1 ; j< stars.length ; j++){
            stars[j].classList.remove("golden") ;
        }

        rating.innerText =  (index + 1) ;

    })
})
