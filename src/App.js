import { cardsValue } from "./constants/information";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState();
  const [challenge, setChallenge] = useState();
  const [usedCards] = useState([]);

  const cards = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    signs: ["spades", "clubs", "diamonds", "hearts"],
  };

  function drawCard() {
    const rNumber = Math.floor(Math.random() * cards.numbers.length) + 1;
    // console.log(rNumber);
    setRandomNumber(cards.numbers[rNumber - 1]);

    const rSign = Math.floor(Math.random() * cards.signs.length);
    let randomSign = cards.signs[rSign];

    let card = rNumber + randomSign;

    // check if card has already been chosen
    if (usedCards.includes(card)) {
      drawCard();
    } else {
      setChallenge(cardsValue[rNumber]);
      console.log(card);
      usedCards.push(card);
      console.log(cardsValue[rNumber]);
    }
    
    // if all 52 cards have been seleced the game ends
    if (usedCards.length === 52) {
      console.log('Game Ended');
    }
  }
  

  return (
    <div className="">
      <button onClick={() => console.log(usedCards)}>usedCards</button>

      <button
        className="text-3xl font-bold ml-[50%] mt-[50%] bg-blue-800 rounded-sm p-1"
        onClick={drawCard}
      >
        PLAY
      </button>

      <Card cardNumber={randomNumber} challenge={challenge} />
    </div>
  );
}

export default App;
