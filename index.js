var readlinesync = require("readline-sync")
console.log("Lets see how better you know me ??");
var score = 0
var quizquestions = [
  {
    question : "What is my birthday date? (Only Enter the date like 2,3,4,5)",
    answer : 21,} ,
  {
    question : "What is my birth Year",
   answer : 2000,},
  {
    question : "What Anime series do I love the most",
   answer : "Attack on titans"},
{
    question : "What is the game I love most",
   answer : "valorant"},

   //Try to add multiple answer funtionalitiy
{
    question : "Do I have a secret youtube channel by my name ?",
   answer : "yes",}

]
//this funtion should print stars in the same line 
function scoreprinter(userscore){
  for (i=0;i<userscore;i++){
       console.log("*");
  }

}


for (j=0;j<quizquestions.length;j++){
 var useranswer = readlinesync.question(quizquestions[j].question);
 
 if(useranswer == quizquestions[j].answer){
 
   console.log("Yay You are right");
   score += 1;
   if(j == quizquestions.length - 1){
     console.log("Hurray You have answered all the answers corectly")
   }
   
 }
 else {
   console.log("Oops You are wrong\n GAME OVER");
   var j = quizquestions.length - 1;
 }
  console.log("Your score is "+score)
}
var Highscores = {
  Piyush : 5,
  Purushottam : 4,
  Jyoti : 3,
  Prajwal : 2,
}

// This prints the Highscore 
for ()

