import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="Nav flex justify-between align-middle px-5 pt-2">
            <div className="navLogo">
                <Link to='/'>
                    <img src={process.env.PUBLIC_URL + `assets/Logo.png`} alt="Logo" />
                </Link>
            </div>
            <div className="navMenu">
                <img src={process.env.PUBLIC_URL + `assets/Logo.png`} alt="Logo" />
            </div>
        </div>
    )
}

export default Nav;