import React from "react";
import BackgroundImg from "../../../assets/images/homepage-background.jpg"
import Logo from "../../../assets/images/logo.png"
import { Link } from "react-router-dom";
export const Landing = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <img
        src={BackgroundImg}
        alt="Background"
        className="w-full h-screen object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <div className="h-full w-full flex flex-col justify-between">
          {/* Logo */}
          <div className="mt-2 flex justify-center">
            <img src={Logo} alt="Logo" className="w-5/12 md:w-48" />
          </div>

          {/* Welcome Section */}
          <div className="flex flex-col gap-4 p-4 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)]">
            <h1 className="font-my-light text-3xl font-normal text-center text-white mb-8 uppercase">
              Welcome to <br />
              <span className="font-semibold text-4xl font-my-regular">adminCustom</span>
            </h1>
            <Link
              to="/login"
              className="font-my-light text-center border text-[15px] border-[#4FC2CA] bg-[#4FC2CA] font-light text-white rounded-full py-3.5 uppercase w-full"
            >
              log in / sign up
            </Link>
            <Link
              to="/home"
              className="font-my-light text-center border text-[15px] border-[#4FC2CA] font-light text-white rounded-full py-3.5 uppercase w-full"
            >
              Browse First
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

