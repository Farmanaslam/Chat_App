# 💬 Chatters – MERN Real-Time Chat Application

A full-stack real-time chat application built using the **MERN Stack** with **Socket.IO** for instant messaging. This app allows users to authenticate, search users, and chat in real-time with a modern UI.

---

## 🚀 Features

* 🔐 User Authentication (JWT आधारित)
* 👤 User Search & Chat Initiation
* 💬 Real-time Messaging using Socket.IO
* 🟢 Online Users Indicator
* 🔔 Message Notifications
* 🖼️ Dynamic Avatar Generation (DiceBear API)
* 📱 Responsive UI

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* Axios
* React Router
* Zustand (State Management)

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Socket.IO
* JWT Authentication

---

## 📂 Project Structure

```
Chat_App/
│
├── backend/
│   ├── DB/
│   ├── Models/
│   ├── rout/
│   ├── routController/
│   ├── middleware/
│   ├── Socket/
│   └── index.js
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Farmanaslam/Chat_App.git
cd Chat_App
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend`:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🌐 Deployment

### Backend (Render)

* Deployed on: https://chat-app-b14o.onrender.com

### Frontend (Vercel)

* (Deploy frontend separately on Vercel)

---

## 🔐 Authentication Flow

* JWT token generated on login
* Token stored in localStorage
* Sent via Authorization header
* Protected routes use middleware

---

## ⚡ API Endpoints

### Auth

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
```

### User

```
GET /api/user/search?search=query
GET /api/user/currentchatters
```

### Messages

```
GET /api/message/:id
POST /api/message/send/:id
```

---

## 🔌 Socket Events

* `connection`
* `getOnlineUsers`
* `newMessage`

---

## 🖼️ Avatar System

* Old: avatar.iran.liara
* New: DiceBear API

```
https://api.dicebear.com/7.x/avataaars/svg?seed=username
```

---

## 🧪 Testing

Use Postman or Thunder Client to test APIs.

---

## 🧑‍💻 Author

**Md Farman Aslam**

* GitHub: https://github.com/Farmanaslam

---

## 📜 License

This project is licensed under the MIT License.

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
