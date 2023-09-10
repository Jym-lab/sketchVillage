import GameModal from "./GameModal";

const GameElement = ({ title, img, right }) => {
    return (
        <div className="GameElement Element">
            <div className={`box rounded-2xl p-3 pt-11 -mt-12 flex justify-between ${right ? 'flex-row-reverse' : ''}`}>
                <div className="flex flex-col justify-center items-center grow">
                    <p className="text-lg">{title}</p>
                    <GameModal img={img} />
                </div>
                <img width='180' src={process.env.PUBLIC_URL + `assets/game/${img}.png`} alt={img} />
            </div>
        </div >
    )
}

export default GameElement;