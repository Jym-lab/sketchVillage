import SwitchBtn from "../component/SwitchBtn";
import { useEffect, useState } from "react";
import JoyDongari from "../component/joy/JoyDongari";
import JoyShow from "../component/joy/JoyShow";
import Nav from "../component/nav/Nav";

const Joy = () => {
    const [onActive, setOnActive] = useState('장기자랑');
    let Content;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [Content, onActive])

    switch (onActive) {
        case '동아리':
            Content = JoyDongari;
            break;
        default:
            Content = JoyShow;
    }

    return (
        <>
            <div className="Joy Backcolor">
                <Nav />
                <div className="fixed fixedsubtitle z-20">
                    <div className="flex justify-center OA pt-14 basicColor">
                        <SwitchBtn character={'joy'} title={'장기자랑'} onActive={onActive} setOnActive={setOnActive} />
                        <SwitchBtn character={'joy'} title={'동아리'} onActive={onActive} setOnActive={setOnActive} />
                    </div>
                </div>

                {/* 장기자랑 or 동아리*/}
                <div className="pt-32">
                    <Content />
                </div>
            </div>
        </>
    )
}

export default Joy;