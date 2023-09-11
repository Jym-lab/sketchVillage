import Nav from "../component/nav/Nav";
import WelcomeBtn from "../component/main/WelcomeBtn";

const Location = () => {
    return (
        <div className="Location Backcolor">
            <Nav />
            <div className="pt-14">
                <div className="my-10">
                    <img src={process.env.PUBLIC_URL + `assets/welcome.png`} alt="welcome title" />
                </div>
                <div className="w-11/12 mx-auto my-10">
                    <img className='slit-in-vertical' src={process.env.PUBLIC_URL + `assets/location.png`} alt="welcome title" />
                </div>
                <div className="locationbtn flex justify-center">
                    <WelcomeBtn content={'동아리연합회 부스'} village={'sketch'} />
                    <WelcomeBtn content={'동아리 부스'} village={'dongari'} />
                    <WelcomeBtn content={'외부 부스'} village={'neighbor'} />
                </div>
            </div>
        </div>
    )
}

export default Location;