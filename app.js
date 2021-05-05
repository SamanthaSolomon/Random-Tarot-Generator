
const cards = [
  'https://www.trustedtarot.com/img/cards/the-fool.png',
  'https://www.trustedtarot.com/img/cards/the-magician.png',
  'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
  'https://www.trustedtarot.com/img/cards/the-empress.png',
  'https://www.trustedtarot.com/img/cards/the-emperor.png',
  'https://www.trustedtarot.com/img/cards/the-heirophant.png',
  'https://www.trustedtarot.com/img/cards/the-chariot.png',
  'https://www.trustedtarot.com/img/cards/strength.png',
  'https://www.trustedtarot.com/img/cards/the-hermit.png',
  'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
  'https://www.trustedtarot.com/img/cards/justice.png',
  'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
  'https://www.trustedtarot.com/img/cards/death.png',
  'https://www.trustedtarot.com/img/cards/temperance.png',
  'https://www.trustedtarot.com/img/cards/the-tower.png',
  'https://www.trustedtarot.com/img/cards/the-moon.png'
]
const randomCard = () => {
  const index = Math.floor(Math.random() * cards.length)

  return cards[index]
}

const $div = $("<div class= 'emptyCard'> Random Tarot Me! </div>")

const $body = $('body')

$body.append($div)

$div.on("click", (event) => {

  const $img = $("<img class = 'card'>")

  $img.attr("src", randomCard())

  $body.append($img)

})



//   // select button

//   const $button = $("div")

//   // create click handler function

//   const clickHandler = (event) => {
// // create random generator function
    
// // use append function to add to page
//     $div.prepend(randomCard)
//   }


// //TRIED MY BEST BY BREAKING DOWN THIS PROCESS. I NEVER GOT THE DIV TO SHOW UP ON LIVE SERVER, WHICH MADE THIS REALLY HARD. THIS MORNING I THINK MAYBE MAKING ALL THE CARDS LIS WOULD HAVE BEEN A BETTER APPROACH.




