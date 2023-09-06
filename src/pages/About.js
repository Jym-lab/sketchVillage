import Nav from "../component/Nav";
import './About.css';

const About = () => {
    return (
        <>
            <div className="About Backcolor">
                <Nav />
                <p className="OAtitle text-3xl text-center py-6">만든이들</p>
                <div className="collabo flex items-center justify-center">
                    <div className="team-sketch flex flex-col mx-auto">
                        <img className="mx-auto" src={process.env.PUBLIC_URL + `assets/Logo/sketchLogo.png`} alt="sketch logo" />
                        <span className="text-center mt-3 titlegreen font-bold">SKETCH</span>
                        <span className="text-center text-gray font-bold">동아리연합회</span>
                    </div>
                    <div className="team-likelion flex flex-col mx-auto">
                        <img className="mx-auto py-6" src={process.env.PUBLIC_URL + `assets/Logo/likelion.png`} alt="likelion logo" />
                        <span className="text-center mt-3 titlegreen font-bold">성결대학교</span>
                        <span className="text-center text-gray font-bold">멋쟁이사자처럼</span>
                    </div>
                </div>
                <div className="font-size10 text-center font-bold text-gray py-16">성결대학교 <span className="titlegreen">제39대 SKETCH 동아리연합회</span>에서 동아리페스티벌을 기획하였습니다. <br /><span className="titlegreen">멋쟁이사자처럼 성결대 11기</span>에서 웹사이트를 제작하였습니다.</div>
                <div className="flex flex-col text-center">
                    <img className="mx-auto w-16" src={process.env.PUBLIC_URL + `assets/Logo/sketchLogo.png`} alt="sketch logo" />
                    <span className="titlegreen font-bold text-xs pt-3">제39대 SKETCH 동아리연합회</span>
                    <span className="text-xs font-bold text-gray py-2">@sku_dongari39</span>
                </div>
                <img src={process.env.PUBLIC_URL + `assets/bottom.png`} alt="sketch logo" />
            </div>
        </>
    )
}

export default About;