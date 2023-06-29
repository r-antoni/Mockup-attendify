const Button = (props) => {
    const {children, onClick, type="button"} = props
    return (
    <button className={` bg-secondary text-white rounded-lg px-5 py-2`} type={type} onClick={()=> onClick()}>
        {children}
    </button>
    );
}

export default Button