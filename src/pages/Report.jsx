import ReportContent from "../components/Fragments/ReportContent";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const Report = () => {
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
                    <ReportContent />
                </div>
            </div>
        </div>
    );
}

export default Report;