const pinned_notes_wrapper = document.querySelector(".pinned-notes-wrapper")  ;
const other_notes_wrapper = document.querySelector(".other-notes-wrapper")  ;
const archieve_notes_wrapper = document.querySelector(".archive-notes-wrapper") 
const input = document.querySelector("input") ; 
const textarea = document.querySelector("textarea") ; 
let notes_database = {};

/*
id :{

    title : "string"
    description :  "string"
    pinned :  "boolean"
    archive : "boolean"
}
*/

notes_database = localStorage.getItem("notes") === "undefined" ? {} : JSON.parse(localStorage.getItem("notes")) ; 

document.addEventListener("click" , (e)=>{

    if(e.target?.dataset?.value == "add-button") {

        let title = "No Title"
        let description = "" ; 

        title = input.value === "" ? title : input.value; 
        description = textarea.value ; 
        
        if(input.value != "" || description != "") {
            const id = Date.now() ; 
            notes_database = {
                ...notes_database , 
                [id] : {
                    title : title , 
                    description : textarea.value , 
                    pinned : false , 
                    archive : false 
                }
            }
            input.value = "" ; 
            textarea.value = "" ;
            renderNotes() ; 
        }
    }else if(e.target?.dataset?.value == "delete") {
        delete notes_database[e.target.dataset.id] ;
        renderNotes() ; 
    }else if(e.target?.dataset?.value == "pin") {
        notes_database[e.target.dataset.id].pinned =  !notes_database[e.target.dataset.id].pinned  ;
        renderNotes() ; 
    }else if(e.target?.dataset?.value == "archive") {
        notes_database[e.target.dataset.id].archive =  !notes_database[e.target.dataset.id].archive  ;
        renderNotes() ; 
    }
})

export default function renderNotes(){

    if(other_notes_wrapper)other_notes_wrapper.innerHTML = ""; 
    if(pinned_notes_wrapper)pinned_notes_wrapper.innerHTML = "";
    if(archieve_notes_wrapper)archieve_notes_wrapper.innerHTML = "" ; 
    
    for(let index in notes_database) {

        let note = notes_database[index] ; 

        const ele = document.createElement("div") ; 
        ele.classList.add("note" , "col-8" , "col-md-6" , "col-lg-3"  , "px-3" ,  "py-3")
        ele.innerHTML = `
        <h3>${note.title}</h3>
        <span class = "py-3">
            ${note.description}
        </span>
        <div class="py-3 d-flex gap-4 fs-3 justify-content-end icons-container">
            <i class="fa-solid fa-thumbtack" data-value = "pin" data-id = ${index}></i>
            <i class="fa-solid fa-circle-arrow-down" data-value = "archive" data-id = ${index}></i>
            <i class="fa-solid fa-trash text-danger" data-value = "delete" data-id = ${index}></i>
            
        </div>
        `

        if(!note.pinned && !note.archive) {
            if(other_notes_wrapper)other_notes_wrapper.appendChild(ele) ; 
        }else if(note.pinned) {
            if(pinned_notes_wrapper)pinned_notes_wrapper.appendChild(ele) ; 
        }else if(note.archive) {
           if(archieve_notes_wrapper)archieve_notes_wrapper.appendChild(ele) ; 
        }

    }
    localStorage.setItem("notes" , JSON.stringify(notes_database)) ; 
}

renderNotes()
