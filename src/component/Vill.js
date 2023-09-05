import { useNavigate } from "react-router-dom";

const Vill = ({ character, title, explain, direction }) => {
    const Navigate = useNavigate();
    return (
        <div className="Vill">
            <div className="relative">
                <div>
                    <img className={['vill_character', 'absolute', 'z-10', `${direction}_img`].join(' ')} src={process.env.PUBLIC_URL + `assets/character/${character}.png`} alt="character" />
                </div>
                <div className={['vill_title', 'absolute', `${character}`, `${direction}_title`, 'font-bold'].join(' ')}>{title}</div>
                <div className={['vill_explain', 'absolute', 'top-16', 'mt-2', `${direction}_ex`].join(' ')}>
                    <span className="text-sm">{explain}</span><br />
                    <button className="text-xs inline-block" onClick={() => { Navigate(`/${character}`) }}>{title} 구경하러가기!</button>
                </div>
                <img className="w-11/12 mx-auto" src={process.env.PUBLIC_URL + `assets/chat.png`} alt="chat" />
            </div>
        </div>
    )
}

export default Vill;