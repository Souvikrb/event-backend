import React, { useState } from 'react';
import { MenuItem, Avatar, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import profilePic from '../../assets/images/user/profile.png'
import userNameImg from '../../assets/images/user/personal-details.png'
import locationImg from '../../assets/images/user/location.png'
import galleryImg from '../../assets/images/user/gallery.png'
import adImg from '../../assets/images/user/ads.png'
import infoImg from '../../assets/images/user/information.png'
import rateImg from '../../assets/images/user/rates.png'
function UserMenu() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(0);

  const menuItems = [
    { icon:<img src={userNameImg} alt="Personal Details Icon" className="w-6 h-6" />, label: 'My Personal Details', path: '/home/account/user/personal-details' },
    { icon:<img src={locationImg} alt="Address Icon" className="w-6 h-6" />, label: 'Address', path: '/home/account/user/address' },
    { icon: <img src={galleryImg} alt="gallery Icon" className="w-6 h-6" />, label: 'Photos', path: '/home/account/user/photos' },
    { icon: <img src={adImg} alt="ad Icon" className="w-6 h-6" />, label: 'Your Ads', path: '/home/account/user/your-ads' },
    { icon: <img src={infoImg} alt="Activity Icon" className="w-6 h-6" />, label: 'Activity Info', path: '/home/account/user/activity-info' },
    { icon:<img src={rateImg} alt="Rates Icon" className="w-6 h-6" />, label: 'Rates', path: '/home/account/user/rates' },
  ];

  const handleMenuClick = (path, index) => {
    setActiveItem(index); 
    navigate(path);
  };

  return (
    <div className="mt-4">
      <Box className="flex items-center justify-center  h-32  bg-[#D9D9D9]">
        <img alt="Profile Picture" src={profilePic} className="w-22 h-22" />
        <Box className="ml-4">
          <h2 className="font-bold text-2xl">
            DHD
          </h2>
          <h3 className="text-gray-500 text-xl font-medium">
            Hhdhdh@gmail.com
          </h3>
        </Box>
      </Box>

      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-center bg-${activeItem === index ? '[#4FC2CA]' : '[#c2c2c2e3]'} p-6 mb-1 shadow hover:bg-[#4FC2CA] transition text-${activeItem === index ? 'white' : 'black'}`}
          onClick={() => handleMenuClick(item.path, index)}
        >
          <div className={`flex items-center text-${activeItem === index ? 'white' : 'black'}`}>
            {item.icon}
            <span className={`ml-2 text-${activeItem === index ? 'white' : 'black'}`}>{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserMenu;
