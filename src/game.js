
// export function drawCard() {
//   const cards = {
//     numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
//     sign: ["spades", "clubs", "diamonds", "hearts" ]
//   };

//   let usedCards = [];

//   const rNumber = Math.floor(Math.random() * cards.numbers.length);
//   let randomNumber = cards.numbers[rNumber]

//   const rSign = Math.floor(Math.random() * cards.signs.length);
//   let randomSign = cards.signs[rSign]

//   let card = randomNumber + randomSign;

//   if (usedCards.length === 52) {
//     console.log('game ended');
//     return
//   }

//   if (usedCards.includes(card)) {
//     drawCard();
//   } else {
//     usedCards.push(card);
//     console.log(card);
//   }

// }