import Nav from "../component/nav/Nav";
import CloudLottie from "../component/CloudLottie";

const Location = () => {
    return (
        <div className="Location Backcolor">
            <Nav />
            <CloudLottie />
            <div className="pt-14">
                <div><img src={process.env.PUBLIC_URL + `assets/welcome.png`} alt="welcome title" /></div>
                <div><img src={process.env.PUBLIC_URL + `assets/location.png`} alt="welcome title" /></div>
                <div>
                    <button>동아리연합회 부스</button>
                </div>
            </div>
        </div>
    )
}

export default Location;