import React from 'react'
import UserMenu from '../../../../components/userMenu/UserMenu'
import locationImg from '../../../../assets/images/user/location.png'
import MapImg from '../../../../assets/images/outline/map.png'
const Address = () => {
    return (
        <div className="bg-white text-black pb-[100px] mt-[55px]">
            <UserMenu />
            <div className="flex flex-col gap-3 px-3 mt-8">
                <div className="relative">
                    <input
                        className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
                        placeholder="Address En"

                    />
                    <div className="absolute right-4 top-0 h-full flex items-center justify-center">
                        <img src={locationImg} />
                    </div>
                </div>
                    <div className="mt-2 rounded-xl overflow-hidden border border-[#B4B4B4]">
                                    <img src={MapImg} />
                                </div>
                                <div className="mt-4 mb-8 flex items-center justify-center">
                <button className="bg-[#4FC2CA] uppercase font-my-regular rounded-full py-4 px-12 text-white text-sm">modulation</button>
                </div>
                </div>
        </div>
    )
}

export default Address