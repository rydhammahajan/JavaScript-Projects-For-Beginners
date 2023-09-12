const container = document.querySelector("#tictactoe-container") ; 
let moves = 0 ; 
let game = 1  ; 

for(let i=0 ; i<3 ; i++) {

    const ele = document.createElement("div") ; 
    ele.classList.add("row") ; 

    ele.innerHTML = 
    `<div class = "box"></div>
    <div class = "box"></div>
    <div class = "box"></div>
    `
    container.appendChild(ele) ; 

}

const rows = document.getElementsByClassName("row") ; 
let boxes = [] ; 

for(let i=0 ; i<rows.length ; i++) {

    const box = rows[i].children ; 
    boxes[boxes.length] = box ; 
    console.log(box) ; 
    
    for(let j=0 ; j<box.length ; j++) {
        if((i+j) % 2 === 0 ) {
            box[j].classList.add("green") ; 
        }else{
            box[j].classList.add("light-green") ; 
        }
    }
}

for(let i=0 ; i<3 ; i++) {
    for(let j=0 ; j<3 ; j++) {

        boxes[i][j].addEventListener("click" , (e)=>{
            let char ; 
            if(game && boxes[i][j].innerText === "") {
                if(moves%2 === 0) {
                    e.target.innerText += "0"
                    char = "0" ; 
                }
                else{
                     e.target.innerText += "X";
                     char = "X" ; 
                }
                const result = CheckForWin(i , j , char) ;
                if(result){
                    game = 0 ; 
                    const ele = document.createElement("h1") ; 
                    ele.innerText = `Player ${char} wins the game !` ; 
                    container.insertAdjacentElement("afterend" , ele) ; 
                    return ;
                } ; 
                moves++ ; 
                if(moves === 9) {
                    game = 0 ; 
                    const ele = document.createElement("h1") ; 
                    ele.classList.add("message")
                    ele.innerText = `Its a draw !` ; 
                    container.insertAdjacentElement("afterend" , ele) ; 
                    return ;
                }
            }
        })


    }
}


function CheckForWin(row , col , char) {

    //Horizontal Check ;
    const h = Horizontal(row , col , char) ; 
    if(h) return true ; 

    //Vertical Check : 
    const v = Vertical(row , col , char) ; 
    if(v) return true ; 

    //Diagonal Check ; 
    return Diagonal(row , col , char) ; 


}

function Horizontal(row , col , char) {
    let count = 0 ;
    for(let j=0 ; j<3 ; j++) {
        if(boxes[row][j].innerText === char) {
            count++ ; 
        }else{
            break ; 
        }
    }
    if(count === 3) return true ; 
    return false ; 
}

function Vertical(row , col , char) {
    let count = 0 ; 
    for(let i=0 ; i<3 ; i++) {
        if(boxes[i][col].innerText === char) {
            count++ ; 
        }else{
            break ; 
        }
    }
    if(count === 3) return true ; 
    return false ;

}

function Diagonal(row , col , char) {

     //Left Diagonal 
     let count = 0 ; 
     for(let i=0 ; i<3 ; i++) {
        if(boxes[i][i].innerText === char)count++ ; 
        else break ;  
    }
    if(count === 3 )return true ; 

    //Right Diagonal 
    let i=0 ; 
    let j=2 ; 
    count = 0 ; 

    while(i < 3 && j >= 0) {
        if(boxes[i++][j--].innerText === char)count++ ;
        else break ;  
    }
    if(count === 3 )return true ; 
    return false ; 
}

document.querySelector("button").addEventListener("click" , ()=>{
    game = 1 ; 
    moves = 0 ; 
    for(let i=0 ; i<3 ; i++) {
        for(let j=0 ; j<3 ; j++) {
            boxes[i][j].innerText = "" ; 
        }
    }
    document.querySelector(".message").remove(); 
})
