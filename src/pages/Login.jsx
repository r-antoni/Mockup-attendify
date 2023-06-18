import LoginText from "../components/Fragments/LoginText";
import Navbar from "../layout/Navbar";
import LoginForm from "../layout/LoginForm";
const LoginPage = () => {
    return (
        <div>
            <div className="fixed">
                <Navbar visibility="hidden"/>
            </div>
            <div className="bg-primary flex justify-center items-center">
                <div>
                    <LoginText />
                </div>
                <div>
                    <LoginForm />
                </div>
            </div>
        </div>
        
    );
}

export default LoginPage;