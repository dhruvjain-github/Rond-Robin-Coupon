import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const API_BASE = "http://localhost:5000/api/admin";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(`${API_BASE}/login`, { username, password });
      localStorage.setItem("adminToken", data.token);
      toast.success("Login successful!");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Admin Login</h1>
      <input type="text" placeholder="Username" className="border p-2 m-2"
        value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 m-2"
        value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">
        Login
      </button>
      <ToastContainer />
    </div>
  );
}
