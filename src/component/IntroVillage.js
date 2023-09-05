import Vill from "./Vill";

const IntroVillage = () => {
    const sketchEx = '#미션지 #경품 #보호수';
    const dongariEx = '#동아리부스 #음식 #프로그램';
    const neighborEx = '#외부부스 #외부협찬 #학생부스';
    const joyEx = `#우리마을끼쟁이 #타임테이블`;
    const gameEx = '#오락기기 #경품 #랭킹';
    const healingEx = '#파라솔 #휴식 #취식';

    return (
        <div className="IntroVillage text-center">
            <div className="OAtitle text-2xl py-3">SKETCH VILLAGE 소개</div>
            <div>
                <Vill character={'sketch'} title={'스케치마을'} explain={sketchEx} direction={'left'} />
                <Vill character={'dongari'} title={'동아리마을'} explain={dongariEx} direction={'right'} />
                <Vill character={'neighbor'} title={'이웃마을'} explain={neighborEx} direction={'left'} />
                <Vill character={'joy'} title={'흥얼마을'} explain={joyEx} direction={'right'} />
                <Vill character={'game'} title={'오락마을'} explain={gameEx} direction={'left'} />
                <Vill character={'healing'} title={'힐링마을'} explain={healingEx} direction={'right'} />
            </div>
        </div >
    )
}

export default IntroVillage;