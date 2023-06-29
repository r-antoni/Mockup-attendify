import InputButton from "../Elements/InputButton";
import InputText from "../Elements/InputText"
import Button from "../Elements/Button";


const LoginForm = () => {
    const handleLogin =(event)=>{
        event.preventDefault();
        localStorage.setItem("email", event.target.email.value);
        localStorage.setItem("password", event.target.password.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        window.location.href ="/dashboard";
    }
    return (
        <form className="flex flex-col gap-10 justify-center min-h-screen pr-32" onSubmit={handleLogin}>
            <div className="flex gap-10">
                <InputButton name="Teacher" textcolor="text-secondary" background="bg-primary" border=" border border-secondary" />
                <InputButton name="Admin" textcolor="text-secondary" background="bg-primary" border="border border-secondary" />
            </div>
            <div className="flex flex-col gap-6">
                <InputText name="email" />
                <InputText name="password" />
            </div>
            <div className="flex flex-col items-start gap-5">
                <div className="flex items-center text-sm gap-2">
                    <input className="rounded" type="checkbox" /> <span>Remember me</span>
                </div>
                <Button className="bg-secondary text-white rounded-lg px-5 py-2" type="submit">Sign In</Button>
                <a className="text-slate-500 text-xs" href="/">Forgot Password ?</a>
                <p className="text-sm">Don't have an account? <a className="text-blue-400" href="/">Register Here</a></p>
            </div>
        </form>
        
    );
}

export default LoginForm;