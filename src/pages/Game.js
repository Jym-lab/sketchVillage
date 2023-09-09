import { useEffect } from "react";
import Nav from "../component/nav/Nav";
import GameElement from "../component/game/GameElement";
import Subtitle from "../component/Subtitle";

const Game = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    })
    return (
        <div className="Game Backcolor">
            <Nav />
            <div className="pt-14">
                <p className="OAtitle text-3xl text-center py-6">프로그램</p>

                <div>
                    <Subtitle character='game' title='손펀치 발펀치' direction='left' />
                    <GameElement title={'기록경신 아자아자'} img={'first'} right={false} />
                </div>

                <div>
                    <Subtitle character='game' title='대형 윷놀이' direction='right' />
                    <GameElement title={'스둥이를 이겨라!'} img={'second'} right={true} />
                </div>

                <div className="last">
                    <Subtitle character='game' title='에어하키 + 두더지게임' direction='right' />
                    <GameElement title={'친구와 함께!'} img={'third'} right={false} />
                </div>
            </div>
        </div>
    )
}

export default Game;