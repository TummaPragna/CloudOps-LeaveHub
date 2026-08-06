import "./../styles/login.css";
import { useState } from "react";
import api from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("EMPLOYEE");

    const register = async () => {

        try {

            await api.post("/auth/register", {

                fullName,
                email,
                password,
                role

            });

            toast.success("Registration Successful");

            if(role==="EMPLOYEE"){

                navigate("/employee-login");

            }

            else{

                navigate("/manager-login");

            }

        }

        catch(err){

            console.log(err);

            toast.error("Registration Failed");

        }

    };

    return (

        <div className="login-container">

            <div className="login-card">

                <h1>📝 Register</h1>

                <input
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e)=>setFullName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <select
                    value={role}
                    onChange={(e)=>setRole(e.target.value)}
                >

                    <option value="EMPLOYEE">
                        Employee
                    </option>

                    <option value="MANAGER">
                        Manager
                    </option>

                </select>

                <br/><br/>

                <button onClick={register}>

                    Register

                </button>

                <div className="register-link">

                    <br/>

                    <Link to="/">
                        ← Back to Home
                    </Link>

                </div>

            </div>

        </div>

    );

}