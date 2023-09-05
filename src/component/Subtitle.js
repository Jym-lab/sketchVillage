import './style.css';

const Subtitle = ({ character, title, direction }) => {
    return (
        <div className="Subtitle OA text-center">
            <div className={["py-1", "relative", `${character}_color`].join(' ')}>
                <img className={["absolute", "w-14", `${direction}`].join(' ')} src={process.env.PUBLIC_URL + `assets/${character}.png`} alt="img" />
                <span>{title}</span>
            </div>
        </div>
    )
}

export default Subtitle;