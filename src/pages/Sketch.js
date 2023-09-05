import SwitchBtn from "../component/SwitchBtn";

const Sketch = () => {
    return (
        <>
            <div className="flex justify-center">
                <SwitchBtn character={'sketch'} title={'매표소'} />
                <SwitchBtn character={'sketch'} title={'본부'} />
            </div>

            <div className="flex justify-center">
                <SwitchBtn character={'neighbor'} title={'부스'} />
                <SwitchBtn character={'neighbor'} title={'협찬'} />
                <SwitchBtn character={'neighbor'} title={'학생부스'} />
            </div>

            <div className="flex justify-center">
                <SwitchBtn character={'joy'} title={'장기자랑'} />
                <SwitchBtn character={'joy'} title={'동아리'} />
            </div>
        </>
    )
}

export default Sketch;