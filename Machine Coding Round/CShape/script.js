const box =  Array.from(document.getElementsByClassName("fa-square")) ; 
let count = 0 ; 
const memo = [] ; 
console.log(box) ; 
box.forEach((element)=>{

    element.addEventListener("click" , ()=>{
        count++ ; 

        element.style.backgroundColor = "green" ; 
        memo.push(element) ; 

        if(count === box.length) {
            
            const id = setInterval(()=>{

                if(count === 0) {
                    clearInterval(id) ; 
                }else{
                    memo[0].style.backgroundColor = "white" ; 
                    count-- ; 
                    memo.shift();
                }

            } , 1000) ; 

        }

    })

})