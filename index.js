
//RANDOM NUMBER
const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const questionE1=document.getElementById("question");
const inputE1=document.getElementById("input");
const formE1=document.getElementById("form");

//SCORE
let score1=document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
score1.innerText=`score:${score}`

questionE1.innerText=`What is ${num1} multiply by ${num2}?`

const correctans=num1*num2;

//SUBMIT AND INPUT
// let submit=document.getElementById("btn")
let btnE1=document.getElementById("btn")
btnE1.addEventListener("click", () => {
  const userans = inputE1.value;
  if (userans == correctans) {
    score++;
    updateLocalStorage()
    score1.innerText = `score: ${JSON.parse(localStorage.getItem("score"))}`
  }
  else {
    score--;
    updateLocalStorage()
    score1.innerText = `score: ${JSON.parse(localStorage.getItem("score"))}`
  }
})

//LOCAL STORAGE
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}


//RESET
let resetE1=document.getElementById("reset");
resetE1.addEventListener("click",() => {
    localStorage.setItem("score",0);
score=JSON.parse(localStorage.getItem("score"));
//  score1.innerHTML = 'score:' + JSON.parse(localStorage.getItem("score"));
 score1.innerText = `score: ${score} `;
})