import Logo from "../../assets/images/logo.png"
import Menu from "../../assets/images/menu.png"
import Lang from "../../assets/images/lang.png"
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import RightArrowImg from "../../assets/images/outline/right-arrow.png"
import InstagramImg from "../../assets/images/social/instagram.png"
import SnapchatImg from "../../assets/images/social/snapchat.png"
import TiktokImg from "../../assets/images/social/tiktok.png"
import { Link } from "react-router-dom";
export const Navbar = ()=>{
    const [isMenu,setIsMenu] = useState(false)
    const [isLoggedIn] = useState(false)
    useEffect(()=>{
      if(isMenu){
        document.body.classList.add("overflow-hidden")
      } else{
        document.body.classList.remove("overflow-hidden")
      }
    },[isMenu])
    return(
      <Fragment>
        <div className="bg-white !text-black px-3 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
            <button onClick={()=>{setIsMenu(true)}}>
            <img src={Menu} alt="Menu" className="size-6" />
            </button>
              <div className="h-10 w-4/12 mx-auto flex items-center justify-center">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="px-3 py-2 rounded bg-[#D9D9D9]">
            <img src={Lang} alt="Language" className="h-4" />
            </div>
        </div>
        <div onClick={()=>{
          setIsMenu(false)
        }} className={`fixed inset-0 bg-[rgba(0,0,0,0.6)] h-screen z-[999] w-full transition duration-500 ease-in-out ${isMenu?"":"-translate-x-full"}`}>
          <div onClick={(e) => e.stopPropagation()} className={`h-full w-9/12 bg-white transition delay-500 z-[9999] fixed duration-500 ease-in-out ${isMenu?"":"-translate-x-full"}`}>
           <div className="flex justify-end p-2">
             <button onClick={()=>{setIsMenu(false)}} className="p-2 drop-shadow-2xl bg-white rounded-full">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
             </button>
           </div>
           <div className="px-4">
             <div className="flex flex-row items-center gap-3">
             <h2 className="text-[#0B0B0B] whitespace-nowrap text-xl font-semibold">Main Menu</h2>
             <div className="w-full h-px bg-black"></div>
             </div>
             <div className="flex flex-col my-4 pl-2">
               <div className="flex flex-row gap-3 items-center py-2.5">
                 <img src={RightArrowImg} className="size-2" />
                 <span className="text-gray-600">Home</span>
               </div>
               <Link to={"/home/account/about-us"} onClick={()=>{setIsMenu(false)}} className="font-normal flex flex-row gap-3 items-center py-2.5">
                 <img src={RightArrowImg} className="size-2" />
                 <span className="text-gray-600">About Us</span>
               </Link>
               <div className="flex flex-row gap-3 items-center py-2.5">
                 <img src={RightArrowImg} className="size-2" />
                 <span className="text-gray-600">Contact Us</span>
               </div>
               <div className="flex flex-row gap-3 items-center py-2.5">
                 <img src={RightArrowImg} className="size-2" />
                 <span className="text-gray-600">Profile</span>
               </div>
               {isLoggedIn?
               <div className="flex flex-row gap-3 items-center py-2.5">
               <img src={RightArrowImg} className="size-2" />
               <span className="text-gray-600">Logout</span>
             </div>
               :
               <Fragment>
               <div className="flex flex-row gap-3 items-center py-2.5">
                 <img src={RightArrowImg} className="size-2" />
                 <span className="text-gray-600">Login</span>
               </div>
               <div className="flex flex-row gap-3 items-center py-2.5">
                 <img src={RightArrowImg} className="size-2" />
                 <span className="text-gray-600">New Registration</span>
               </div>
               <div className="flex flex-row gap-3 items-center py-2.5">
                 <img src={RightArrowImg} className="size-2" />
                 <span className="text-gray-600">Advertise on Youdra</span>
               </div>
               </Fragment>
}
             </div>
             <div className="flex flex-row items-center gap-3">
             <h2 className="text-[#0B0B0B] whitespace-nowrap text-xl font-semibold">Social Media</h2>
             <div className="w-full h-px bg-black"></div>
             </div>
             <div className="mt-4 flex gap-3">
               <Link to="/">
                <img src={InstagramImg} className="size-8" />
               </Link>
               <Link to="/">
                <img src={SnapchatImg} className="size-8" />
               </Link>
               <Link to="/">
                <img src={TiktokImg} className="size-8" />
               </Link>
             </div>
           </div>
          </div>
        </div>
      </Fragment>
    );
}