import "./../styles/auth.css";
import { useState } from "react";
import api from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EmployeeLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {

        try {

            const response = await api.post("/auth/login", {

                email,
                password

            });
            console.log(response.data);

            if (response.data.role !== "EMPLOYEE") {

                toast.error("Please use Manager Login");

                return;

            }

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);
            localStorage.setItem("email", email);

            toast.success("Employee Login Successful");

            navigate("/dashboard");

        }

        catch {

            toast.error("Invalid Credentials");

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-left">

                <h1>🌿 LeaveHub</h1>

                <h2>Smart Leave Management</h2>

                <p>
                    Apply, manage and track employee leave requests
                    with an easy and secure workflow.
                </p>

                <div className="features">

                    <div className="feature">
                        📝 Easy Leave Application
                    </div>

                    <div className="feature">
                        📅 Real-Time Leave Tracking
                    </div>

                    <div className="feature">
                        ✅ Fast Manager Approval
                    </div>

                </div>

            </div>

            <div className="auth-right">

                <div className="login-box">

                    <h2>Employee Login</h2>

                    <p>
                        Sign in to your employee account
                    </p>

                    <input
                        type="email"
                        placeholder="Employee Email"
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