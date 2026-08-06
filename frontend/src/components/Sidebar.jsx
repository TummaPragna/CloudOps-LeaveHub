import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    const logout = () => {

        localStorage.clear();

        navigate("/");

    };

    return (

        <div className="sidebar">

            <div>

                <h2>🌿 LeaveHub</h2>

                <hr />

                {
                    role === "EMPLOYEE" && (
                        <>
                            <Link to="/dashboard">
                                🏠 Dashboard
                            </Link>

                            <Link to="/apply">
                                📝 Apply Leave
                            </Link>

                            <Link to="/my-leaves">
                                📅 My Leaves
                            </Link>
                        </>
                    )
                }

                {
                    role === "MANAGER" && (
                        <>
                            <Link to="/manager">
                                🏠 Dashboard
                            </Link>

                            <Link to="/manager">
                                📋 Leave Requests
                            </Link>
                        </>
                    )
                }

            </div>

            <button
                className="logout-btn"
                onClick={logout}
            >
                🚪 Logout
            </button>

        </div>

    );

}