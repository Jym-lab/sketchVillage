import Lottie from "lottie-react";
import loadingLottie from "../lottie/cloud.json";

const CloudLottie = ({ option }) => {
    return (
        <Lottie className={option} animationData={loadingLottie} />
    )
}

export default CloudLottie;