import Subtitle from "../Subtitle";

const JoyDongari = () => {
    return (
        <div className="JoyDongari">
            <Subtitle character={'joy'} title={'TIME TABLE'} direction={'left'} />
            <Subtitle character={'joy'} title={'LINE UP'} direction={'right'} />

            <div className="dongarifont italic">
                <div className="flex justify-center items-end relative my-10">
                    <img width='230' className='relative z-10' src={process.env.PUBLIC_URL + `assets/joyDongari/1.png`} alt="" />
                    <p className="text-2xl mb-8">SAINT</p>
                    <img width='150' className='dongariLogo1 absolute opacity-30' src={process.env.PUBLIC_URL + `assets/joyDongari/1Logo.png`} alt="" />
                </div>

                <div className="flex justify-center items-end relative my-10">
                    <p className="text-2xl mb-3">Sound One</p>
                    <img width='230' className='relative z-10' src={process.env.PUBLIC_URL + `assets/joyDongari/2.png`} alt="" />
                    <img width='150' className='dongariLogo2 absolute opacity-30' src={process.env.PUBLIC_URL + `assets/joyDongari/2Logo.png`} alt="" />
                </div>

                <div className="flex justify-center items-end relative my-10">
                    <img width='230' className='relative z-10' src={process.env.PUBLIC_URL + `assets/joyDongari/3.png`} alt="" />
                    <p className="text-2xl mb-3">흑심</p>
                    <img width='100' className='dongariLogo3 absolute opacity-30' src={process.env.PUBLIC_URL + `assets/joyDongari/3Logo.png`} alt="" />
                </div>

                <div className="flex justify-center items-end relative my-10">
                    <p className="text-2xl mb-4">소너러스</p>
                    <img width='230' className='relative z-10' src={process.env.PUBLIC_URL + `assets/joyDongari/4.png`} alt="" />
                    <img width='130' className='dongariLogo4 absolute opacity-30' src={process.env.PUBLIC_URL + `assets/joyDongari/4Logo.png`} alt="" />
                </div>

                <div className="flex justify-center items-end relative my-10">
                    <img width='230' className='relative z-10' src={process.env.PUBLIC_URL + `assets/joyDongari/5.png`} alt="" />
                    <p className="text-2xl mb-6">뮤직애</p>
                    <img width='200' className='dongariLogo5 absolute opacity-30' src={process.env.PUBLIC_URL + `assets/joyDongari/5Logo.png`} alt="" />
                </div>

                <div className="flex justify-center items-end relative my-10">
                    <p className="text-2xl mb-5">STC</p>
                    <img width='230' className='relative z-10' src={process.env.PUBLIC_URL + `assets/joyDongari/6.png`} alt="" />
                    <img width='130' className='dongariLogo6 absolute opacity-30' src={process.env.PUBLIC_URL + `assets/joyDongari/6Logo.png`} alt="" />
                </div>

                <div className="flex justify-center items-end relative my-10">
                    <img width='200' className='relative z-10' src={process.env.PUBLIC_URL + `assets/joyDongari/7.png`} alt="" />
                    <p className="text-2xl mb-1 ml-1"> PEGASUSS</p>
                    <img width='130' className='dongariLogo7 absolute opacity-30' src={process.env.PUBLIC_URL + `assets/joyDongari/7Logo.png`} alt="" />
                </div>
                <div className="last"></div>
            </div>
        </div>
    )
}

export default JoyDongari;