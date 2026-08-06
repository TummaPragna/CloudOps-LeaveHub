import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../api/api";
import { toast } from "react-toastify";
import "../styles/dashboard.css";

export default function ManagerDashboard() {

    const [leaves, setLeaves] = useState([]);

    const loadLeaves = async () => {

        try {

            const response = await api.get("/manager/pending");

            setLeaves(response.data);

        } catch (err) {

            console.log(err);

            toast.error("Unable to load leaves");

        }

    };

    useEffect(() => {

        loadLeaves();

    }, []);

    const approveLeave = async (id) => {

        try {

            await api.post("/manager/approve", {

                leaveId: id,
                status: "APPROVED"

            });

            toast.success("Leave Approved");

            loadLeaves();

        } catch (err) {

            console.log(err);

            toast.error("Approval Failed");

        }

    };

    const rejectLeave = async (id) => {

        try {

            await api.post("/manager/approve", {

                leaveId: id,
                status: "REJECTED"

            });

            toast.success("Leave Rejected");

            loadLeaves();

        } catch (err) {

            console.log(err);

            toast.error("Rejection Failed");

        }

    };

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="content">

                <h1>👔 Manager Dashboard</h1>

                <div className="card">

                    <table width="100%" cellPadding="12">

                        <thead>

                            <tr>

                                <th>ID</th>
                                <th>Employee</th>
                                <th>Leave Type</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Reason</th>
                                <th>Status</th>
                                <th>Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                leaves.map((leave) => (

                                    <tr key={leave.id}>

                                        <td>{leave.id}</td>

                                        <td>{leave.employee.fullName}</td>

                                        <td>{leave.leaveType}</td>

                                        <td>{leave.startDate}</td>

                                        <td>{leave.endDate}</td>

                                        <td>{leave.reason}</td>

                                        <td>{leave.status}</td>

                                        <td>

                                            <button
                                                onClick={() => approveLeave(leave.id)}
                                                style={{
                                                    background: "green",
                                                    color: "white",
                                                    border: "none",
                                                    padding: "8px 12px",
                                                    borderRadius: "5px",
                                                    cursor: "pointer",
                                                    marginRight: "10px"
                                                }}
                                            >
                                                Approve
                                            </button>

                                            <button
                                                onClick={() => rejectLeave(leave.id)}
                                                style={{
                                                    background: "red",
                                                    color: "white",
                                                    border: "none",
                                                    padding: "8px 12px",
                                                    borderRadius: "5px",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                Reject
                                            </button>

                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}