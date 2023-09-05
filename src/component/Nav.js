import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (!document.getElementById('IonIcons')) {
          const scriptIoniconsJS = document.createElement('script');
          scriptIoniconsJS.id = 'IonIcons';
          scriptIoniconsJS.type= 'module';
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
                <div className="navMenu titlegreen">
                    <div className="text-[40px] cursor-pointer">
                        <ion-icon name="menu" onClick={() => setIsOpen(!isOpen)}></ion-icon>
                    </div>
                </div>
            </div>
            {/* Menu */}
            {isOpen && (
            <div className="fixed top-0 left-0 bg-white w-[100%] h-[100vh] text-black flex flex-col justify-center items-center tracking-[1px] z-30">
                <div className="fixed top-10 text-[40px] cursor-pointer">
                        <ion-icon name="close" onClick={() => setIsOpen(!isOpen)}></ion-icon>
                </div>
                <ul >
                    {/* 텍스트에 애니메이션 넣어봤는데 괜히 넣었네... 모바일은 잘 안되는듯? */}
                    <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><a href="#">Home</a></li>
                    <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><a href="#">Test1</a></li>
                    <li className="hover:textShadow duration-500 hover:translate-y-[-5px]"><a href="#">Test2</a></li>
                </ul>
            </div>
            )}
        </div>
    )
}


export default Nav;