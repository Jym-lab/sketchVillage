import Subtitle from "../Subtitle";
import { HiMusicalNote } from "react-icons/hi2";

const JoyShow = () => {
    return (
        <div className="JoyDongari slide-in">
            {/* TimeTable */}
            <Subtitle character={'joy'} title={'TIME TABLE'} direction={'left'} />
            <div className="timetable w-10/12 m-auto text-center">
                <div className="py-3 text-lg font-extrabold flex justify-center items-center">
                    <HiMusicalNote className="mr-1 mb-1" />
                    우리 마을 끼쟁이 14:00 ~ 15:00
                    <HiMusicalNote className="ml-1 mb-1" />
                </div>

                <div className="grid grid-cols-2 w-11/12 m-auto pb-3 gap-1 text-start">
                    <p className="ml-12">1. 스.성.파</p>
                    <p>5. 김이 모락모락 나현</p>
                    <p className="ml-12">2. OG</p>
                    <p>6. Girl's on top</p>
                    <p className="ml-12">3. 시대러스</p>
                    <p>7. 어쩔핑크</p>
                    <p className="ml-12">4. 팀명 없음</p>
                </div>
            </div>

            {/* Line Up */}
            <Subtitle character={'joy'} title={'LINE UP'} direction={'right'} />
            <div className="dongarifont italic joyshowimg">
                <div className="flex justify-center items-center relative my-5">
                    <img width='230' className='mr-20' src={process.env.PUBLIC_URL + `assets/joyshow/1.png`} alt="" />
                    <p className="text-4xl absolute right-8 bottom-8 flex flex-col">
                        스.성.파
                        <span className='text-sm'>스트릿 성결 파이터</span>
                    </p>

                </div>

                <div className="flex flex-col justify-center items-center  relative my-5">
                    <img width='130' src={process.env.PUBLIC_URL + `assets/joyshow/2.png`} alt="" />
                    <p className="text-5xl absolute right-12 bottom-8">OG</p>
                </div>

                <div className="flex flex-col justify-center items-center  relative my-8">
                    <img width='200' className='mr-32' src={process.env.PUBLIC_URL + `assets/joyshow/3.png`} alt="" />
                    <p className="text-3xl absolute right-16 top-16">시대러스</p>
                </div>

                <div className="flex flex-col justify-center items-center relative my-12">
                    <img width='230' className='mr-16' src={process.env.PUBLIC_URL + `assets/joyshow/4.png`} alt="" />
                    <p className="text-2xl absolute right-10 top-14">팀명 없음</p>
                </div>

                <div className="flex flex-col justify-center items-center relative my-5">
                    <img width='180' className='mr-32' src={process.env.PUBLIC_URL + `assets/joyshow/5.png`} alt="" />
                    <p className="text-3xl absolute right-12 top-16">김이<br /> 모락모락<br /> 나현</p>
                </div>

                <div className="flex flex-col justify-center items-center relative my-10">
                    <img width='270' src={process.env.PUBLIC_URL + `assets/joyshow/6.png`} alt="" />
                    <p className="text-2xl absolute right-16 top-10">Girl's on top</p>
                </div>

                <div className="flex flex-col justify-center items-center relative my-16">
                    <img width='240' src={process.env.PUBLIC_URL + `assets/joyshow/7.png`} alt="" />
                    <p className="text-4xl absolute right-12 -bottom-6">어쩔핑크</p>
                </div>
                <div className="last"></div>
            </div>
        </div>
    )
}

export default JoyShow;