import { useNavigate } from "react-router-dom";
import CouponManagement from "./CouponManagement";
import AbuseMonitoring from "./AbuseMonitoring";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin"); 
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2">Logout</button>
      <CouponManagement />
      <AbuseMonitoring />
    </div>
  );
}
