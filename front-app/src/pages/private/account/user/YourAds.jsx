import React, { useState } from "react";
import UserMenu from "../../../../components/userMenu/UserMenu";
import { Link } from "react-router-dom";
import AddAdModal from "../../../../components/dialog/AddAdModal";

const YourAds = () => {
    const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="bg-white text-black pb-[100px] mt-[55px]">
      <UserMenu />
      <div className="flex flex-col gap-3 px-3 mt-2 ">
        <div className="flex mt-3">
          <Link className="font-my-regular w-full text-center border text-[15px] border-[#4FC2CA] bg-[#4FC2CA] font-light text-white rounded-full py-3.5 uppercase">
            Previous Announcements
          </Link>
        </div>
        <div className="flex mb-3">
          <Link className="font-my-regular w-full text-center border text-[15px] border-[#4FC2CA] bg-[#4FC2CA] font-light text-white rounded-full py-3.5 uppercase">
            Upcoming Announcements
          </Link>
        </div>
        <div className="border-b"></div>

        <div className="flex my-3">
          <Link className="font-my-regular w-full text-center border text-[15px] border-black bg-black font-light text-white rounded-full py-3.5 uppercase" onClick={openModal}>
            Add Ad +
          </Link>
        </div>
      </div>
      <AddAdModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default YourAds;
