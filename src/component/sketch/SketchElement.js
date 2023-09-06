const SketchElement = ({ logo, tags, img, right }) => {
    return (
        <div className='SketchElement Element last'>
            <div className={`box flex justify-evenly rounded-2xl p-3 ${right ? 'flex-row-reverse' : ''}`}>
                <div>
                    <img width="130" src={process.env.PUBLIC_URL + `assets/${logo}.png`} alt="logoimg" />
                    <p className={`mt-3 ${right ? 'mr-3 text-right' : 'ml-3'}`}>
                        {tags.map((tag) => {
                            return (
                                <>
                                    <span>{tag}</span><br />
                                </>
                            )
                        })}
                    </p>
                </div>
                <img width="150" src={process.env.PUBLIC_URL + `assets/${img}.png`} alt="" />
            </div>
        </div>
    )
}

export default SketchElement;