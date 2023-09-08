import Nav from "../nav/Nav";
import PresentElement from "./PresentElement";

const Present = () => {
    return (
        <div className="Present Backcolor ">
            <Nav />
            <div className="pt-14 h-full flex flex-col items-center justify-center">
                <p className="OAtitle text-3xl text-center py-6">경품</p>

                <div className="grid grid-cols-2 w-11/12 m-auto">
                    <PresentElement img={'first'} grade={'1등'} name={'소니헤드셋 (1명)'} />
                    <PresentElement img={'second'} grade={'2등'} name={'한우 세트 (1명)'} />
                    <PresentElement img={'third'} grade={'3등'} name={'토이 카메라 (3명)'} />
                    <PresentElement img={'fourth'} grade={'4등'} name={'SKETCH VILLAGE 키링'} />
                </div>

                <div className="presentBtn text-center mt-8 relative z-10"><button>경품을 받고 싶다면?</button></div>
            </div>
        </div>
    )
}

export default Present; 