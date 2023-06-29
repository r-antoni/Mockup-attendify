const Input = (props) => {
    const{name} = props
    return ( 
        <div className="flex flex-col gap-2 text-sm">
            <label className="block text-title uppercase text-xs" htmlFor={name}>{name}</label>
            <input className="text-sm w-full border border-slate-200 rounded px-5 py-2" type={name} name={name} id={name}/>
        </div>
    );
}

export default Input;