import { createContext, useState, useEffect } from "react";


export const GameContext = createContext(null);

const emojis = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"];

export function GameProvider({ children }) {
  const [cards, setCards] = useState(generateCards());
  const [turns, setTurns] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchesLeft, setMatchesLeft] = useState(emojis.length);
  const [win, setWin] = useState(false);

  useEffect(() => {
    const matchedPairs = cards.filter((card) => card.isMatched).length / 2;
    setMatchesLeft(emojis.length - matchedPairs);
  }, [cards]);

  useEffect(() => {
    if (matchesLeft === 0) {
      setWin(true);
    }
  }, [matchesLeft]);

  function handleClick(id) {
    if (flippedCards.length >= 2 || flippedCards.some((card) => card.id === id)) return;

    const clickedCard = cards.find((card) => card.id === id);

    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, isFlipped: true } : card))
    );

    setFlippedCards((prevFlipped) => {
      const newFlipped = [...prevFlipped, clickedCard];

      if (newFlipped.length === 2) {
        setTurns((prev) => prev + 1);
        const [firstCard, secondCard] = newFlipped;

        if (firstCard.emoji === secondCard.emoji) {
          setTimeout(() => {
            setCards((prevCards) =>
              prevCards.map((card) =>
                card.id === firstCard.id || card.id === secondCard.id
                  ? { ...card, isMatched: true }
                  : card
              )
            );
            setFlippedCards([]);
          }, 500);
        } else {
          setTimeout(() => {
            setCards((prevCards) =>
              prevCards.map((card) =>
                card.id === firstCard.id || card.id === secondCard.id
                  ? { ...card, isFlipped: false }
                  : card
              )
            );
            setFlippedCards([]);
          }, 1000);
        }
      }
      return newFlipped;
    });
  }

  function generateCards() {
    const duplicated = [...emojis, ...emojis];
    const newCards = duplicated.map((emoji) => ({
      id: Math.random(),
      emoji: emoji,
      isFlipped: false,
      isMatched: false,
    }));

    return newCards.toSorted(() => Math.random() - 0.5);
  }

  function reset() {
    setCards(generateCards());
    setTurns(0);
    setFlippedCards([]);
    setMatchesLeft(emojis.length);
    setWin(false);
  }

  return (
    <GameContext.Provider value={{ cards, turns, matchesLeft, handleClick, reset, win }}>
      {children}
    </GameContext.Provider>
  );
}
