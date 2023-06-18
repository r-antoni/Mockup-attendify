const Button = (props) => {
    const {text, textcolor, background} = props
    return (
    <button className={` ${background} ${textcolor} rounded-lg px-5 py-2`} type="submit">
        {text}
    </button>
    );
}

export default Button