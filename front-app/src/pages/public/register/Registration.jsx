import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import useApiHandlers from "../../../api/ApiHandlers"; 
import useResponse from "../../../customHooks/useResponse";
import ApiPaths from "../../../api/ApiPaths";


export const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    lname: "",
    email: "",
    name:"",
    password: "",
    phone: "",
    privacyPolicy: false,
    newsletter: false,
    role:"user"
  });
  const [errors, setErrors] = useState({});
  const [otpVerified, setOtpVerified] = useState(true); // Simulating OTP verification
  const { notify } = useResponse()
  const { postApiHandler } = useApiHandlers();
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "First Name is required.";
    if (!formData.lname) newErrors.lname = "Last Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (
      !/(?=.*[0-9])(?=.*[a-zA-Z]).{8,}/.test(formData.password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters long and include at least one letter and one number.";
    }
    if (!formData.phone) newErrors.phone = "Phone Number is required.";
    if (!formData.privacyPolicy)
      newErrors.privacyPolicy = "You must agree to the Privacy Policy.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (!otpVerified) {
      notify({
        title: "Error!",
        text: "Please verify your email OTP before submitting.",
        icon: "error",
      });
      return;
    }
    setFormData({ ...formData, name: formData.fullName+" "+formData.lname });
    try {
      const response = await postApiHandler(ApiPaths.register, formData);
      if (response.status === 200 || response.status === 201) {
        navigate("/login");
        notify({
          title: "Success!",
          text: response.data.message || "Registration successful!",
          icon: "success",
        });
      } else {
        notify({
          title: "Error!",
          text: response.data.message || "Something went wrong.",
          icon: "error",
        });
      }
    } catch (error) {
      notify({
        title: "Error!",
        text: error.message || "Failed to register.",
        icon: "error",
      });
    }
  };

  return (
    <div className="relative min-h-screen !bg-white !text-black">
      <div className="bg-[#E3E3E3] rounded-b-xl h-10 p-2 w-4/12 mx-auto flex items-center justify-center">
        <img src={Logo} alt="Logo" className="w-2/3" />
      </div>
      <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-6">
        <Link to="/" className="h-8 w-8 rounded-full border border-[#4FC2CA] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
        <h1 className="text-xl font-my-regular">Create New Account</h1>
        <div className="flex flex-row gap-2">
          <div className="w-full">
            <label htmlFor="fullName">First Name</label>
            <input
              id="fullName"
              className="w-full border border-[#4FC2CA] bg-white rounded-full py-3.5 px-6 outline-none focus:ring-1"
              placeholder="First Name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
          </div>
          <div className="w-full">
            <label htmlFor="lname">Last Name</label>
            <input
              id="lname"
              className="w-full border border-[#4FC2CA] bg-white rounded-full py-3.5 px-6 outline-none focus:ring-1"
              placeholder="Last Name"
              value={formData.lname}
              onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
            />
            {errors.lname && <span className="text-red-500 text-sm">{errors.lname}</span>}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border border-[#4FC2CA] bg-white rounded-full py-3.5 px-6 outline-none focus:ring-1"
            placeholder="ex : email@domain.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border border-[#4FC2CA] bg-white rounded-full py-3.5 px-6 outline-none focus:ring-1"
            placeholder="xxxxxxxxxxx"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="w-full border border-[#4FC2CA] bg-white rounded-full py-3.5 px-6 outline-none focus:ring-1"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone}</span>
          )}
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-start">
            <input
              id="privacyPolicy"
              type="checkbox"
              className="size-5 bg-white"
              checked={formData.privacyPolicy}
              onChange={(e) =>
                setFormData({ ...formData, privacyPolicy: e.target.checked })
              }
            />
            <label htmlFor="privacyPolicy" className="text-sm">
              I have read & agree to the
              <Link to="#" className="text-[#008FF5] ml-1">
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.privacyPolicy && (
            <span className="text-red-500 text-sm">{errors.privacyPolicy}</span>
          )}
          <div className="flex flex-row gap-2 items-start">
            <input
              id="newsletter"
              type="checkbox"
              className="size-5 bg-white"
              checked={formData.newsletter}
              onChange={(e) =>
                setFormData({ ...formData, newsletter: e.target.checked })
              }
            />
            <label htmlFor="newsletter" className="text-sm">
              By checking this box, I agree to receive news-making emails from
              YOUDRA.COM
            </label>
          </div>
        </div>
        <div className="flex mt-3">
          <button
            type="submit"
            className="font-my-regular w-full text-center border text-[15px] border-[#4FC2CA] bg-[#4FC2CA] font-light text-white rounded-full py-3.5 uppercase"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};
