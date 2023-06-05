import { Route, Routes } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import WelcomePage from "../WelcomePage/WelcomePage";
import DashboardPage from "../DashboardPage/DashboardPage";

const AppRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/welcome" element={<WelcomePage/>}/>
            <Route path="/dashboard" element={<DashboardPage/>}/>
        </Routes>
     );
}
 
export default AppRoutes;