import { createContext, useEffect, useState } from 'react';

const GameContext = createContext(null);


export default function GameProvider({ children }) {
    const [cards, setCards] = useState(generateCards());
    const [turns, setTurns] = useState(0);
    const [matchesLeft, setmathesLeft] = useState(emojis.length);
    const [openedCards, setOpenedCards] = useState([]);


    function Reset(params) {
        setCards(generateCards())
        setTurns(0)
        setmathesLeft([])
        setOpenedCards(emojis.length)
    }


    useEffect((id) => {
        if (openedCards.length === 2) {
            setTurns(...prevTurn => prevTurn + 1); // don't use INCREMENT please!
            const isMatched = openedCards[0].emoji === openedCards[1].emoji;
            if (isMatched) {
                setmathesLeft(prevLeftMatches => prevLeftMatches - 1);
                setCards(cards.map(card => card.id === openedCards[0].id || card.id === openedCards[1].id ? 
                    {...card, isMatched: true}: card));
            }
            setOpenedCards([])
        } else{
            setTimeout(() => {
                setCards(cards.map(card => card.id === openedCards[0].id || card.id === openedCards[1].id ? 
                    {...card, isFlipped: false}: card));
            }, 1000);
            setOpenedCards([])
        }
    }, [openedCards]);


    const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

    function generateCards(e) {

        const duplicked = [...emojis, ...emojis];
        duplicked.map(emoji => (
            {
                id: Date.now(),
                emoji: emoji,
                isFlipped: false,
                isMatched: false
            }
        ));
        const randomizeCards = newCards.toSorted(() => Math.random() - 0.5);
        return randomizeCards
    }

    function handleClick(id) {
        if (openedCards.includes(id) || openedCards.length >= 2) {
            return;
        }

        setCards(cards.map(card => card.id === id ? { ...card, isFlipped: true } : card));
        setOpenedCards(prevOpend => [...prevOpend, id]);
        // setOpenedCards(duplicked.id && duplicked.isFlipped == true)
    }


    return (
        <>
            <GameContext.Provider value={{cards, turns, matchesLeft, handleClick, Reset}}>
        {children}
            </GameContext.Provider>
        </>
    );
};