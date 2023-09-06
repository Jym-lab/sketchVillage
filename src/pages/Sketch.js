import { useState } from "react";
import SwitchBtn from "../component/SwitchBtn";
import Game from '../pages/Game'
import Joy from '../pages/Joy'

const Sketch = () => {
    const [onActive, setOnActive] = useState('매표소')

    let Content;

    switch (onActive) {
        // 콘텐츠 컴포넌트 추가해서 추가하면 됨
        case '매표소':
            Content = Game;
            break;
        case '본부':
            Content = Joy;
    }
    return (
        <>
            <div className="flex justify-center SwitchBtn OA">
                <SwitchBtn character={'sketch'} title={'매표소'} onActive={onActive} setOnActive={setOnActive}/>
                <SwitchBtn character={'sketch'} title={'본부'} onActive={onActive} setOnActive={setOnActive}/>
            </div>

            <div className="flex justify-center SwitchBtn OA">
                <SwitchBtn character={'neighbor'} title={'부스'} onActive={onActive} setOnActive={setOnActive}/>
                <SwitchBtn character={'neighbor'} title={'협찬'} onActive={onActive} setOnActive={setOnActive}/>
                <SwitchBtn character={'neighbor'} title={'학생부스'} onActive={onActive} setOnActive={setOnActive}/>
            </div>

            <div className="flex justify-center SwitchBtn OA">
                <SwitchBtn character={'joy'} title={'장기자랑'} onActive={onActive} setOnActive={setOnActive}/>
                <SwitchBtn character={'joy'} title={'동아리'} onActive={onActive} setOnActive={setOnActive}/>
            </div>
            <div>
                <Content />
            </div>
        </>
    )
}

export default Sketch;