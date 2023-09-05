import Department from "../component/Department";
import Nav from "../component/Nav";
import Subtitle from "../component/Subtitle";
import { FaSearch } from "react-icons/fa";
import dongari from '../json/dongari.json';

const Dongari = () => {
    const college = ['기독분과', '문화분과', '예능분과', '체능분과', '학술,봉사분과'];

    return (
        <div className="Dongari Backcolor">
            <Nav />
            {/* 부스 배치도 */}
            <div>
                <Subtitle character={'dongari'} title={"부스 배치도"} direction={'left'} />
                <div className="w-11/12 m-auto">
                    <img src={process.env.PUBLIC_URL + `assets/Logo/Logo.png`} alt="부스 배치도" />
                </div>
            </div>
            {/* 부스 소개 */}
            <div>
                <Subtitle character={'dongari'} title={"부스 소개"} direction={'right'} />
                <div className="dongariSearch text-center relative my-7">
                    <input type="text" className="w-9/12 p-1" />
                    <FaSearch color="#F5B3BA" size='23' className="searchIcon absolute" />
                </div>

                <div>
                    {college.map((col, idx) => {
                        return (
                            <div key={idx} className="last">
                                <div className="OA college text-center mt-10">{col}</div>
                                {dongari.map((item, index) => {
                                    const key = `${item.department}_${index}`;
                                    return (
                                        <div key={key}>
                                            {col === item.college &&
                                                <Department department={item.department} explain={item.explain} icon={item.icon} />}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Dongari;