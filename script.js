
let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function startGame(){
  renderGame()
}

function renderGame(){
  cardEl.textContent = "Card: " + cards[0] + " " + cards[1] 
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20){
  message = "Do you want to run a new card"
}

else if (sum ===21){
   message = "You have got a blackjack"
   hasBlackJack = true
}

else{
  message = "You are out of the game"
  isAlive = false
}

//cash out
messageEl.textContent = message
}

function newCard(){
  console.log("Drawing a new card from the deck")
  let thirdCard = 5
  sum += thirdCard
  
  renderGame()
}

