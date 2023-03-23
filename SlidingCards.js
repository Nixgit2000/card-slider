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
addEventListener('load', function() {

    if (Value >=0) {
        leftButton.style.visibility = "hidden"
        console.log(totalCardWidth)
        console.log(windowWidth)
    }
})
addEventListener('click', function() {
    if (Value < 0) {
    leftButton.style.visibility = "visible"
    }
    if (Value >= 0) {
        leftButton.style.visibility = "hidden"
    }
    if (Value < 0) {
        rightButton.style.visibility = "visible"
    }
    if (Value <= -(totalCardWidth + cardsMargin - windowWidth)) {
        rightButton.style.visibility = "hidden"
    }
})
leftButton.addEventListener('click', function() { 
    Value += 222;
    cardsContainer.style.left = Value + 'px'
    console.log(Value)
})

rightButton.addEventListener('click', function() {
    Value -= 222;
    cardsContainer.style.left = Value + 'px'
    console.log(Value)
})

left1Button.addEventListener('click', function() { 
    Value += 222;
    cardsContainer.style.left = Value + 'px'
    console.log(Value)
})

right1Button.addEventListener('click', function() {
    Value -= (totalCardWidth + cardsMargin - windowWidth);
    cardsContainer.style.left = Value + 'px'
    console.log(Value)
})