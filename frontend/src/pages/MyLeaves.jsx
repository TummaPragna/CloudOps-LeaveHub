import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../api/api";
import "../styles/dashboard.css";

export default function MyLeaves() {

    const email = localStorage.getItem("email");

    const [leaves, setLeaves] = useState([]);

    useEffect(() => {

        loadLeaves();

    }, []);

    const loadLeaves = async () => {

        try {

            const response = await api.get("/leave/my-leaves", {

                params: {

                    email

                }

            });

            setLeaves(response.data);

        }

        catch(err){

            console.log(err);

        }

    };

    return(

        <div className="dashboard">

            <Sidebar/>

            <div className="content">

                <h1>My Leave History</h1>

                <p
                    style={{
                        color:"#2563eb",
                        fontWeight:"600",
                        marginBottom:"25px"
                    }}
                >
                    👤 {email}
                </p>

                <div className="card">

                    <table
                        width="100%"
                        cellPadding="14"
                    >

                        <thead>

                            <tr>

                                <th>ID</th>

                                <th>Leave Type</th>

                                <th>Start Date</th>

                                <th>End Date</th>

                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                        {

                            leaves.length===0 ?

                            (

                                <tr>

                                    <td
                                        colSpan="5"
                                        style={{
                                            textAlign:"center",
                                            padding:"40px"
                                        }}
                                    >

                                        No Leave Requests Found

                                    </td>

                                </tr>

                            )

                            :

                            (

                                leaves.map((leave)=>(

                                    <tr key={leave.id}>

                                        <td>{leave.id}</td>

                                        <td>{leave.leaveType}</td>

                                        <td>{leave.startDate}</td>

                                        <td>{leave.endDate}</td>

                                        <td>

                                            <span

                                                style={{

                                                    padding:"8px 14px",

                                                    borderRadius:"20px",

                                                    color:"white",

                                                    background:

                                                    leave.status==="APPROVED"

                                                    ?

                                                    "#22c55e"

                                                    :

                                                    leave.status==="REJECTED"

                                                    ?

                                                    "#ef4444"

                                                    :

                                                    "#f59e0b"

                                                }}

                                            >

                                                {leave.status}

                                            </span>

                                        </td>

                                    </tr>

                                ))

                            )

                        }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}