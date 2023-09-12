const mainThread = document.querySelector("#main-thread") ; 
let value = "" ; 

mainThread.addEventListener("click" , (e)=>{

    const replyClicked = e.target.classList.contains("reply") ; 
    const addClicked =  e.target.classList.contains("add")

    if(replyClicked){
        const ele = document.createElement("div") ; 
        ele.classList.add("nested") ;

        ele.innerHTML = `

        <input placeholder="Enter comment">
        <button class="add">Add Comment</button>
        `
        e.target.closest(".comment-container").appendChild(ele) ; 
    }

    if(addClicked) {

        value = e.target.previousElementSibling.value ;        
        const ele = document.createElement("div") ; 
        ele.classList.add("nested") ;

        ele.innerHTML = `
        <div class="comment-container">
            <div class = "comment-box">
                <h1>${value}</h1>
            <button class="blue-color reply">Reply</button>
            </div>
            
        </div>
        `
        e.target.closest(".comment-container").appendChild(ele) ; 
        e.target.parentElement.remove();

    }

})