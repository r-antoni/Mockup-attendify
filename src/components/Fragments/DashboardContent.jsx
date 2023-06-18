import DashboardItems from "../Elements/DashboardItems";
import PageTitle from "../Elements/PageTitle";

const DashboardContent = () => {
    return (
        <div>
            <PageTitle pageName1="Home /" pageName2 ="Dashboard"/>
            <div className="flex gap-10">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-10">
                        <DashboardItems title="Present" time="| Today"/>
                        <DashboardItems title="Absent" time="| Today"/>
                        <DashboardItems title="Attendance" time="| This Month"/>
                    </div>
                    <div className="flex flex-col bg-white rounded-md">
                        <DashboardItems title="Reports" time="| Today" size="w-80" visibility="hidden" />
                        <img src="https://freeimghost.net/images/2023/06/18/report2.png" alt="report2.png" border="0"></img>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col bg-white rounded-md">
                        <DashboardItems title="Attendance Report" time="| This Month" size="w-80" visibility="hidden"/>
                        <img src="https://i.ibb.co/6Pd4gg5/image1-2.png" alt="image1-2" border="0" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardContent;