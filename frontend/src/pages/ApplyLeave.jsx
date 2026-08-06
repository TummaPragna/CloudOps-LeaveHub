import { useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

export default function ApplyLeave() {

    const navigate = useNavigate();

    const email = localStorage.getItem("email");

    const [leaveType, setLeaveType] = useState("SICK");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [reason, setReason] = useState("");

    const applyLeave = async () => {

        try {

            await api.post("/leave/apply", {

                email,
                leaveType,
                startDate,
                endDate,
                reason

            });

            toast.success("Leave Applied Successfully");

            setLeaveType("SICK");
            setStartDate("");
            setEndDate("");
            setReason("");

            setTimeout(() => {

                navigate("/my-leaves");

            }, 1000);

        }

        catch (err) {

            console.log(err);

            toast.error("Failed to Apply Leave");

        }

    };

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="content">

                <h1>Apply Leave</h1>

                <p
                    style={{
                        marginBottom: "20px",
                        color: "#2563eb",
                        fontWeight: "600"
                    }}
                >
                    👤 Logged in as: {email}
                </p>

                <div
                    className="card"
                    style={{
                        maxWidth: "650px"
                    }}
                >

                    <label style={{ fontWeight: "600" }}>
                        Leave Type
                    </label>

                    <select
                        value={leaveType}
                        onChange={(e) => setLeaveType(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginTop: "8px",
                            marginBottom: "18px"
                        }}
                    >

                        <option value="SICK">SICK</option>
                        <option value="CASUAL">CASUAL</option>
                        <option value="EARNED">EARNED</option>

                    </select>

                    <label style={{ fontWeight: "600" }}>
                        Start Date
                    </label>

                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginTop: "8px",
                            marginBottom: "18px"
                        }}
                    />

                    <label style={{ fontWeight: "600" }}>
                        End Date
                    </label>

                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginTop: "8px",
                            marginBottom: "18px"
                        }}
                    />

                    <label style={{ fontWeight: "600" }}>
                        Reason
                    </label>

                    <textarea
                        rows="4"
                        placeholder="Enter leave reason..."
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginTop: "8px",
                            marginBottom: "20px"
                        }}
                    />

                    <button
                        className="hero-btn"
                        onClick={applyLeave}
                    >
                        Apply Leave
                    </button>

                </div>

            </div>

        </div>

    );

}