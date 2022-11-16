const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score")
const questionEl = document.getElementById("question")

let num1 = Math.ceil(Math.random()*10)
let num2 = Math.ceil(Math.random()*10)

questionEl.innerText = `what is ${num1} multiply by ${num2}?`

 

let score = JSON.parse(localStorage.getItem("score"))

if(!score){
    score = 0;
 }

 scoreEl.innerText = `score: ${score}`
 
const correctAns = num1*num2;

 formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;

 if( correctAns === userAns){
    score++;
    updateLocalStorage()
}else{
    score--;
    updateLocalStorage()
}
})

 function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
 }


