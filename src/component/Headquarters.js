import SketchElement from "./SketchElement";
import Subtitle from "./Subtitle";

const Headquarters = () => {
    const photoTag = ['#친구랑네컷', '#추억네컷', '#동페네컷'];
    const capsuleTag = ['#소니헤드셋', '#한우세트', '#Y2K토이카메라'];
    const treeTag = ['#미션수행', '#소원을걸어봐'];

    return (
        <div className="Headquarters slide-in">
            <Subtitle character={'sketch'} title={'프로그램'} direction={'left'} />

            <SketchElement logo={'headquarters/photoLogo'} tags={photoTag} img={'headquarters/photo'} right={false} />
            <SketchElement logo={'headquarters/capsuleLogo'} tags={capsuleTag} img={'headquarters/capsule'} right={true} />
            <SketchElement logo={'headquarters/treeLogo'} tags={treeTag} img={'headquarters/tree'} right={false} />
        </div >
    )
}

export default Headquarters;