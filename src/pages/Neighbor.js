import { useEffect, useState } from "react";
import Nav from "../component/nav/Nav";
import SwitchBtn from "../component/SwitchBtn";
import OutBooth from "../component/neighbor/OutBooth";
import OutSponsor from "../component/neighbor/OutSponsor";
import StudentBooth from "../component/neighbor/StudentBooth";

const Neighbor = () => {
    const [onActive, setOnActive] = useState('외부부스');
    let Content;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [Content])

    switch (onActive) {
        case '외부협찬':
            Content = OutSponsor;
            break;
        case '학생부스':
            Content = StudentBooth;
            break;
        default:
            Content = OutBooth;
            break;
    }

    return (
        <div className="Neighbor Backcolor">
            <Nav />
            <div className="fixed fixedsubtitle z-20">
                <div className="flex justify-center OA pt-14 basicColor">
                    <SwitchBtn character={'neighbor'} title={'외부부스'} onActive={onActive} setOnActive={setOnActive} />
                    <SwitchBtn character={'neighbor'} title={'외부협찬'} onActive={onActive} setOnActive={setOnActive} />
                    <SwitchBtn character={'neighbor'} title={'학생부스'} onActive={onActive} setOnActive={setOnActive} />
                </div>
            </div>

            <div className="pt-32">
                <Content />
            </div>
        </div >
    )
}

export default Neighbor;