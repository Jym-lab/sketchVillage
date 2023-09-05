const SwitchBtn = ({ character, title }) => {
    return (
        <div className="SwitchBtn OA">
            <button className={['text-xl', "border-b-4", "pb-2", "px-4", 'mx-2', 'my-5', `${character}_color`].join(' ')}>{title}</button>
        </div>
    )
}

export default SwitchBtn;