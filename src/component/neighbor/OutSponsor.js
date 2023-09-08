import ImgSubtitle from "../ImgSubtitle";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { SiKakaotalk } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiMiniCursorArrowRays } from "react-icons/hi2";

const OutSponsor = () => {
    return (
        <div className="OutSponsor slide-in">
            <div>
                <ImgSubtitle character={'neighbor'} title={'neighbor/monsterLogo'} direction={'left'} />

                <div className="neighborElement Element">
                    <div className="box rounded-2xl p-5 flex justify-evenly items-center text-center">
                        <div className="text-lg">동아리페스티벌<br />참여자 전체<br /><span className="neighborfontcolor font-bold ">몬스터 음료</span> 증정</div>
                        <img width='130' src={process.env.PUBLIC_URL + `assets/neighbor/monster1.png`} alt="몬스터" />
                    </div>
                </div>
            </div>

            <div>
                <ImgSubtitle character={'neighbor'} title={'neighbor/bacchusLogo'} direction={'left'} />

                <div className="neighborElement Element">
                    <div className="box rounded-2xl p-5 flex flex-row-reverse justify-evenly items-center">
                        <ul className="flex flex-col justify-center items-center text-center">
                            <li className="text-gray-700 mb-1 underline underline-offset-4 italic font-bold">
                                <Link to="https://instagram.com/bacchus_friends?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    <BsInstagram size='18' className="mr-1 " />인스타 팔로우<HiMiniCursorArrowRays className="ml-1" /> </Link></li>
                            <li className="mb-1"><MdOutlineKeyboardDoubleArrowDown /></li>
                            <li className="neighborfontcolor">박카스맛 젤리 증정</li>
                        </ul>
                        <img width='130' src={process.env.PUBLIC_URL + `assets/neighbor/bacchus.png`} alt="박카스" />
                    </div>
                </div>
            </div >

            <div>
                <ImgSubtitle character={'neighbor'} title={'neighbor/yvesomLogo'} direction={'left'} />

                <div className="neighborElement Element last">
                    <div className="box rounded-2xl p-5 flex justify-evenly items-center">
                        <ul className="flex flex-col justify-center items-center text-center">
                            <li className="text-gray-700 mb-1 underline underline-offset-4 italic font-bold">
                                <Link to="http://pf.kakao.com/_xjxjlBxl" target="_blank" rel="noopener noreferrer" className="flex items-center ">
                                    <SiKakaotalk size='18' className="mr-1" />입솜 카톡채널 추가<HiMiniCursorArrowRays className="ml-1" /></Link></li>
                            <li className="mb-1"><MdOutlineKeyboardDoubleArrowDown /></li>
                            <li className="mb-2"><span className="neighborfontcolor font-bold italic">오일프리 모이스처라이저</span> 증정</li>
                            <li className="NeighborsmallTag">+ '화해'어플로 <span className="font-bold">리뷰 작성시 토너 추가 증정</span>(캡쳐사진 요청 예정) </li>
                        </ul>
                        <img width='110' src={process.env.PUBLIC_URL + `assets/neighbor/yvesom.png`} alt="몬스터" />
                    </div>
                </div >
            </div >
        </div >
    )
}

export default OutSponsor;