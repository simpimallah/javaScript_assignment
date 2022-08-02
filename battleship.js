// 1. Battleship Game
// Create an array of 5 numbers - (0, 1, 1, 0, 1)
// Imagine that we are building a game.The places where 1’s are present are our positions of
// battleships.
// • Now keep on asking the user for any number between 1 to 5. If the user enters an 
// invalid number alert that ‘Enter a valid number’. 
// • Each time user enters a number increment the(guesses) count by 1. 
// • If the number user has entered matches with the position of the battleships(i.e 2, 3 and 
//  5), then alert that ‘You have hit a battleship’. Increment the hit count by 1.
// • If the number user has entered doesn’t match with the position of the battleships(ie. 1,
//  4), then alert that ‘You missed the battleship’.
//  • The game will stop if the total successful hits are made. (3 hits)
//  • Display total count of guesses

function battleshipfun(){
    
const location=[0,1,1,0,1]
let hitcount=0
let guesscount=0

while(hitcount!=3){

  const choice=prompt("Enter a number (1-5)")
  if(choice < 0 || choice > 5){
    alert("Enter a valid number")
    continue
  }
  guesscount++

  if(location[choice-1]==1){
   alert("You have hit a battleship")
   hitcount++
   location[choice-1]=2
  }else if(location[choice-1]==2){
   alert("You have already hit this battleship")
  }else{
    alert("You missed the battleship")
  }
  alert("Total Guesses : " + guesscount)
}
}


