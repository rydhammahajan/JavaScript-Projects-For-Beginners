// Quizify - Command Line Interface Based

let question_database = {

    data : [

        {
            question : `Q1 - let a = {}, b = {}
console.log(a == b)
console.log(a === b)` , 

            options : `a - false false
b - false true
c - true false
d - true true
Enter your answer - (a/b/c/d) ` ,

            correct_option : 'a'

        } , 
        
        {
            question : `Q2 - Object.assign(targer, source) creates which type of copy?` , 

            options : `a - Deep Copy
b - Shallow Copy
c - Nested Copy
d - Creates a new reference
Enter your answer - (a/b/c/d) ` ,

            correct_option : 'b'

        }
        ,
        {
            question : `Q3 - Is method chaining possible with forEach?` , 

            options : `a - Yes
b - No
Enter your answer - (a/b) -` ,

            correct_option : 'b'

        }


    ]

}
let student_database = {
    "Riya" : 3 , 
    "Jiya" : 2 , 
    "Ashish" : 1
}
let readline_sync =  require('readline-sync') ;
let kuler = require('kuler') ; 
let correct_ans = 0 ; 
let name;

name = readline_sync.question("What's your name? ") ; 
console.log(kuler(`\nHello ${name}, welcome to Quizify🖐️\n` , "#EC53B0"))

for(let item of question_database.data) {

    console.log(item.question + '\n') ; 
    let ans = readline_sync.question(item.options) ;

    if(ans === item.correct_option){
        console.log(kuler("\nCorrect Answer\n" , "468B97")) ; 
        correct_ans++ ;
    }
    else{
        console.log(kuler(`\nIncorrect Answer` , "BB2525"))
        console.log(kuler(`Correct Answer is ${item.correct_option}\n`, "191D88")) ;  
    }
}

student_database = {
    ...student_database , 
    [name] : correct_ans 
}

const array_student_database = Object.entries(student_database) ; 
array_student_database.sort((a , b)=>{
    return b[1] - a[1] ; 
})


console.log(kuler(`Your score is - ${correct_ans}\n` , "3E001F")) ; 
console.log(kuler(`Check your position on the Leader Board🌈🌈` , "FD8D14")) ;

array_student_database.forEach((item)=>{

    console.log(kuler(`${item[0]} - Score: ${item[1]}`, "9F0D7F")) ; 

})

