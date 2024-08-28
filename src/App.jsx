import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './SingleCard'


const cardImages = [
  { 'src': '/img/helmet-1.png' , matched: false},
  { 'src': '/img/potion-1.png' , matched: false},
  { 'src': '/img/scroll-1.png' , matched: false},
  { 'src': '/img/ring-1.png' , matched: false},
  { 'src': '/img/sword-1.png' , matched: false},
  { 'src': '/img/shield-1.png' , matched: false}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  // shuffle the images
  const shuffleCardImages = () => {
    const shuffleImages = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffleImages)
    setTurns(0)
  }


  // check if the first card is clicked or not
  const handleChoice = (card) => {
    if (choiceOne) {
      setChoiceTwo(card);
    }else{
      setChoiceOne(card);
    }
    
  }

  // check if the two cards match
  useEffect(() => {
  if (choiceOne && choiceTwo) {
    setDisabled(true);
    if (choiceOne.src === choiceTwo.src) {
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.src === choiceOne.src) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });
      });
      alertify.notify('Items matched!', 'success', 2);
      resetTurns();
    } else {
      alertify.notify('Items did not match', 'error', 2);
      setTimeout(() => {
        resetTurns();
      }, 1000);
    }
  }
}, [choiceOne, choiceTwo]);


  // reset the state then count the number it takes in a turn
  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(turns + 1);
    setDisabled(false);
  }

  

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCardImages}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          
          <SingleCard 
          key={card.id} 
          card = {card}  
          handleChoice = {handleChoice} 
          flipped = {card === choiceOne || card === choiceTwo || card.matched}
          disabled = {disabled}
          />
        ))}
    </div>
    <p>Turns: {turns}</p>
    </div >
  );
}

export default App