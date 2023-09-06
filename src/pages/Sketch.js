import Nav from "../component/Nav";
import { useState } from "react";
import SwitchBtn from "../component/SwitchBtn";
import Headquarters from "../component/Headquarters";
import TicketBox from "../component/TicketBox";
import '../component/style.css';

const Sketch = () => {

    const [onActive, setOnActive] = useState('매표소')

    let Content;

    switch (onActive) {
        case '매표소':
            Content = TicketBox;
            break;
        case '본부':
            Content = Headquarters;
    }

    return (
        <>
            <div className="Sketch Backcolor">
                <Nav />
                <div className="flex justify-center OA">
                    <SwitchBtn character={'sketch'} title={'매표소'} onActive={onActive} setOnActive={setOnActive} />
                    <SwitchBtn character={'sketch'} title={'본부'} onActive={onActive} setOnActive={setOnActive} />
                </div>

                {/* 매표소 or 본부*/}
                <div>
                    <Content />
                </div>
            </div>
        </>
    )
}

export default Sketch;