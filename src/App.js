import { cardsValue, cardsDescription } from "./constants/information";
import Card from "./components/Card";
import { useState } from "react";
import Challenge from "./components/Challenge";

function App() {
  const [randomNumber, setRandomNumber] = useState();
  const [cardSign, setCardSign] = useState();
  const [challenge, setChallenge] = useState();
  const [desc, setDesc] = useState();
  const [usedCards] = useState([]);

  const cards = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    signs: ["spades", "clubs", "diamonds", "hearts"],
  };

  function drawCard() {
    const rNumber = Math.floor(Math.random() * cards.numbers.length) + 1;
    setRandomNumber(cards.numbers[rNumber - 1]);

    const rSign = Math.floor(Math.random() * cards.signs.length);
    let randomSign = cards.signs[rSign];

    let card = rNumber + randomSign;

    // check if card has already been chosen
    if (usedCards.includes(card)) {
      drawCard();
    } else {
      setChallenge(cardsValue[rNumber]);
      setDesc(cardsDescription[rNumber]);
      setCardSign(randomSign);
      usedCards.push(card);
    }
  }
  // if all 52 cards have been seleced the game ends
  if (usedCards.length === 52) {
    console.log("Game Ended");
    alert("Game ended");
  }

  return (
    <div className="h-screen">
      <div className="text-center">
        <h1 className=" text-5xl mt-3"> King's Cup</h1>
        <p className=" text-2xl m-3">Drinking Game</p>
      </div>

      <div className="mt-[70px] text-center">
        <button
          className="text-3xl font-boldrounded-sm p-1 bg-red-700 rounded-md text-white"
          onClick={drawCard}
        >
          PLAY
        </button>
      </div>

      <div className="flex justify-center mt-[70px]">
        <Card cardNumber={randomNumber} cardSign={cardSign} />
      </div>

      <Challenge challenge={challenge} desc={desc} />

      <footer className="fixed bottom-0 left-0 right-0 text-center p-4 text-lg"><a href="https://github.com/gnahc2305">Andres Chang</a></footer>
    </div>
  );
}

export default App;
