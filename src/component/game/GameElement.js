const GameElement = ({ title, img, right }) => {
    return (
        <div className="GameElement Element">
            <div className={`box p-3 pt-11 -mt-12 flex justify-between ${right ? 'flex-row-reverse' : ''}`}>
                <div className="flex flex-col justify-center items-center grow">
                    <p className="text-lg">{title}</p>
                    <button className={`gamebtn rounded-3xl py-1 mt-5 ${img === 'third' ? 'hidden' : ''}`}>
                        경품</button>
                </div>
                <img width='180' src={process.env.PUBLIC_URL + `assets/game/${img}.png`} alt={img} />
            </div>
        </div >
    )
}

export default GameElement;