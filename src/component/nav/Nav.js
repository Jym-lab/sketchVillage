import { useState } from "react";
import { Link } from "react-router-dom";
import ShowNav from "./ShowNav";
import { BiHomeAlt } from "react-icons/bi";
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className={`Nav w-96 fixed top-0 flex justify-between items-center px-5 pt-2 ${isOpen ? 'z-20' : 'z-10'}`}>
                <Link className={`${isOpen ? '' : 'z-20'}`} to="/" onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}><BiHomeAlt size="35" color="#2A6935" /></Link>

                <div className="navLogo">
                    <img src={process.env.PUBLIC_URL + `assets/Logo/Logo.png`} alt="Logo" />
                </div>
                <div className={`OA off-screen-menu ${isOpen ? 'open' : ''} flex justify-center items-center tracking-[1px]`}>
                    {isOpen && (
                        <ShowNav />
                    )}
                </div>
                <div className={`mr-1 hamburger-menu ${isOpen ? 'active' : ''} cursor-pointer z-20`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="ham-bar bar-top menugreen"></div>
                    <div className="ham-bar bar-mid menugreen"></div>
                    <div className="ham-bar bar-bottom menugreen"></div>
                </div>
            </div>
        </div >
    )
}


export default Nav;