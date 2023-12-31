import { Outlet } from "react-router-dom";
import LoginText from "../Fragments/LoginText";
import Navbar from "../Fragments/Navbar";

const AuthLayout = () => {
    return (
        <>
            <div className="fixed">
                <Navbar visibility="hidden"/>
            </div>
            <div className="bg-primary flex justify-center items-center">
                <div>
                    <LoginText />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default AuthLayout;