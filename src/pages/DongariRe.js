import Department from "../component/dongari/Department";
import Nav from "../component/nav/Nav";
import Subtitle from "../component/Subtitle";
import { FaSearch } from "react-icons/fa";
import dongari from '../json/dongari.json';
import { useEffect, useState } from "react";

const DongariRe = () => {
    const college = ['전체', '기독분과', '문화분과', '예능분과', '체능분과', '학술,봉사'];
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    })

    const [filterDongari, setFilterDonagari] = useState(dongari);
    const [searchText, setSearchText] = useState('');

    const handleFilterCollege = (e) => {
        if (e.target.innerText === '전체') {
            setFilterDonagari(dongari);
        } else {
            const result = dongari.filter(item => item.college === e.target.innerText);
            setFilterDonagari(result);
        }
    }

    useEffect((e) => {
        const result = dongari.filter(item => {
            return Object.values(item).some(value =>
                typeof value === 'string' && value.includes(searchText)
            );
        });
        setFilterDonagari(result);
    }, [searchText])

    return (
        <div className="Dongari Backcolor">
            <Nav />
            {/* 부스 배치도 */}
            <div className="pt-14">
                <Subtitle character={'dongari'} title={"부스 배치도"} direction={'left'} />
                <div className="w-11/12 m-auto">
                    <img src={process.env.PUBLIC_URL + `assets/Logo/Logo.png`} alt="부스 배치도" />
                </div>
            </div>


            {/* 부스 소개 */}
            <div>
                <Subtitle character={'dongari'} title={"부스 소개"} direction={'right'} />
                <div className="dongariSearch text-center relative my-7 z-10">
                    <input
                        type="text"
                        className="w-9/12 p-1"
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }} />
                    <FaSearch color="#F5B3BA" size='23' className="searchIcon absolute" />
                </div>

                <div>
                    <div className="grid grid-cols-3">
                        {college.map((item, idx) => {
                            return (
                                <button className="OA college text-center" onClick={
                                    (e) => { handleFilterCollege(e) }}>{item}</button>
                            )
                        })}
                    </div>

                    {filterDongari.map((item, idx) => {
                        return (
                            <>
                                <Department department={item.department} menu={item.menu} goods={item.goods} program={item.program} icon={item.icon} />
                            </>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default DongariRe;  