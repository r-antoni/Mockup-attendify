import { Outlet } from "react-router-dom";
import Sidebar from "../Fragments/Sidebar";
import Navbar from "../Fragments/Navbar";

const RootLayout = () => {
    return (
        <div className="bg-primary max-h-screen w-[100%] overflow-hidden">
            <div className="border-b-2">
                <Navbar />
            </div>
            <div className="flex">
                <div>
                    <Sidebar/>
                </div>
                <div className="container mx-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default RootLayout;