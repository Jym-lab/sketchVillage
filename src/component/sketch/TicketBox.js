import SketchElement from "./SketchElement";
import Subtitle from "../Subtitle";

const TicketBox = () => {
    const missionTag = ['#미션지', '#경품 추첨', '#소니 헤드셋'];
    const todayBoothTag = ['#어떤 동아리에', '놀러가지?', '#동아리 랜덤 뽑기'];

    return (
        <div className="TicketBox slide-in">
            {/* 배부 물품 */}
            <div>
                <Subtitle character={'sketch'} title={'배부 물품'} direction={'left'} />
                <div className="flex items-center justify-evenly">
                    <div className="flex flex-col items-center">
                        <img width="130" src={process.env.PUBLIC_URL + 'assets/sketch/ticketBox/pamplet.png'} alt="" />
                        <p>팜플렛</p>
                    </div>

                    <div>
                        <div className="flex flex-col items-center">
                            <img width="130" src={process.env.PUBLIC_URL + 'assets/sketch/ticketBox/monster.png'} alt="" />
                            <p>몬스터 음료</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 프로그램 */}
            <div>
                <Subtitle character={'sketch'} title={'프로그램'} direction={'right'} />
                <div>
                    <SketchElement logo={'sketch/ticketBox/missionLogo'} tags={missionTag} img={'sketch/ticketBox/mission'} right={false} />
                    <SketchElement logo={'sketch/ticketBox/todayBoothLogo'} tags={todayBoothTag} img={'sketch/ticketBox/todayBooth'} right={true} />
                </div>
            </div>
        </div>
    )
}
export default TicketBox;