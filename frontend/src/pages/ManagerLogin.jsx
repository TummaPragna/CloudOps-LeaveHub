import "./../styles/auth.css";
import { useState } from "react";
import api from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ManagerLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {

        try {

            const response = await api.post("/auth/login", {

                email,
                password

            });

            if (response.data.role !== "MANAGER") {

                toast.error("Please use Employee Login");

                return;

            }

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);

            toast.success("Manager Login Successful");

            navigate("/manager");

        }

        catch {

            toast.error("Invalid Credentials");

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-left">

                <h1>🌿 LeaveHub</h1>

                <h2>Manager Portal</h2>

                <p>
                    Review employee leave requests,
                    approve or reject applications,
                    and manage your organization's leave system efficiently.
                </p>

                <div className="features">

                    <div className="feature">
                        👥 Manage Employee Leaves
                    </div>

                    <div className="feature">
                        ✅ Approve & Reject Requests
                    </div>

                    <div className="feature">
                        📊 View Leave Records
                    </div>

                </div>

            </div>

            <div className="auth-right">

                <div className="login-box">

                    <h2>Manager Login</h2>

                    <p>
                        Sign in to your manager account
                    </p>

                    <input
                        type="email"
                        placeholder="Manager Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button onClick={login}>
                        Login
                    </button>

                    <div className="links">

                        <Link to="/register">
                            Don't have an account? Register
                        </Link>

                        <Link to="/">
                            ← Back to Home
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}