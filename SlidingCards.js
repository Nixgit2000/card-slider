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
    if (Value < -222) {
        left1Button.style.visibility = "visible"

    }
    if (Value >= -222) {
        left1Button.style.visibility = "hidden"

        }
    
    if (Value < -(totalCardWidth + cardsMargin - windowWidth)) {
        rightButton.style.visibility = "hidden"
        right1Button.style.visibility = "hidden"
    }


    if (Value >= -(totalCardWidth + cardsMargin - windowWidth)) {
        rightButton.style.visibility = "visible"
        right1Button.style.visibility = "visible"
    }
})
leftButton.addEventListener('click', function() { 
    if (Value > 0) {
        Value == 0
    } if (Value <= 0) {
    Value += 222;
    cardsContainer.style.left = Value + 'px'
}
})

rightButton.addEventListener('click', function() {
    if (Value > 0) {
        Value == 0
    } if (Value <= 0) {
    Value -= 222;
    cardsContainer.style.left = Value + 'px'
}
})

left1Button.addEventListener('click', function() { 
    if (Value > 0) {
        Value == 0
    } if (Value <= 0) {
        Value = 0;
        cardsContainer.style.left = Value + 'px'
    }}
)

right1Button.addEventListener('click', function() {
    if (((Math.floor(cardsInWindow))*cardsWidth) > windowWidth) {
    Value -= ((Math.floor(cardsInWindow))*cardsWidth);
    cardsContainer.style.left = Value + 'px'
    console.log(Value)
    }

})