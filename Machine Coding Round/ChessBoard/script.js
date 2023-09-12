const board = document.getElementById("chessboard");

for (let i = 1; i <= 8; i++) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let j = 1; j <= 8; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    if ((i+j) % 2 === 0) {
      box.style.backgroundColor = "black";
    }else{
        box.style.backgroundColor = "white";
    }
    box.dataset.column = j ;
    
    row.appendChild(box);
    }

  board.appendChild(row);
}

const box = Array.from(document.querySelectorAll(".box"))  ;

box.forEach((element , index)=>{
    const ind = index ;
    element.addEventListener("mouseover" , ()=>{

        const j = element.dataset.column ;
        
        for(let i=0 ; i<box.length ; i++) {
            box[i].classList.remove("blue") ;
        }
        index = ind ;
        while(index >= 0 && index < box.length) {
            if(box[index].dataset.column >= j) {
                box[index].classList.add("blue") ;
            }
            index = index+8+1 ;
        }
        index = ind ;
        while(index >= 0 && index < box.length ) {
            if(box[index].dataset.column <= j) {
                box[index].classList.add("blue") ;
            }
            index = index+8-1 ;
        }
        index = ind  ;
        while(index >= 0 && index < box.length) {
            if(box[index].dataset.column <= j) {
                box[index].classList.add("blue") ;
            }
            index = index-8-1 ;
        }
        index = ind ; 
        while(index >= 0 && index < box.length) {
            if(box[index].dataset.column >= j) {
                box[index].classList.add("blue") ;
            }
            index = index-8+1 ;
        }
        


    })

})