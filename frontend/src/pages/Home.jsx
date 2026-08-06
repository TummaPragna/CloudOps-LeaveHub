import "./../styles/home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    return (

        <div className="home">

            <div className="overlay">

                <nav>

                    <h2>🌿 LeaveHub</h2>

                    <div>

                        <a href="#features">Features</a>

                        <a href="#about">About</a>

                        <a href="#contact">Contact</a>

                    </div>

                </nav>

                <div className="hero">
<p className="small-title">
    Employee Leave Management Platform
</p>

<h1>
    Smart Leave Management System
</h1>

                    <p className="description">
                        Apply leave online, track requests and receive instant
                        manager approvals — all in one place.
                    </p>

                    <div className="features">

                        <p>✔ Apply Leave Online</p>

                        <p>✔ Track Leave Status</p>

                        <p>✔ Instant Manager Approval</p>

                    </div>

                    <button
                        className="start-btn"
                        onClick={() => navigate("/employee-login")}
                    >
                        Get Started →
                    </button>

                </div>

            </div>

        </div>

    );

}