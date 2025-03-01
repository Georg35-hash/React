import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import GameBoard from "./GameBord";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

export default function MainComponent() {
    const { turns, matchesLeft, reset, win } = useContext(GameContext);

    return (
        <div>
            <div className="stats">
                <h1>Turns: {turns}</h1>
                <h1>Left couples: {matchesLeft}</h1>
            </div>
            <GameBoard />
            <Dialog open={win} onClose={reset}>
                <DialogTitle>🎉 Congrats! 🎉</DialogTitle>
                <DialogContent>You won the game in {turns} turns!</DialogContent>
                <DialogActions>
                    <Button onClick={reset} color="primary" variant="contained">
                        Start over
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
