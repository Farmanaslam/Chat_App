import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Login = () => {
  const navigate = useNavigate();
  const { setAuthUser } = useAuth();

  const [userInput, setUserInput] = useState({});
  const [loading, setLoading] = useState(false);

  const handelInput = (e) => {
    setUserInput({
      ...userInput,
      [e.target.id]: e.target.value,
    });
  };
  console.log(userInput);

  const handelSubmit = async (e) => {
    const API_BASE = "http://13.60.221.170:3000";
    e.preventDefault();
    setLoading(true);
    try {
      const login = await axios.post(`${API_BASE}/api/auth/login`, userInput);
      const data = login.data;
      if (data.success === false) {
        setLoading(false);
        console.log(data.message);
      }
      toast.success(data.message);
      localStorage.setItem("chatapp", JSON.stringify(data));
      setAuthUser(data);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="login-form">
      <div
        className="w-full p-6 rounded-lg shadow-lg
          bg-gray-400 bg-clip-padding
           backderop-filter backdrop-blur-lg bg-opacity-0 formWrapper"
      >
        <h1 className="text-3xl font-bold text-center text-gray-300 logo">
          Login
          <span className="text-gray-950 logo"> Chatters </span>
        </h1>
        <form
          onSubmit={handelSubmit}
          className="flex flex-col text-black gap-15px"
        >
          <div>
            <input
              id="email"
              type="email"
              onChange={handelInput}
              placeholder="email"
              required
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              onChange={handelInput}
              placeholder="passsword"
              required
            />
          </div>
          <button type="submit">{loading ? "loading.." : "Sign In"}</button>
        </form>
        <div className="pt-2">
          <p className="">
            Don't have an Acount ?{" "}
            <Link to={"/register"}>
              <span
                className="text-gray-950 
                            font-bold underline cursor-pointer
                             hover:text-green-950"
              >
                Register Now!!
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
