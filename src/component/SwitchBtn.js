const SwitchBtn = ({ character, title, onActive ,setOnActive }) => {
    const isActive = onActive === title
    return (
        <button onClick={() => setOnActive(title)} className={['text-xl', "border-b-4", "pb-2", "px-4", 'mx-2', 'my-5', `${character}_color${isActive ? '' : '_off'}`].join(' ')}>{title}</button>
    )
}

export default SwitchBtn;