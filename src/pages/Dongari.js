import Subtitle from "../component/Subtitle";

const Dongari = () => {
    return (
        <div>
            <Subtitle character={'sketch'} title={'배부물품'} direction={'left'} />
            <br></br>
            <Subtitle character={'sketch'} title={'프로그램'} direction={'right'} />
            <br></br>
            <Subtitle character={'dongari'} title={'프로그램'} direction={'left'} />
            <br></br>
            <Subtitle character={'dongari'} title={'프로그램'} direction={'right'} />
            <br></br>
            <Subtitle character={'neighbor'} title={'도로시팩토리'} direction={'left'} />
            <br></br>
            <Subtitle character={'joy'} title={'Time Table'} direction={'left'} />
            <br></br>
            <Subtitle character={'game'} title={'손펀치, 발펀치'} direction={'right'} />
        </div>
    )
}

export default Dongari;