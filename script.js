let player = {
    name: "padhex",
    chips: 425
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": £" + player.chips

function playAgain() {
    let refreshEL = document.getElementById("refresh-el")
    refreshEL.textContent = "WANNA DEAL AGAIN?"
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1

    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 1
    }
    else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  getRandomCard()

  for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
      message = "Do you want to draw a new card?"
  }
  else if (sum === 21) {
      message = "You've got BlackJack!"
      hasBlackJack = true
      playAgain()
  }
  else {
      message = "You're out of the game!"
      isAlive = false
      playAgain()
}
messageEl.textContent = message

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        
        let freshCard = getRandomCard()
        sum += freshCard
        cards.push(freshCard)
        console.log(cards)
        console.log("Drawing a new card from the deck..")
        renderGame()
    }

    if (isAlive === true && hasBlackJack === false) {
    message = "How would you like to play your hand?"
    messageEl.textContent = message
    }
}

