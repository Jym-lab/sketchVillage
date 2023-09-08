import { Link } from "react-router-dom";
import ImgSubtitle from "../ImgSubtitle";
import Subtitle from "../Subtitle";
import { HiMiniCursorArrowRays } from "react-icons/hi2";

const OutBooth = () => {
    return (
        <div className="OutBooth slide-in text-lg">
            <div>
                <ImgSubtitle character={'neighbor'} title={'neighbor/sangsangUniv'} direction={'left'} />
                <div className="neighborElement Element">
                    <div className="box rounded-2xl p-5 pl-12">
                        <ul className="list-none">
                            <li className="text-gray-700 mb-1">
                                <Link to="https://www.ktng.com/univ" className="flex items-center">
                                    1.<span className="mr-1 underline underline-offset-4 italic font-bold">해당링크로 참여신청</span>
                                    <HiMiniCursorArrowRays /></Link></li>
                            <li className="NeighborsmallTag mb-4">#공책 #마스킹테이프 #스티커 #선정리클립</li>
                            <li className=" text-gray-700  mb-1">2. 주사위던지기 이벤트 진행</li>
                            <li className="NeighborsmallTag">#코닥일회용카메라 #마우스패드 #링티</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <Subtitle character={'neighbor'} title={'IT\'S ME'} direction={'left'} />
                <img width="100" className="absolute top-12 right-0" src={process.env.PUBLIC_URL + `assets/neighbor/itsMe.png`} alt="생리대" />
                <div className="neighborElement Element">
                    <div className="box  rounded-2xl p-5 pl-12">
                        <ul className="list-none">
                            <li className=" text-gray-700 mb-1">1. 룰렛이벤트 진행</li>
                            <li className="NeighborsmallTag mb-4">다양한 <span className="font-bold">생리대 세트</span> 증정</li>
                            <li className=" text-gray-700  mb-1">2. 부스 방문시 <span className="font-bold neighborfontcolor">잇츠미 생리대</span> 증정</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative last">
                <Subtitle character={'neighbor'} title={'도로시팩토리'} direction={'left'} />
                <img width="100" className="absolute top-12 -right-2" src={process.env.PUBLIC_URL + `assets/neighbor/kiring.png`} alt="키링" />
                <div className="neighborElement Element">
                    <div className="box  rounded-2xl p-5 pl-12">
                        <ul className="list-none">
                            <li className="text-gray-700 mb-1">
                                <span className="neighborfontcolor font-bold">레진 아트</span> (키링, 스트랩 등)<br />
                                10 ~ 20% 할인된 가격에 판매
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OutBooth;