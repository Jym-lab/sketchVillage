import Nav from "../component/nav/Nav";
import { useEffect, useState } from "react";
import SwitchBtn from "../component/SwitchBtn";
import Headquarters from "../component/sketch/Headquarters";
import TicketBox from "../component/sketch/TicketBox";
import '../component/style.css';

const Sketch = () => {
    const [onActive, setOnActive] = useState('매표소');
    let Content;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [Content, onActive])

    switch (onActive) {
        case '본부':
            Content = Headquarters;
            break;
        default:
            Content = TicketBox;
    }

    return (
        <>
            <div className="Sketch Backcolor">
                <Nav />
                <div className="fixed fixedsubtitle z-20">
                    <div className="flex justify-center OA pt-14 basicColor">
                        <SwitchBtn character={'sketch'} title={'매표소'} onActive={onActive} setOnActive={setOnActive} />
                        <SwitchBtn character={'sketch'} title={'본부'} onActive={onActive} setOnActive={setOnActive} />
                    </div>
                </div>

                {/* 외부부스 or 외부협찬 or 학생부스*/}
                <div className="pt-32">
                    <Content />
                </div>
            </div>
        </>
    )
}

export default Sketch;