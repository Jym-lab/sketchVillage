const SwitchBtn = ({ character, title, onActive, setOnActive }) => {
    const isActive = onActive === title

    const handleBtn = () => {
        setOnActive(title);
    }
    return (
        <button
            onClick={handleBtn}
            className={['SwitchBtn', `${character}_color${isActive ? ' ' : '_off'}`, 'text-xl', "border-b-4", "pb-2", "px-4", 'mx-2', 'my-5'].join(' ')} >
            {title}
        </button >
    )
}

export default SwitchBtn;