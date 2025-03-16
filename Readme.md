# 🏷️ Coupon Management System

A **full-stack** web application for managing discount coupons. It allows admins to **create, update, delete, and fetch coupons** using a **MERN stack (MongoDB, Express.js, React, Node.js)**.

---

## ✨ Features
- 🔐 **Admin Authentication** (Login & Secure Access)
- 🎟️ **Create, Edit, Delete, and View Coupons**
- 📦 **MongoDB for Data Storage**
- ⚡ **REST API with Express.js**
- 🎨 **React Frontend with Axios for API Calls**
- 🔄 **State Management with React Hooks**

---

## 🚀 Tech Stack
| Technology  | Usage |
|-------------|------------------------------------------------|
| **MongoDB** | Database to store coupons & admin data |
| **Express.js** | Backend framework to create REST API |
| **React.js** | Frontend UI to manage coupons |
| **Node.js** | Backend runtime for Express |
| **Axios** | Fetching API requests from the frontend |
| **JWT** | User authentication for admin login |
| **bcrypt** | Password hashing for security |
| **Mongoose** | ODM for MongoDB operations |
| **Tailwind CSS** | UI styling |

---

## 📂 Folder Structure
```
coupon/
│── backend/          # Express.js backend
│   ├── models/       # Mongoose models (Admin, Coupon)
│   ├── routes/       # API routes
│   ├── controllers/  # Business logic
│   ├── index.js      # Entry point
│── frontend/         # React.js frontend
│   ├── src/
│   │   ├── components/  # React Components
│   │   ├── pages/       # Main pages
│   │   ├── App.js       # Main App file
│   ├── package.json     # Dependencies
│── .env                 # Environment variables
│── README.md            # Project documentation
```

---

## 🔧 Setup Guide

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/coupon-management.git
cd coupon-management
```

### **2️⃣ Setup Backend**
1. Move into the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/test
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Start the backend:
   ```bash
   node index.js
   ```

---

### **3️⃣ Setup Frontend**
1. Move into the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm run dev  # For Vite
   ```

---

## 🔥 How It Works
### **1️⃣ Admin Login**
- The admin logs in using their credentials.
- JWT authentication is used for secure login.

### **2️⃣ Coupon Management**
- Admins can **create** coupons.
- Coupons have attributes like `code`, `discount`, `expiry date`.
- Coupons can be **edited or deleted**.

### **3️⃣ API Endpoints**
| Method | Endpoint | Description |
|--------|----------|------------|
| `POST` | `/api/admin/login` | Admin Login |
| `GET` | `/api/admin/coupons` | Get all coupons |
| `POST` | `/api/admin/coupons` | Create a new coupon |
| `PUT` | `/api/admin/coupons/:id` | Update a coupon |
| `DELETE` | `/api/admin/coupons/:id` | Delete a coupon |

---

## 🛠️ Troubleshooting

### **1️⃣ MongoDB Connection Error**
- If you see **MongooseServerSelectionError**, go to MongoDB Atlas and **whitelist your IP**.

### **2️⃣ Frontend Not Loading Data**
- Check if the backend is running (`node index.js`).
- Verify API URL in `frontend/src/config.js`.

---

## 🎯 Future Enhancements
- ✅ **User-side coupon redemption**
- ✅ **Pagination & search for coupons**
- ✅ **Coupon analytics dashboard**

---

## 📌 Contributors
- **Dhruv Jain** - [GitHub](https://github.com/dhruvjain-github)
  
---
