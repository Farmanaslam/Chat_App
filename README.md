# 💬 Chat App

A full-stack real-time chat application built with the MERN stack, Socket.io, and Tailwind CSS.

---

## 🚀 Features

- 🔐 User Authentication (Register / Login)
- 💬 Real-time Messaging powered by Socket.io
- 🟢 Online Status Indicator
- 📱 Responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React, Tailwind CSS               |
| Backend   | Node.js, Express.js               |
| Database  | MongoDB                           |
| Realtime  | Socket.io                         |

---

## 📁 Project Structure

```
Chat_App/
├── frontend/        # React frontend
├── backend/         # Node.js + Express backend (root)
├── package.json     # Root package.json (backend)
└── .env             # Environment variables
```

---

## ⚙️ Environment Variables

Create a `.env` file in the **root directory** with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Farmanaslam/Chat_App.git
cd Chat_App
```

### 2. Install root (backend) dependencies

```bash
npm install
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
cd ..
```

---

## ▶️ Running the App

You need **two terminals** running simultaneously.

### Terminal 1 — Start the Backend (from root directory)

```bash
npm run dev
```

> Runs the Express + Socket.io server

### Terminal 2 — Start the Frontend

```bash
cd frontend
npm run dev
```

> Runs the React app (usually at `http://localhost:5173`)

---

## 🌐 Access the App

Once both servers are running, open your browser and go to:

```
http://localhost:5173
```

---

## 📬 Contact

Made by [Farman Aslam](https://github.com/Farmanaslam)
