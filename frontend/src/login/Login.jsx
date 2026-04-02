import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api";
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
    e.preventDefault();
    setLoading(true);
    try {
      const login = await axios.post(`/api/auth/login`, userInput);
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
  const responseGoogle = async (authResult) => {
    console.log("GOOGLE RESPONSE:", authResult);
    try {
      if (authResult?.code) {
        console.log("SENDING CODE:", authResult.code);

        const result = await googleAuth(authResult.code);
        const data = result.data;

        // ✅ data IS the user object, not data.user
        localStorage.setItem("chatapp", JSON.stringify(data));
        setAuthUser(data);
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      console.log("Error occurred while requesting Google login!!", error);
      toast.error("Google Login Failed. Please try again.");
    }
  };
  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

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
        <div className="mt-4 flex flex-col items-center gap-3">
          {/* Divider */}
          <div className="flex items-center w-full">
            <hr className="flex-grow border-gray-500" />
            <span className="px-3 text-gray-300 text-sm">OR</span>
            <hr className="flex-grow border-gray-500" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={() => googleLogin()}
            className="flex items-center justify-center gap-3 w-full 
               bg-white text-gray-700 font-medium py-2.5 px-4 
               rounded-lg shadow-md hover:shadow-lg 
               transition-all duration-200 hover:bg-gray-100"
          >
            {/* Google Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-5 h-5"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.85-6.85C35.9 2.36 30.37 0 24 0 14.62 0 6.27 5.48 2.44 13.44l7.98 6.2C12.5 13.2 17.8 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.5 24c0-1.64-.15-3.21-.43-4.73H24v9.03h12.7c-.55 2.96-2.2 5.48-4.7 7.17l7.3 5.68C43.98 36.47 46.5 30.7 46.5 24z"
              />
              <path
                fill="#FBBC05"
                d="M10.42 28.36A14.48 14.48 0 0 1 9.5 24c0-1.52.26-2.98.72-4.36l-7.98-6.2A23.94 23.94 0 0 0 0 24c0 3.87.93 7.53 2.58 10.76l7.84-6.4z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.92-2.14 15.9-5.83l-7.3-5.68c-2.03 1.36-4.64 2.17-8.6 2.17-6.2 0-11.5-3.7-13.58-8.86l-7.84 6.4C6.27 42.52 14.62 48 24 48z"
              />
            </svg>

            <span>Continue with Google</span>
          </button>
        </div>
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
