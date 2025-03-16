import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";

const API_BASE = "http://localhost:5000/api";

function ClaimCoupon() {
  const [coupon, setCoupon] = useState("");

  const claimCoupon = async () => {
    try {
      const res = await axios.post(`${API_BASE}/coupons/claim`);
      setCoupon(res.data.message);
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error claiming coupon");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Claim Your Coupon</h1>
      <button onClick={claimCoupon} className="bg-blue-500 text-white px-4 py-2 mt-4">
        Claim Coupon
      </button>
      {coupon && <p className="mt-4">{coupon}</p>}
      <ToastContainer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClaimCoupon />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
