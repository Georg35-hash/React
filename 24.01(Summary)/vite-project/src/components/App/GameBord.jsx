
import Card from "./Card";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import CardModule from '../../components/App/Card.module.css'

export default function GameBoard() {
    const {cards} = useContext(GameContext);
    return (
        <div className={CardModule.maincomponent}>
         {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              emoji={card.emoji}
              isFlipped={card.isFlipped}
              isMatched={card.isMatched}
            />
          ))}
          
        </div>
       
    );
}