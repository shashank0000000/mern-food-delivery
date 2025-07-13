# mern-food-delivery
Tomato – A modern MERN-based food delivery app with Stripe-powered payments.

# 🍅 Tomato – Full-Stack Food Delivery App

**Tomato** is a responsive and modular food delivery platform built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**, with **Stripe** integration for secure online payments and **JWT-based authentication** for user access control. The system includes a customer-facing app, a backend API server, and an admin dashboard to manage orders and menu items in real time.

---

## 🧠 Key Concepts & Features

### ⚙️ **CRUD Operations**
- **Create**:
  - Users place orders
  - Admin adds food items
- **Read**:
  - Food menu, order history, user details
- **Update**:
  - Admin updates order status, food items
  - Payment status update after Stripe payment
- **Delete**:
  - Admin can remove food items or orders

---

## 🛠️ Tech Stack

| Layer        | Technology                      |
|--------------|---------------------------------|
| **Frontend** | React.js, React Router, Axios   |
| **Backend**  | Node.js, Express.js             |
| **Database** | MongoDB + Mongoose              |
| **Auth**     | JSON Web Tokens (JWT)           |
| **Payments** | Stripe API                      |
| **Styling**  | CSS / Bootstrap / Tailwind (optional) |

---

## 🔐 Security & Authentication
- **JWT** is used to authenticate and protect API routes.
- Different user roles (user vs admin) have restricted access.
- Passwords are hashed using **bcrypt**.
- Protected routes check for valid JWTs before processing requests.

---

## 💳 Stripe Integration
- Secure payments via **Stripe Payment Intents**
- Users can pay online and track order/payment status
- Admin can view all transactions and their success/failure status

---

## 📁 Folder Structure

