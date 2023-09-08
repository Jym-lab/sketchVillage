const PresentElement = ({ img, grade, name }) => {
    return (
        <div className="PresentElement mb-8">
            <div className="flex flex-col items-center justify-center h-44 flex-shrink m-2">
                <img className='grow w-10/12' src={process.env.PUBLIC_URL + `assets/present/${img}.png`} alt="" />
                <span className="mt-2 text-sm font-bold text-green-700">{grade}</span>
                <span className="mt-1 text-md text-gray-700">{name}</span>
            </div>
        </div>
    )
}

export default PresentElement;