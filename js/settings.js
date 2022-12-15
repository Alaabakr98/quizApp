
import{qiuz}from"./quiz.js"
 export class settings{
  constructor(){
this.category=document.getElementById("category")
this.number=document.getElementById("number")
this.difficulty=document.getElementsByName("Difficulty")
this.startBtn=document.getElementById("startBtn")
this.startBtn.addEventListener("click" ,this.startQiz.bind(this))
  }
   async startQiz(){
    this.category= this.category.value;
    this.number= this.number.value;
    this.difficult= [...this.difficulty].filter((el)=>{return el.checked})[0].value;
    let requestData= await  this.showApi(`https://opentdb.com/api.php?amount=${this.number}&category=${this.category}&difficulty=${this.difficult}`);
 if(requestData.length>0){
   $("#setting").fadeOut(500 ,()=>{
     $("#quiz").fadeIn(500);
   })
   new qiuz(requestData)
 }
  
}
async showApi( url){
  let httpRequest= await fetch(url)
  let httpRequestAnswer= await httpRequest.json()
return httpRequestAnswer.results  
}


}
