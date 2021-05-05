
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
  'https://www.trustedtarot.com/img/cards/the-moon.png',
  'https://www.trustedtarot.com/img/cards/the-chariot.png',
  'https://www.trustedtarot.com/img/cards/the-world.png',
  'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
  'https://www.trustedtarot.com/img/cards/judgement.png',
  'https://www.trustedtarot.com/img/cards/eight-of-swords.png',
  'https://www.trustedtarot.com/img/cards/the-tower.png',
  'https://www.trustedtarot.com/img/cards/the-moon.png',
  'https://www.trustedtarot.com/img/cards/strength.png',
  'https://www.trustedtarot.com/img/cards/the-lovers.png',
  'https://www.trustedtarot.com/images/cards/00.png',
  'https://www.trustedtarot.com/img/cards/the-star.png'
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







