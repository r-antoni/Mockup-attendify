import AttendanceContent from "../components/Fragments/AttendanceContent";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const Attendance = () => {
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
                    <AttendanceContent />
                </div>
            </div>
        </div>
    );
}

export default Attendance;