import Subtitle from "../Subtitle";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";


const StudentBooth = () => {
    return (
        <div className="StudentBooth slide-in">
            <div>
                <Subtitle character={'neighbor'} title={'블루인'} direction={'left'} />

                <div className="neighborElement Element">
                    <div className="box rounded-2xl p-5 pl-10 flex flex-row-reverse justify-between items-center text-center">
                        <ul className='text-lg'>
                            <li><span className="neighborfontcolor font-bold">떡볶이, 순대</span> 판매</li>
                            <li>룰렛이벤트 진행</li>
                            <li className="NeighborsmallTag">#간식거리 #음식이용권</li>
                            <li className="flex justify-center items-centere">
                                <Link to="https://instagram.com/sku_bluein?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><BsInstagram className="mr-3" /></Link>
                                <Link to="블루인유튜브링크" target="_blank" rel="noopener noreferrer"><BsYoutube /></Link>
                            </li>

                        </ul>
                        <img width='130' src={process.env.PUBLIC_URL + `assets/neighbor/blueIn.png`} alt="몬스터" />
                    </div>
                </div>
            </div>
            <div>
                <Subtitle character={'neighbor'} title={'Our magic'} direction={'right'} />
                <div className="neighborElement Element">
                    <div className="box rounded-2xl p-5 pl-10 flex justify-between items-center">
                        <div>
                            <p className="text-xl font-bold text-gray-700 mb-3">클로즈업 <span className="neighborfontcolor">마술쇼!</span></p>
                            <div className="text-gray-600">
                                <span>#카드마술</span><br />
                                <span>#동전마술</span><br />
                                <span>#스토리텔링마술</span><br />
                                <span>#간단한 마술 배우기</span><br />
                            </div>
                        </div>
                        <img width='130' src={process.env.PUBLIC_URL + `assets/neighbor/magic.png`} alt="몬스터" />
                    </div>
                </div>
            </div>
            <div>
                <Subtitle character={'neighbor'} title={'모구 Shop'} direction={'left'} />
                <div className="neighborElement Element last">
                    <div className="box rounded-2xl p-5 pl-10 flex justify-between items-center">
                        <div>
                            <p className="text-2xl font-bold text-gray-700 mb-3" >물품 판매</p>
                            <div className="text-gray-600">
                                <span>#의류</span><br />
                                <span>#화장품</span><br />
                                <span>#소장품</span><br />
                            </div>
                        </div>
                        <img width='130' src={process.env.PUBLIC_URL + `assets/neighbor/mogoShop.png`} alt="몬스터" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default StudentBooth;