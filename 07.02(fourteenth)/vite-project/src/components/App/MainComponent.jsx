import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import GameBoard from "./GameBord";

export default function MainComponent() {
    const { turns, matchesLeft, reset, win } = useContext(GameContext);
    return (
        <div>
            <div className="stats">
                <h1>Turns: {turns}</h1>
                <h1>Left couples: {matchesLeft}</h1>
            </div>
            <GameBoard />
            <button className="reset-button" onClick={reset}>Start over</button>
            {win && <h1 className="win-message">Victory! 🎉</h1>}
        </div>
    );
}