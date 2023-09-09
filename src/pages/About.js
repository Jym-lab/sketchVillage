import Nav from "../component/Nav";
import Person from "../component/about/Person";
import './About.css';

const About = () => {
    return (
        <>
            <div className="About Backcolor">
                <Nav />
                <p className="OAtitle text-3xl text-center py-6">만든이들</p>
                <div className="collabo flex items-center justify-center">
                    <div className="team-logo flex flex-col mx-auto">
                        <img className="mx-auto" src={process.env.PUBLIC_URL + `assets/Logo/sketchLogo.png`} alt="sketch logo" />
                        <span className="text-center mt-3 titlegreen font-bold">SKETCH</span>
                        <span className="text-center text-gray font-bold">동아리연합회</span>
                    </div>
                    <div className="team-logo flex flex-col mx-auto">
                        <img className="mx-auto py-6" src={process.env.PUBLIC_URL + `assets/Logo/likelion.png`} alt="likelion logo" />
                        <span className="text-center mt-3 titlegreen font-bold">성결대학교</span>
                        <span className="text-center text-gray font-bold">멋쟁이사자처럼</span>
                    </div>
                </div>
                <div className="font-size10 text-center font-bold text-gray py-16">성결대학교 <span className="titlegreen">제39대 SKETCH 동아리연합회</span>에서 동아리페스티벌을 기획하였습니다. <br /><span className="titlegreen">멋쟁이사자처럼 성결대 11기</span>에서 웹사이트를 제작하였습니다.</div>
                <div className="about-team flex flex-col items-center text-center">
                    <img className="mx-auto w-16" src={process.env.PUBLIC_URL + `assets/Logo/sketchLogo.png`} alt="sketch logo" />
                    <p className="titlegreen font-bold text-xs pt-3 text-center">제39대 SKETCH 동아리연합회</p>
                    <a className="text-xs font-bold text-gray py-2 text-center" target="_blank" without rel="noreferrer" href="https://www.instagram.com/sku_dongari39/">@sku_dongari39</a>
                    <div className="people">
                        <Person id={1}/>
                        <Person id={2}/>
                        <Person id={3}/>
                    </div>
                </div>
                <div className="about-team flex flex-col items-center text-center pt-16">
                    <img className="mx-auto w-16" src={process.env.PUBLIC_URL + `assets/Logo/likelion.png`} alt="likelion logo" />
                    <p className="titlegreen font-bold text-xs pt-3 text-center">멋쟁이사자처럼 성결대 11기</p>
                    <a className="text-xs font-bold text-gray py-2 text-center" target="_blank" without rel="noreferrer" href="https://www.instagram.com/likelion_sku/">@likelion_sku</a>
                    <div className="people">
                        <Person id={4}/>
                        <Person id={5}/>
                        <Person id={6}/>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + `assets/bottom.png`} alt="sketch logo" />
            </div>
        </>
    )
}

export default About;