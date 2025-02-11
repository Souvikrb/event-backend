import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios"; // Ensure axios is installed
import Logo from "../../../assets/images/logo.png";
import ApiPaths from "../../../api/ApiPaths";
import useResponse from "../../../customHooks/useResponse"
export const Login = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const { notify } = useResponse()
  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    if (!formdata.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formdata.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (!formdata.password) {
      newErrors.password = "Password is required.";
    }
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(`${ApiPaths.login}`, formdata, {
        headers: { Accept: "Application/json" },
      });
      let token = response.data.token;
      sessionStorage.setItem("loginToken", token);
      notify({ title: "Success!", text: response.data.message, icon: "success" });
      navigate("/home");
    } catch (error) {
      const data =
        error.response && error.response.data
          ? error.response.data.message
          : error.message || "Something went wrong";
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
      notify({ title: "Error!", text: data, icon: "error" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white !text-black">
      <div className="bg-[#E3E3E3] rounded-b-xl h-10 p-2 w-4/12 mx-auto flex items-center justify-center">
        <img src={Logo} alt="Logo" className="w-2/3" />
      </div>
      <form onSubmit={loginSubmit} className="p-4 flex flex-col gap-6">
        <Link to="/" className="w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>
        <h1 className="text-xl font-my-regular text-black">Login to youdra.com</h1>
        <div className="flex flex-col gap-1">
          <label className="text-black" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`w-full border ${
              errors.email ? "border-red-500" : "border-[#4FC2CA]"
            } bg-white text-black rounded-full py-3.5 px-6 outline-none focus:ring-1`}
            placeholder="ex : email@domain.com"
            value={formdata.email}
            onChange={(e) =>
              setFormdata({ ...formdata, email: e.target.value })
            }
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              className={`w-full border ${
                errors.password ? "border-red-500" : "border-[#4FC2CA]"
              } bg-white text-black rounded-full py-3.5 px-6 outline-none focus:ring-1`}
              placeholder="xxxxxxxxxxx"
              value={formdata.password}
              onChange={(e) =>
                setFormdata({ ...formdata, password: e.target.value })
              }
            />
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}
        </div>
        <div className="flex">
          <Link to="/forgot-password" className="underline">
            Forgot Password?
          </Link>
        </div>
        <div className="flex mt-3">
          <button
            type="submit"
            className="font-my-regular w-full text-center border text-[15px] border-[#4FC2CA] bg-[#4FC2CA] font-light text-white rounded-full py-3.5 uppercase"
          >
            Log In
          </button>
        </div>
        <hr />
        <div className="flex">
          <Link
            to="/register"
            className="font-my-regular w-full text-center border text-[15px] border-[#4FC2CA] font-light text-black rounded-full py-3.5 uppercase"
          >
            Create New Account
          </Link>
        </div>
      </form>
    </div>
  );
};
