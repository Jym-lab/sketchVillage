import { Link } from "react-router-dom";

const ShowNav = () => {
    return (
        <div className="ShowNav">
            <ul className="min-h-screen flex flex-col items-center justify-center gap-y-6 text-3xl">
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><Link to="#">배치도</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><Link to="#">무대 소개</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><Link to="#">경품</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><Link to="#">만든이들</Link></li>
                <li className="mb-20 hover:textShadow duration-500 hover:translate-y-[-5px]"></li>
            </ul>
        </div>
    )
}

export default ShowNav;