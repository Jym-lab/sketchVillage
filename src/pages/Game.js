import { useEffect } from "react";
import Nav from "../component/Nav";
import GameElement from "../component/game/GameElement";

const Game = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    })
    return (
        <div className="Game Backcolor">
            <div>
                <Nav />
                <p className="OAtitle text-3xl text-center py-6">프로그램</p>
                <GameElement />
            </div>
        </div>
    )
}

export default Game;