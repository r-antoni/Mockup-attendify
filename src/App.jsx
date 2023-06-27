import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Report from "./pages/Report";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import NotFound from "./pages/NotFound";

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