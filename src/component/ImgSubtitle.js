const ImgSubtitle = ({ character, title, direction, addsize }) => {
    return (
        <div className="Subtitle OA text-center flex justify-center my-6">
            <div className={['shadow-md', "py-1", "relative", `${character}_color`, 'flex', 'items-center'].join(' ')}>
                <img className={["absolute", "w-14", `${direction}`].join(' ')} src={process.env.PUBLIC_URL + `assets/character/${character}.png`} alt="img" />
                <span>
                    <img className={`${addsize ? 'px-5 mb-1' : 'px-9'} ${title === 'neighbor/sangsangUniv' ? 'ml-2' : ''}`} src={process.env.PUBLIC_URL + `assets/${title}.png`} alt="LogoImg" />
                </span>
            </div>
        </div>
    )
}

export default ImgSubtitle;