# 🍰 Bakeology - Full Stack Bakery Website

Bakeology is a full-stack bakery web application that allows users to browse bakery products, add items to their cart, place orders, and complete payments through Stripe. This project is built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

✨ Features
### 👤 Customer
- Browse bakery products
- View product categories
- Search products
- Add products to cart
- Remove products from cart
- User Login & Registration
- Place orders
- Online payment using Stripe
- View order history

### 🔧 Admin
- Admin Dashboard
- Add new products
- Upload product images
- Manage food menu
- View customer orders
- Update order status


## 🛠️ Technologies Used
### Frontend
- React.js
- React Router DOM
- Axios
- CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Stripe API
- dotenv

---

## 📂 Project Structure

```
bakeology-website-project
│
├── admin/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### 1. Clone Repository

```bash
git clone https://github.com/bagusgantengbgtz/bakeology-website-project.git
```

---

### 2. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

#### Admin

```bash
cd admin
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder.

Example:

```env
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
```

> ⚠️ Never upload your `.env` file to GitHub.

---

## ▶️ Running the Project

### Backend

```bash
cd backend
npm run server
```

or

```bash
npm start
```

---

### Frontend

```bash
cd frontend
npm run dev
```

---

### Admin Panel

```bash
cd admin
npm run dev
```

---

## 📸 Screenshots

You can add screenshots here.

Example:

```
screenshots/
    home.png
    menu.png
    cart.png
    checkout.png
    admin-dashboard.png
```

---

## 📚 Learning Outcomes

This project helped me learn:

- React.js
- Node.js
- Express.js
- MongoDB
- REST API Development
- JWT Authentication
- Stripe Payment Integration
- Image Upload with Multer
- Full Stack Application Development
- Git & GitHub Version Control

---

GitHub:
https://github.com/bagusgantengbgtz

---

## ⭐ If you like this project

Please consider giving this repository a ⭐ on GitHub!
