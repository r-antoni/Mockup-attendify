const Input = (props) => {
    const{name, placeholder} = props
    return ( 
        <div className="flex flex-col gap-2 text-sm">
            <label className="block text-title" htmlFor={name}>{name}</label>
            <input className="text-sm w-full border border-slate-200 rounded px-5 py-2 placeholder:opacity-40" type="text" placeholder={placeholder}/>
        </div>
    );
}

export default Input;