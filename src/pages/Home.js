import Nav from "../component/nav/Nav";
import CloudLottie from "../component/CloudLottie";
import BottomArrow from "../component/BottomArrow";
import IntroVillage from "../component/main/IntroVillage";

const Home = () => {
    return (
        <div className='Home min-h-screen Backcolor'>
            {/* MAIN */}
            <div className="Main min-h-screen flex flex-col">
                <Nav />
                <CloudLottie option={'absolute top-1/3'} />
                <div className="flex flex-col items-center justify-center flex-1">
                    <div className="tracking-in-expand-fwd-top text-xl font-bold titlegreen ">2023 동아리페스티벌</div>
                    <div><img src={process.env.PUBLIC_URL + `assets/Logo/Logo.png`} alt="" /></div>
                    <div className='tracking-in-contract-bck-bottom mb-6 text-base font-bold titlegreen'>2023.09.19 성결대학교 운동장</div>
                </div>
                <BottomArrow />
            </div>

            {/* SKETCH VILLAGE 소개 */}
            <div className="Main2 min-h-screen">
                {/* <Nav /> */}
                <IntroVillage />
            </div>
        </div>
    )
}

export default Home;