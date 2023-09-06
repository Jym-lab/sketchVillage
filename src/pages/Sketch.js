import { useState } from "react";
import SwitchBtn from "../component/SwitchBtn";

const Sketch = () => {
    const [onActive, setOnActive] = useState('매표소')
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
        </>
    )
}

export default Sketch;