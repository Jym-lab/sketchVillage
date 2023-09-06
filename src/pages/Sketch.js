import Nav from "../component/Nav";
import { useEffect, useState } from "react";
import SwitchBtn from "../component/SwitchBtn";
import Headquarters from "../component/Headquarters";
import TicketBox from "../component/TicketBox";
import '../component/style.css';

const Sketch = () => {
    const [onActive, setOnActive] = useState('매표소');
    let Content;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [Content])

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
                <div className="flex justify-center OA">
                    <SwitchBtn character={'sketch'} title={'매표소'} onActive={onActive} setOnActive={setOnActive} />
                    <SwitchBtn character={'sketch'} title={'본부'} onActive={onActive} setOnActive={setOnActive} />
                </div>

                {/* 외부부스 or 외부협찬 or 학생부스*/}
                <div>
                    <Content />
                </div>
            </div>
        </>
    )
}

export default Sketch;