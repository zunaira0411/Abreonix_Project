# 📦 Smart Inventory Tracker

> ### 🚀 A Full Stack Inventory Management System built with **React.js, Node.js, Express.js & PostgreSQL**

![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-v2.0-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=for-the-badge&logo=postgresql)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

# 📖 Project Overview

Smart Inventory Tracker is a modern **Full Stack Inventory Management System** developed during my **Web Development Internship at Abreonix**.

The application is designed to simplify inventory operations by providing a centralized platform to manage products, suppliers, warehouses, inventory, purchase orders, reports, and user profiles.

Unlike a traditional frontend-only application, this project integrates a complete backend using **Node.js**, **Express.js**, and **PostgreSQL**, allowing secure authentication, real-time CRUD operations, RESTful APIs, database management, report generation, QR Code generation, and dashboard analytics.

The project follows a modular architecture, responsive design principles, and modern UI/UX practices to provide an efficient inventory management experience.

---

# 🎯 Project Objectives

The main objectives of this project are:

- Build a complete Full Stack Inventory Management System.
- Implement secure user authentication using JWT.
- Perform CRUD operations using PostgreSQL Database.
- Design responsive and user-friendly interfaces.
- Generate reports with CSV Export.
- Export Dashboard as PDF.
- Generate QR Codes for Products.
- Manage inventory with real-time database connectivity.
- Learn modern Full Stack development practices.

---

# ✨ Key Features

## 🏠 Home Module

- Responsive Landing Page
- Modern Navigation Bar
- Hero Section
- About Section
- Features Section
- Statistics Section
- Call-To-Action Section
- Mobile Responsive Design

---

## 🔐 Authentication Module

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Secure Logout
- Password Encryption
- Authentication Middleware

---

## 📊 Dashboard Module

- Welcome Banner
- Dashboard Statistics Cards
- Inventory Overview Chart
- Stock Distribution Chart
- Recent Orders
- Recent Activities
- Low Stock Alerts
- Top Selling Products
- Inventory Health Analysis
- Quick Action Buttons
- Dashboard PDF Export

---

## 📦 Product Management

- Add Product
- View Products
- Edit Product
- Delete Product
- Product Details Modal
- Search Products
- Category Filter
- Product Sorting
- Dynamic Stock Status
- QR Code Generation
- Barcode Support
- REST API Integration
- PostgreSQL Storage

---

## 🚚 Supplier Management

- Add Supplier
- View Suppliers
- Edit Supplier
- Delete Supplier
- View Supplier Details
- Search Suppliers
- PostgreSQL Integration
- REST API CRUD Operations

---

## 🏢 Warehouse Management

- Add Warehouse
- View Warehouses
- Edit Warehouse
- Delete Warehouse
- Warehouse Details
- Search Warehouses
- Backend CRUD Operations

---

## 📦 Inventory Management

- Add Inventory
- Update Inventory
- Delete Inventory
- Inventory Search
- Stock Status Management
- Real-Time Database Updates
- REST APIs

---

## 🛒 Purchase Order Module

- Create Purchase Orders
- Update Orders
- Delete Orders
- View Order Details
- Search Orders
- Order Status
- Backend Integration

---

## 📈 Reports & Analytics

- Dashboard Summary
- Reports Table
- Search Reports
- CSV Export
- Interactive Charts
- Analytics Dashboard
- Database Statistics

---

## 👤 Profile Module

- View User Profile
- Edit Profile
- Update Information
- PostgreSQL Storage
- Backend API Integration

---

# 🚀 Major Functionalities

- ✅ Full Stack Architecture
- ✅ Responsive UI
- ✅ REST API Integration
- ✅ PostgreSQL Database
- ✅ JWT Authentication
- ✅ Secure Login System
- ✅ CRUD Operations
- ✅ Search & Filter
- ✅ Dashboard Analytics
- ✅ QR Code Generation
- ✅ CSV Export
- ✅ PDF Export
- ✅ SweetAlert Confirmations
- ✅ Toast Notifications
- ✅ Modern UI/UX
- ✅ Responsive Design

---

# 🛠️ Technology Stack

## 🎨 Frontend

- React.js
- Vite
- JavaScript (ES6+)
- JSX
- CSS3
- React Router DOM
- Axios

---

## ⚙️ Backend

- Node.js
- Express.js
- REST APIs
- JWT Authentication
- bcrypt.js
- CORS
- dotenv

---

## 🗄️ Database

- PostgreSQL

---

## 📚 Libraries & Packages

### Frontend

- React Icons
- React Toastify
- SweetAlert2
- Chart.js
- React ChartJS 2
- Recharts
- html2canvas
- jsPDF
- File Saver
- QRCode.react

### Backend

- Express
- PostgreSQL (pg)
- JWT
- bcryptjs
- dotenv
- cors
- nodemon

---

# 🌟 Project Highlights

✔ Full Stack MERN-style Architecture (React + Node + PostgreSQL)

✔ Secure Authentication using JWT

✔ RESTful API Development

✔ PostgreSQL Database Integration

✔ Dynamic Dashboard

✔ Interactive Charts

✔ QR Code Generation

✔ CSV Report Export

✔ PDF Dashboard Export

✔ Responsive User Interface

✔ Complete CRUD Operations

✔ Modular Folder Structure

✔ Production Ready Architecture

---

# 📂 Project Structure

```text
Smart-Inventory-Tracker
│
├── backend
│   │
│   ├── config
│   │     └── db.js
│   │
│   ├── controllers
│   │     ├── authController.js
│   │     ├── productController.js
│   │     ├── supplierController.js
│   │     ├── warehouseController.js
│   │     ├── inventoryController.js
│   │     ├── purchaseOrderController.js
│   │     ├── reportController.js
│   │     └── profileController.js
│   │
│   ├── middleware
│   │     └── authMiddleware.js
│   │
│   ├── models
│   │     ├── authModel.js
│   │     ├── productModel.js
│   │     ├── supplierModel.js
│   │     ├── warehouseModel.js
│   │     ├── inventoryModel.js
│   │     ├── purchaseOrderModel.js
│   │     ├── reportModel.js
│   │     └── profileModel.js
│   │
│   ├── routes
│   │     ├── authRoutes.js
│   │     ├── productRoutes.js
│   │     ├── supplierRoutes.js
│   │     ├── warehouseRoutes.js
│   │     ├── inventoryRoutes.js
│   │     ├── purchaseOrderRoutes.js
│   │     ├── reportRoutes.js
│   │     └── profileRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── public
│
├── src
│   │
│   ├── assets
│   │
│   ├── components
│   │     ├── dashboard
│   │     ├── home
│   │     ├── inventory
│   │     ├── layout
│   │     ├── products
│   │     ├── profile
│   │     ├── purchaseOrders
│   │     ├── reports
│   │     ├── suppliers
│   │     └── warehouses
│   │
│   ├── pages
│   │
│   ├── styles
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Environment Variables

Create a **.env** file inside the backend folder.

```env
PORT=5000

DATABASE_URL=postgresql://username:password@localhost:5432/smart_inventory

JWT_SECRET=your_jwt_secret_key
```

> Replace the values according to your PostgreSQL configuration.

---

# 🚀 Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/zunaira0411/Abreonix_Project.git
```

---

## 2️⃣ Navigate to Project

```bash
cd Abreonix_Project
```

---

## 3️⃣ Install Frontend Dependencies

```bash
npm install
```

---

## 4️⃣ Install Backend Dependencies

```bash
cd backend

npm install
```

---

## 5️⃣ Configure PostgreSQL

Create a PostgreSQL database.

Example:

```
smart_inventory
```

Update the **DATABASE_URL** inside the **.env** file.

---

## 6️⃣ Start Backend Server

```bash
npm run dev
```

Backend will run at

```
http://localhost:5000
```

---

## 7️⃣ Start Frontend

Open another terminal

```bash
npm run dev
```

Frontend will run at

```
http://localhost:5173
```

---

# 🗄️ Database

The application uses **PostgreSQL** as the primary database.

### Tables

- Users
- Products
- Suppliers
- Warehouses
- Inventory
- Purchase Orders

All CRUD operations are performed using PostgreSQL.

---

# 🔐 Authentication Flow

The application uses **JWT (JSON Web Token)** for secure authentication.

### Authentication Process

```
User Login
      │
      ▼
Backend Verification
      │
      ▼
Generate JWT Token
      │
      ▼
Store Token in Local Storage
      │
      ▼
Access Protected Routes
```

---

# 🌐 REST API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

---

## Products

| Method | Endpoint |
|---------|----------|
| GET | /api/products |
| POST | /api/products |
| PUT | /api/products/:id |
| DELETE | /api/products/:id |

---

## Suppliers

| Method | Endpoint |
|---------|----------|
| GET | /api/suppliers |
| POST | /api/suppliers |
| PUT | /api/suppliers/:id |
| DELETE | /api/suppliers/:id |

---

## Warehouses

| Method | Endpoint |
|---------|----------|
| GET | /api/warehouses |
| POST | /api/warehouses |
| PUT | /api/warehouses/:id |
| DELETE | /api/warehouses/:id |

---

## Inventory

| Method | Endpoint |
|---------|----------|
| GET | /api/inventory |
| POST | /api/inventory |
| PUT | /api/inventory/:id |
| DELETE | /api/inventory/:id |

---

## Purchase Orders

| Method | Endpoint |
|---------|----------|
| GET | /api/purchase-orders |
| POST | /api/purchase-orders |
| PUT | /api/purchase-orders/:id |
| DELETE | /api/purchase-orders/:id |

---

## Reports

| Method | Endpoint |
|---------|----------|
| GET | /api/reports |

---

## Profile

| Method | Endpoint |
|---------|----------|
| GET | /api/profile |
| PUT | /api/profile |

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using bcrypt.js
- Protected Routes
- REST API Architecture
- PostgreSQL Database Security
- Input Validation
- Secure Logout
- Authentication Middleware

---

# 📊 Core Modules

| Module | Status |
|---------|--------|
| Authentication | ✅ Completed |
| Dashboard | ✅ Completed |
| Products | ✅ Completed |
| Suppliers | ✅ Completed |
| Warehouses | ✅ Completed |
| Inventory | ✅ Completed |
| Purchase Orders | ✅ Completed |
| Reports | ✅ Completed |
| Profile | ✅ Completed |
| QR Code | ✅ Completed |
| PDF Export | ✅ Completed |
| CSV Export | ✅ Completed |
| PostgreSQL | ✅ Completed |
| Backend APIs | ✅ Completed |

---

# 📸 Application Screenshots

The application consists of the following modules.

# 📸 Application Screenshots

## 🏠 Home Page

![Home](screenshots/home.png)

---

## 🔐 Login Page

![Login](screenshots/login.png)

---

## 📝 Register Page

![Register](screenshots/register.png)

---

## 📊 Dashboard

![Dashboard](screenshots/dashboard.png)

---

## 📦 Products Module

![Products](screenshots/products.png)

---

## 👁️ Product Details

![Product Details](screenshots/product-view.png)

---

## 🚚 Suppliers Module

![Suppliers](screenshots/suppliers.png)

---

## 🏢 Warehouses Module

![Warehouses](screenshots/warehouses.png)

---

## 📦 Inventory Module

![Inventory](screenshots/inventory.png)

---

## 🛒 Purchase Orders

![Purchase Orders](screenshots/purchase-orders.png)

---

## 📈 Reports Dashboard

![Reports](screenshots/reports.png)

---

## 👤 User Profile

![Profile](screenshots/profile.png)

---

## 🗄️ PostgreSQL Database

![Database](screenshots/database.png)

### Included Screens

- 🏠 Home Page
- 🔐 Login Page
- 📝 Register Page
- 📊 Dashboard
- 📦 Products Module
- 🚚 Suppliers Module
- 🏢 Warehouses Module
- 📦 Inventory Module
- 🛒 Purchase Orders
- 📈 Reports
- 👤 Profile
- 📱 QR Code Generation

---

# 🎯 Learning Outcomes

This project helped me gain practical experience in:

- Full Stack Web Development
- React.js Component Architecture
- REST API Development
- Express.js Server Development
- PostgreSQL Database Design
- CRUD Operations
- JWT Authentication
- Database Integration
- State Management
- Responsive UI Design
- Modular Project Structure
- Git & GitHub Version Control
- Real-world Inventory Management Workflow

---

# 📈 Future Enhancements

The following features can be added in future versions:

- Product Image Upload
- Email Notifications
- SMS Notifications
- Barcode Scanner Support
- Multi-User Role Management
- Admin & Employee Dashboard
- Dark Mode
- Advanced Reports
- Data Visualization Dashboard
- Sales & Purchase Analytics
- Inventory Forecasting
- Cloud Deployment (Render / Railway / Vercel)
- Docker Support
- Unit Testing
- CI/CD Integration

---

# 📊 Project Summary

| Category | Details |
|----------|---------|
| Project Name | Smart Inventory Tracker |
| Project Type | Full Stack Web Application |
| Frontend | React.js + Vite |
| Backend | Node.js + Express.js |
| Database | PostgreSQL |
| Authentication | JWT |
| API Type | REST API |
| Charts | Chart.js & Recharts |
| QR Code | ✔ |
| CSV Export | ✔ |
| PDF Export | ✔ |
| Responsive Design | ✔ |
| CRUD Operations | Complete |
| Project Status | ✅ Completed |

---

# 🏆 Internship Information

This project was successfully developed during my **Web Development Internship at Abreonix**.

The internship provided practical exposure to:

- Frontend Development
- Backend Development
- Database Design
- REST API Development
- Authentication Systems
- Professional Git Workflow
- Real-world Project Architecture
- Full Stack Application Development

---

# 👨‍💻 Developer

## Zunaira Fatima

🎓 Bachelor of Computer Applications (BCA IBM)

🏫 United University

💼 Web Development Intern at **Abreonix**

### Skills

- React.js
- JavaScript
- Node.js
- Express.js
- PostgreSQL
- HTML5
- CSS3
- REST APIs
- Git & GitHub

---

# 🤝 Acknowledgement

I would like to sincerely thank **Abreonix** for providing me with the opportunity to work on this project during my internship.

This project significantly enhanced my understanding of Full Stack Web Development, modern JavaScript frameworks, backend API development, database management, authentication, and professional software development practices.

I am also grateful to my mentors and faculty members for their continuous guidance and encouragement throughout the development process.

---

# 📄 License

This project is licensed under the **MIT License**.

It is intended for educational purposes, internship learning, academic demonstrations, and portfolio showcasing.

---

# 🌐 Connect With Me

### GitHub

👉 https://github.com/zunaira0411

### LinkedIn

👉 https://www.linkedin.com/in/zunaira-fatima-81a9bb402/

---

# ⭐ Support

If you found this project useful or interesting,

please consider giving this repository a ⭐ on GitHub.

It motivates me to build more Full Stack Projects and contribute to the developer community.

---

# 🙌 Thank You

Thank you for visiting my repository.

If you have any suggestions, feedback, or improvements, feel free to open an Issue or connect with me on LinkedIn.

Happy Coding! 🚀