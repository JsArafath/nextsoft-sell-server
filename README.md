# NexusSoft Backend - Express.js API 🚀

This is the backend server for the **NexusSoft** digital storefront. It provides RESTful APIs to manage digital products, user authentication (simulated/actual), and testimonials using Express and MongoDB.

## ✨ Features

- **RESTful API Architecture:** Clean and modular route structures.
- **MongoDB Integration:** Persistent data storage using Mongoose.
- **Product Management:** Endpoints for creating, reading, updating, and deleting digital products.
- **Testimonial Management:** Endpoints to handle customer reviews and feedback.
- **CORS Enabled:** Configured to accept requests from the React frontend safely.

## 🛠️ Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- **Middleware:** `cors`, `dotenv`

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js and MongoDB installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JsArafath/nextsoft-sell-server.git
   cd nextsoft-sell-server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Start the server:**
   ```bash
   node index.js
   ```
   The server will start on `http://localhost:5000`.

## 📂 Folder Structure

```text
├── controllers/    # Route handler functions
├── models/         # Mongoose database schemas
├── routes/         # Express API route definitions
├── middleware/     # Custom Express middlewares
├── index.js        # Entry point and server configuration
└── .env            # Environment variables (ignored in Git)
```

## 🔌 API Endpoints (Overview)

- `GET /api/products` - Fetch all products
- `POST /api/products` - Add a new product
- `GET /api/testimonials` - Fetch all testimonials
- `POST /api/testimonials` - Add a new testimonial

---
*Developed for NexusSoft Digital Storefront.*
