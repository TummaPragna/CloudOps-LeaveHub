import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import "../styles/dashboard.css";

export default function Dashboard() {

    const navigate = useNavigate();

    const email = localStorage.getItem("email");

    const [stats, setStats] = useState({
        total: 0,
        pending: 0,
        approved: 0,
        rejected: 0
    });

    useEffect(() => {

        loadStats();

    }, []);

    const loadStats = async () => {

        try {

            const response = await api.get("/leave/dashboard-stats", {
                params: { email }
            });

            setStats(response.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="content">

                <div className="hero-box">

                    <div>

                        <h5>🌿 Welcome Back</h5>

                        <h1>Employee Dashboard</h1>

                        <p>
                            Manage your leave requests quickly and easily from one place.
                        </p>

                    </div>

                    <button
                        className="hero-btn"
                        onClick={() => navigate("/apply")}
                    >
                        Apply Leave →
                    </button>

                </div>

                <div className="stats">

                    <div className="stat-card">

                        <h3>Total Leaves</h3>

                        <h2>{stats.total}</h2>

                    </div>

                    <div className="stat-card">

                        <h3>Pending</h3>

                        <h2>{stats.pending}</h2>

                    </div>

                    <div className="stat-card">

                        <h3>Approved</h3>

                        <h2>{stats.approved}</h2>

                    </div>

                    <div className="stat-card">

                        <h3>Rejected</h3>

                        <h2>{stats.rejected}</h2>

                    </div>

                </div>

                <div className="activity-card">

                    <h2>Recent Activity</h2>

                    <ul>

                        <li>📋 Dashboard updates automatically.</li>

                        <li>✅ Approved leaves appear instantly.</li>

                        <li>⏳ Pending requests are counted live.</li>

                    </ul>

                </div>

            </div>

        </div>

    );

}