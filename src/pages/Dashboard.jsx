import DashboardContent from "../components/Fragments/DashboardContent";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const Dashboard = () => {
    return (
        <div className="bg-primary max-h-screen w-[100%] overflow-hidden">
            <div className="border-b-2">
                <Navbar />
            </div>
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className="container">
                    <DashboardContent />
                </div>
            </div>
        </div>
        
    );
}

export default Dashboard;