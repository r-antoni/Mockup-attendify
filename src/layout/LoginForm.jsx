import InputButton from "../components/Elements/InputButton";
import InputText from "../components/Elements/InputText"
import Button from "../components/Elements/Button"

const LoginForm = () => {
    return (
        <div className="flex flex-col gap-10 justify-center min-h-screen pr-32">
            <div className="flex gap-10">
                <InputButton name="Teacher" textcolor="text-secondary" background="bg-primary" border=" border border-secondary" />
                <InputButton name="Admin" textcolor="text-secondary" background="bg-primary" border="border border-secondary" />
            </div>
            <div className="flex flex-col gap-6">
                <InputText name="Email" />
                <InputText name="Password" />
            </div>
            <div className="flex flex-col items-start gap-5">
                <div className="flex items-center text-sm gap-2">
                    <input className="rounded" type="checkbox" /> <span>Remember me</span>
                </div>
                <Button text="Sign in" textcolor ="text-white" background="bg-secondary" />
                <a className="text-slate-500 text-xs" href="/">Forgot Password ?</a>
                <p className="text-sm">Don't have an account? <a className="text-blue-400" href="/">Register Here</a></p>
            </div>
        </div>
        
    );
}

export default LoginForm;