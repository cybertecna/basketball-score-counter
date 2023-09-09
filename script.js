const counterHome = document.querySelector("#counter-home")
const counterGuest = document.querySelector("#counter-guest")

const homeAddOne = document.querySelector("#home-add-one")
const homeAddTwo = document.querySelector("#home-add-two")
const homeAddThree = document.querySelector("#home-add-three")
const guestAddOne = document.querySelector("#guest-add-one")
const guestAddTwo = document.querySelector("#guest-add-two")
const guestAddThree = document.querySelector("#guest-add-three")


let scoreHome = 0
let scoreGuest = 0 

homeAddOne.addEventListener("click", function() {
    scoreHome += 1
    counterHome.textContent = scoreHome
    checkWinner()
})

homeAddTwo.addEventListener("click", function() {
    scoreHome += 2
    counterHome.textContent = scoreHome
    checkWinner()
})

homeAddThree.addEventListener("click", function() {
    scoreHome += 3
    counterHome.textContent = scoreHome
    checkWinner()
})

guestAddOne.addEventListener("click", function() {
    scoreGuest += 1
    counterGuest.textContent = scoreGuest
    checkWinner()
})

guestAddTwo.addEventListener("click", function() {
    scoreGuest += 2
    counterGuest.textContent = scoreGuest
    checkWinner()
})

guestAddThree.addEventListener("click", function() {
    scoreGuest += 3
    counterGuest.textContent = scoreGuest
    checkWinner()
})

const newGame = document.querySelector("#new-game")

newGame.addEventListener('click', function() {
    scoreGuest = 0
    scoreHome = 0
    counterGuest.textContent = scoreGuest
    counterHome.textContent = scoreHome
    checkWinner()


})

function checkWinner() {
    if (scoreHome > scoreGuest) {
    counterHome.style.color = 'green'
    counterGuest.style.color = '#F94F6D'

} else if (scoreHome < scoreGuest) {
    counterGuest.style.color = 'green'
    counterHome.style.color = '#F94F6D'

} else {
    counterHome.style.color = '#F94F6D'
    counterGuest.style.color = '#F94F6D'

}
}