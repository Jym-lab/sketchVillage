import Nav from "../component/Nav";
import SketchElement from "../component/SketchElement";
import Subtitle from "../component/Subtitle";
import { useState } from "react";
import SwitchBtn from "../component/SwitchBtn";
import Game from '../pages/Game'
import Joy from '../pages/Joy'

const Sketch = () => {
    const missonTag = ['#미션지', '경품 추첨', '소니 헤드셋'];
    const todayBoothTag = ['#어떤 동아리에 가입하지?', '동아리 랜덤 뽑기'];

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
            <div className="Sketch Backcolor">
                <Nav />
                <div className="flex justify-center">
                    <SwitchBtn character={'sketch'} title={'매표소'} />
                    <SwitchBtn character={'sketch'} title={'본부'} />
                </div>

                {/* 매표소 */}
                <div>
                    <div>
                        <Subtitle character={'sketch'} title={'배부 물품'} direction={'left'} />
                        <div className="flex items-center justify-evenly">
                            <div className="flex flex-col items-center">
                                <img width="130" src={process.env.PUBLIC_URL + 'assets/sketch/pamplet.png'} alt="" />
                                <p>팜플렛</p>
                            </div>

                            <div>
                                <div className="flex flex-col items-center">
                                    <img width="130" src={process.env.PUBLIC_URL + 'assets/sketch/monster.png'} alt="" />
                                    <p>몬스터 음료</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Subtitle character={'sketch'} title={'프로그램'} direction={'right'} />
                        <div>
                            <SketchElement logo={'missionLogo'} tags={missonTag} img={'mission'} right={false} />
                            <SketchElement logo={'todayBoothLogo'} tags={todayBoothTag} img={'todayBooth'} right={true} />
                        </div>
                    </div>
                </div>

                {/* 본부 */}

            </div>
        </>
    )
}

export default Sketch;