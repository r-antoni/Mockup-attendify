import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import LoginPage from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Attendance from "./components/pages/Attendance";
import Report from "./components/pages/Report";
import RootLayout from "./components/Layout/RootLayout";
import AuthLayout from "./components/Layout/AuthLayout";
import NotFound from "./components/pages/NotFound"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<AuthLayout />}>
                <Route index element={<LoginPage />}/>
            </Route>
            <Route path="/" element={<RootLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="attendance" element={<Attendance />}/>
                <Route path="report" element={<Report />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

const App = () => {
    
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;