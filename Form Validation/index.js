const button = document.querySelector("button") ; 
let firstNameField = document.querySelector("#fname")  ; 
let lastNameField = document.querySelector("#lname")  ; 
let emailField = document.querySelector("#email")  ;
let passwordField = document.querySelector("#password")  ;

const patternDatabase = {

    fname : {
        pattern :/^[a-zA-Z]+$/, 
        errorMessage : `*Name must only contain alphabets`
    } , 

    lname : {
        pattern : /^[a-zA-Z]+$/ , 
        errorMessage : `*Name must only contain alphabets`

    } , 

    email : {

        pattern : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , 
        errorMessage : `*Invalid Email`

    } , 

    password : {
        pattern :/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/ , 
        errorMessage : 
        `<li>Password must contain atleast 8 characters</li>
        <li>Password must contain atleast one lower case letter</li>
        <li>Password must contain atleast one upper case letter</li>
        <li>Password must contain atleast one digit</li>
        <li>Password must contain atleast one special character (!@#$%^&*)</li>
        `
    }

}

button.addEventListener("click" , ()=>{

    const f_flag = emptyFieldMessage(firstNameField , "*Please fill this field") ;  
    const l_flag = emptyFieldMessage(lastNameField , "*Please fill this field") ;
    const e_flag = emptyFieldMessage(emailField , "*Please fill this field") ; 
    const p_flag = emptyFieldMessage(passwordField , "*Please fill this field") ; 

    if(f_flag && l_flag && e_flag && p_flag)
    {

        firstNameField.value = "" ; 
        lastNameField.value = "" ; 
        emailField.value = "" ; 
        passwordField.value = "" ; 
        window.location.href = "./success.html" ;
    }
    
})

function emptyFieldMessage(field , message) {

    if(field.nextSibling) {
        field.parentElement.removeChild(field.nextSibling) ; 
    }

    if(field.value === "" ) {
        const ele = document.createElement("p") ; 
        ele.innerText = `${message}` ; 
        ele.classList.add("text-danger" , "fs-5") ; 
        field.insertAdjacentElement("afterEnd" , ele) ; 
        return false ; 
    }else{
        return patternMatching(field) ;
    }
   
}

function patternMatching(field) {

    if( !(patternDatabase[field.name].pattern).test(field.value)) {
        const ele = document.createElement("p") ; 
        ele.innerHTML = patternDatabase[field.name].errorMessage ; 
        ele.classList.add("text-danger" , "fs-5") ; 
        field.insertAdjacentElement("afterEnd" , ele) ;
        return false ; 
    }else{
        if(field.nextSibling) {
            field.parentElement.removeChild(field.nextSibling) ; 
        } 
    }
    return true ;
    
}
