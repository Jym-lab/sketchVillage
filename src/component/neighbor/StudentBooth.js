import Subtitle from "../Subtitle";
import SketchElement from '../SketchElement';

const StudentBooth = () => {
    const ourMagicTag = ['#카드마술', '#동전마술', '#스토리텔링마술', '#간단한 마술 배우기']
    return (
        <div className="StudentBooth slide-in">
            <div>
                <Subtitle character={'neighbor'} title={'블루인'} direction={'left'} />
            </div>
            <div>
                <Subtitle character={'neighbor'} title={'Our magic'} direction={'right'} />
            </div>
            <div>
                <Subtitle character={'neighbor'} title={'모구 Shop'} direction={'left'} />
            </div>
        </div>
    )
}

export default StudentBooth;