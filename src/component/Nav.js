import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (!document.getElementById('IonIcons')) {
            const scriptIoniconsJS = document.createElement('script');
            scriptIoniconsJS.id = 'IonIcons';
            scriptIoniconsJS.type = 'module';
            scriptIoniconsJS.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
            document.body.appendChild(scriptIoniconsJS);
        }
    });
    return (
        <div>
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
                <div className={`off-screen-menu ${isOpen ? 'open z-20 ' : ''} flex justify-center items-center tracking-[1px]`}>
                    {isOpen && (
                        <ul>
                            <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><a href="#">Test1</a></li>
                            <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><a href="#">Test2</a></li>
                            <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><a href="#">Test3</a></li>
                        </ul>
                    )}
                </div>
                <div className={`hamburger-menu ${isOpen ? 'active' : ''} cursor-pointer z-20`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="ham-bar bar-top menugreen"></div>
                    <div className="ham-bar bar-mid menugreen"></div>
                    <div className="ham-bar bar-bottom menugreen"></div>
                </div>
            </div>
        </div>
    )
}


export default Nav;