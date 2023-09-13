import { useEffect } from 'react';
import Nav from '../component/nav/Nav';

const Healing = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    },)

    return (
        <div className='Healing'>
            <Nav />
            <div className='healingText OAtitle text-center text-3xl pt-32 relative z-10'>
                <span>휴식</span>하고
                <br />
                <span>취식</span>하는 공간
            </div>
            <div className='absolute bottom-0 Healingimg'>
                <img className='' src={process.env.PUBLIC_URL + `assets/healingnotext.png`} alt="" />
            </div>
        </div>
    )
}

export default Healing;