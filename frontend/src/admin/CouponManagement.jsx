import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = "http://localhost:5000/api/admin";

export default function CouponManagement() {
  const [coupons, setCoupons] = useState([]);
  const [code, setCode] = useState("");

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    const token = localStorage.getItem("adminToken");
    const { data } = await axios.get(`${API_BASE}/coupons`, { headers: { Authorization: `Bearer ${token}` } });
    setCoupons(data);
  };

  const addCoupon = async () => {
    const token = localStorage.getItem("adminToken");
    await axios.post(`${API_BASE}/coupon`, { code }, { headers: { Authorization: `Bearer ${token}` } });
    fetchCoupons();
  };

  const deleteCoupon = async (id) => {
    const token = localStorage.getItem("adminToken");
    await axios.delete(`${API_BASE}/coupon/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    fetchCoupons();
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Coupon Management</h2>
      <input type="text" placeholder="Coupon Code" value={code} onChange={(e) => setCode(e.target.value)}
        className="border p-2 m-2" />
      <button onClick={addCoupon} className="bg-green-500 text-white px-4 py-2">Add Coupon</button>
      <ul>
        {coupons.map((coupon) => (
          <li key={coupon._id}>
            {coupon.code} - {coupon.isClaimed ? "Claimed" : "Available"}
            <button onClick={() => deleteCoupon(coupon._id)} className="bg-red-500 text-white px-2 py-1 ml-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
