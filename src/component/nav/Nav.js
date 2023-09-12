import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowNav from "./ShowNav";
import { BiHomeAlt } from "react-icons/bi";
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false); // 스크롤 상태를 추적하기 위한 상태 변수

    useEffect(() => {
        // 스크롤 이벤트 핸들러를 추가
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setScrolling(true); // 스크롤 위치가 300px 이상이면 scrolling 상태를 true로 설정
            } else {
                setScrolling(false); // 그 외의 경우에는 scrolling 상태를 false로 설정
            }
        };

        // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 추가
        window.addEventListener("scroll", handleScroll);

        // 언마운트될 때 스크롤 이벤트 리스너 제거
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Navbar의 클래스 이름을 동적으로 설정하고 scrolling 상태에 따라 배경색 클래스를 추가
    const navbg = `Nav fixed top-0 flex justify-between items-center px-5 py-3 ${isOpen ? 'z-40' : 'z-30'} ${scrolling ? 'nav-bg-scrolled' : ''}`;

    return (
        <div>
            <div className={navbg}>
                <Link className={`${isOpen ? '' : 'z-20'}`} to="/" onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}><BiHomeAlt size="35" color="#2A6935" /></Link>

                <div className="navLogo">
                    <img src={process.env.PUBLIC_URL + `assets/Logo/Logo.png`} alt="Logo" />
                </div>


                <div className={`OA off-screen-menu ${isOpen ? 'open fixed slideInDown' : 'hidden'} flex justify-center items-center tracking-[1px]`}>
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