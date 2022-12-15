
 export class qiuz{
constructor(requestData){
this.questionsApi=requestData;
this.question=document.getElementById("question");
this.total=this.questionsApi.length;

this.currentQuestion=document.getElementById("mumofquestinn")
this.totalQuestion=document.getElementById("num")
  this.next=document.getElementById("next");
  this.score=0;
this.numOfQuestion=0;
this.showQ()
this.next.addEventListener("click" ,this.checkA.bind(this))
document.getElementById("tryBtn").addEventListener("click" , ()=>{
    location.reload()
})
}
showQ()

{
    this.currentQuestion.innerHTML=this.numOfQuestion+1;
    this.totalQuestion.innerHTML=this.total;
    this.question.innerHTML=  this.questionsApi[this.numOfQuestion].question;
    this.showA()
}
showA(){
 
let answer=[ ...this.questionsApi[this.numOfQuestion].incorrect_answers ,this.questionsApi[this.numOfQuestion].correct_answer]
 
  let currentIndex = answer.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [answer[currentIndex], answer[randomIndex]] = [
      answer[randomIndex], answer[currentIndex]];
  }
   let cartonaa="";
for (var i=0 ;i<answer.length ; i++){
cartonaa+=` <div class="form-check">
                 <label class="form-check-label">
                       <input type="radio" class="form-check-input" name="answer" id="q${i}" value="${answer[i]}" >
                   ${answer[i]}
                   </label>
               </div>`
}
document.getElementById("rowAnswer").innerHTML=cartonaa;

}

checkA(){

let correctAnswer=this.questionsApi[this.numOfQuestion].correct_answer;
let userAnswer=document.getElementsByName("answer");
 let checkedAnswed=[...userAnswer].filter((el)=>{return el.checked})[0].value
if(checkedAnswed==correctAnswer){
this.score++;
$(".alert").slideUp(200)
$("#Correct").fadeIn(1000, () => {
    $("#Correct").fadeOut(500)
})}
else {
    $("#inCorrect").fadeIn(500, () => {
        $("#inCorrect").fadeOut(500)
 
    }
    )
}

this.nextA()
}
nextA(){
    this.numOfQuestion++
    if(this.numOfQuestion!=this.total){
    this.currentQuestion.innerHTML=this.numOfQuestion+1;
    this.totalQuestion.innerHTML=this.total;
    this.question.innerHTML=  this.questionsApi[this.numOfQuestion].question;
    this.showA()}
    else{
        this.finish()
    }
//   console.log(this.numOfQuestion)
    }
    finish(){
        $("#finish").fadeIn(500, () => {
            $("#quiz").fadeOut(500)
        })
        document.getElementById("score").innerHTML=this.score
    }
    // try(){
    //     $("#quiz").fadeIn(500, () => {
    //         $("#setting").fadeOut(500)
    //     })
    // }
}

