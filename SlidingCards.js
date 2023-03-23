var leftButton = document.getElementById("left")
var rightButton = document.getElementById("right")
var left1Button = document.getElementById("left1")
var right1Button = document.getElementById("right1")
var cards = document.getElementById("card")
var cardsContainer = document.getElementById("card-container")
var cardsMargin = 20;
var cardsWidth = cards.offsetWidth + cardsMargin;
var numCards = 17
var totalCardWidth = numCards * cardsWidth

var Value = 0;
var windowWidth = window.innerWidth
var windowHeight = window.innerHeight

var cardsInWindow = windowWidth/cardsWidth
var windowSize = cardsInWindow*cardsWidth
var windowSize2 = Math.floor(windowSize)
addEventListener('load', function() {

    if (Value >=0) {
        leftButton.style.visibility = "hidden"
        left1Button.style.visibility = "hidden"
        console.log(totalCardWidth)
        console.log(windowWidth)
        console.log(Math.floor(cardsInWindow))
    }
})
addEventListener('click', function() {

    if (Value < 0) {
    leftButton.style.visibility = "visible"
    rightButton.style.visibility = "visible"
    }
    if (Value >= 0) {
        leftButton.style.visibility = "hidden"
    }
    if (Value < -(windowSize2-cardsWidth)) {
        left1Button.style.visibility = "visible"
        console.log("ACTION!")
    }
    if (Value >= -(windowSize2-cardsWidth)) {
        left1Button.style.visibility = "hidden"
        console.log("CANCEL!")
        }
    
    if (Value <= -(totalCardWidth + cardsMargin - windowWidth)) {
        rightButton.style.visibility = "hidden"
    }
})
leftButton.addEventListener('click', function() { 
    if (Value > 0) {
        Value == 0
    } if (Value <= 0) {
    Value += 222;
    cardsContainer.style.left = Value + 'px'
    console.log(Value)}
})

rightButton.addEventListener('click', function() {
    if (Value > 0) {
        Value == 0
    } if (Value <= 0) {
    Value -= 222;
    cardsContainer.style.left = Value + 'px'
    console.log(Value)}
})

left1Button.addEventListener('click', function() { 
    if (Value > 0) {
        Value == 0
    } if (Value <= 0) {
    Value += ((Math.floor(cardsInWindow))*cardsWidth);
    cardsContainer.style.left = Value + 'px'
    console.log(Value)}
})

right1Button.addEventListener('click', function() {
    if (Value > 0) {
        Value == 0
    } if (Value <= 0) {
    Value -= ((Math.floor(cardsInWindow))*cardsWidth);
    cardsContainer.style.left = Value + 'px'
    console.log(Value)}
})