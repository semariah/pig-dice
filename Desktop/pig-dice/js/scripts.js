//Business Logic
function playerOne (turn) {
  this.total1 = 0;
  this.score = 0;
  this.maxScore = 100;
  this.roll1 = 0;
  this.turn = "yes";

}
playerOne.prototype.Random = function(){
  if (this.turn === "no"){
    console.log("It's not your turn!");
  } else {
    this.roll1 = Math.floor(Math.random() * 7);
    if (this.roll1 === 1){
      this.score = 0;
    }
  }
}








//UI Logic
$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();


  });
});
