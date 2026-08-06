import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EmployeeLogin from "./pages/EmployeeLogin";
import ManagerLogin from "./pages/ManagerLogin";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ApplyLeave from "./pages/ApplyLeave";
import MyLeaves from "./pages/MyLeaves";
import ManagerDashboard from "./pages/ManagerDashboard";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/employee-login" element={<EmployeeLogin />} />

                <Route path="/manager-login" element={<ManagerLogin />} />

                <Route path="/register" element={<Register />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/apply" element={<ApplyLeave />} />

                <Route path="/my-leaves" element={<MyLeaves />} />

                <Route path="/manager" element={<ManagerDashboard />} />

            </Routes>

        </BrowserRouter>

    );

}

export default App;