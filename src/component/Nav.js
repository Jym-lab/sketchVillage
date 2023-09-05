import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <div className="Nav flex justify-between items-center px-5 pt-2">
            <div className="navLogo">
                <Link to='/' onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}>
                    <img src={process.env.PUBLIC_URL + `assets/Logo/Logo.png`} alt="Logo" />
                </Link>
            </div>
            <div className="navMenu titlegreen">
            </div>
        </div>
    )
}

export default Nav;