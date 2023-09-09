import { useNavigate } from "react-router-dom";

const WelcomeBtn = ({ content, village }) => {
    const Navigate = useNavigate();
    return (
        <div className="relative flex flex-col last">
            <div className="">
                <img className='absolute w-12 -top-10' src={process.env.PUBLIC_URL + `assets/character/${village}.png`} alt="" />
                <button onClick={() => { Navigate(`/${village}`) }} className={village + 'btn'}>{content}</button>
            </div>
        </div>
    )
}

export default WelcomeBtn