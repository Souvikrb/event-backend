import React, { useEffect, useState } from 'react';
import UserMenu from '../../../../components/userMenu/UserMenu';
import UserImg from "../../../../assets/images/user_avatar.png";
import refuteImg from "../../../../assets/images/user/refute.png";
import phoneImg from "../../../../assets/images/user/phone.png";
import postalCodeImg from "../../../../assets/images/user/postal-code.png";
import emailImg from "../../../../assets/images/user/email.png";
import PasswordImg from "../../../../assets/images/user/password.png";
import tagImg from "../../../../assets/images/user/tag.png";
import countryImg from "../../../../assets/images/user/country.png";
import cityImg from "../../../../assets/images/user/city.png";
import userNameImg from "../../../../assets/images/user/userName.png";
import { useNavigate, useParams } from 'react-router-dom';
import useApiHandlers from '../../../../api/ApiHandlers';
import ApiPaths from '../../../../api/ApiPaths';

export default function PersonalDetails() {
  const [formData, setFormData] = useState({
    _id:"",
    nameInCharge: "",
    phone: "",
    postalCode: "",
    email: "",
    password: "",
    price: "",
    country: "",
    city: "",
    name: ""
  });
  const { getApiHandler, postApiHandler, putApiHandler } = useApiHandlers();
  const [errors, setErrors] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await getApiHandler(`${ApiPaths.users}`);
      console.log(response);
      setFormData(response.data);

    };
    fetchData();
  },[])
  const validateForm = () => {
    let newErrors = {};
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address";
    if (!formData.password || formData.password.length < 6) newErrors.password = "Password must be at least 6 characters long";
    if (!formData.name) newErrors.name = "Name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    try {
      const response = await putApiHandler(`${ApiPaths.users}/${formData._id}`, formData);
      alert(response.data);
    } catch (error) {
      alert("Error submitting form");
    }
  };

  return (
    <div className="bg-white text-black pb-[100px] mt-[55px]">
      <UserMenu />
      <div className=" h-36 w-full"></div>
      <div className="-mt-24 flex w-full justify-center">
        <img src={UserImg} className="h-36 w-36" />
      </div>
      <h2 className="text-gray-600 text-center py-3 text-xl">LOGO</h2>
      <div className="flex flex-col gap-3 px-3 mt-2">
        <div className="relative">
          <input
            className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
            placeholder="Name"
            defaultValue=""
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <div className="absolute right-4 top-0 h-full flex items-center justify-center">
            <img src={userNameImg} />
          </div>
        </div>
        <div className="relative">
          <input
            name="email"
            className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
            placeholder="E-mail Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="relative">
          <input
            name="password"
            type="password"
            className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div className="relative">
          <input
            name="nameInCharge"
            className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
            placeholder="Name of the person in charge"
            value={formData.nameInCharge}
            onChange={handleChange}
          />
          {errors.nameInCharge && <p className="text-red-500 text-sm">{errors.nameInCharge}</p>}
        </div>
        <div className="relative">
          <input
            name="phoneNumber"
            className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        <div className="relative">
          <input
            name="postalCode"
            className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
          />
          {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode}</p>}
        </div>
        <div className="relative">
          <input
            className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
            placeholder="Price"
            defaultValue=""
            name="price"
            value={formData.price}
            onChange={handleChange}

          />
          <div className="absolute right-4 top-0 h-full flex items-center justify-center">
            <img src={tagImg} />
          </div>
        </div>
        <div className="relative">
          <input
            className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
            placeholder="Country"
            defaultValue=""
            name="country"
            value={formData.country}
            onChange={handleChange}

          />
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
          <div className="absolute right-4 top-0 h-full flex items-center justify-center">
            <img src={countryImg} />
          </div>
        </div>
        <div className="relative">
          <input
            className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
            placeholder="City"
            defaultValue=""
            name="city"
            value={formData.city}
            onChange={handleChange}

          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          <div className="absolute right-4 top-0 h-full flex items-center justify-center"></div>
          <div className="absolute right-4 top-0 h-full flex items-center justify-center">
            <img src={cityImg} />
          </div>
        </div>
        <div className="mt-4 mb-8 flex items-center justify-center">
          <button
            className="bg-[#4FC2CA] uppercase font-my-regular rounded-full py-4 px-12 text-white text-sm"
            onClick={handleSubmit}
          >
            Modulation
          </button>
        </div>
      </div>
    </div>
  );
}
