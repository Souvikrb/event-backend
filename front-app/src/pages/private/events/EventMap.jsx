import CloseButtonImg from "../../../assets/images/close-button.png"
import FunnelImg from "../../../assets/images/funnel.png"
import FilterImg from "../../../assets/images/filter.png"
import DiscountImg from "../../../assets/images/discount.png"
import SampleMarkerImg from "../../../assets/images/sample-marker.png"
import ShieldImg from "../../../assets/images/shield.png"
import CrownImg from "../../../assets/images/crown.png"
import IncriptionImg from "../../../assets/images/inscription.png"
import BadgeImg from "../../../assets/images/badge.png"
import WifiImg from "../../../assets/images/wifi.png"
import ParkImg from "../../../assets/images/park.png"
import CheckImg from "../../../assets/images/check.png"
import SpeakerImg from "../../../assets/images/speaker.png"
import { BottomSheet } from 'react-spring-bottom-sheet'
import { Fragment, useState } from "react"
import MultiRangeSlider from "multi-range-slider-react";
import Switch from "react-switch";
import 'react-spring-bottom-sheet/dist/style.css'
import "./style.css"
import { Link } from "react-router-dom"
export const EventMap = ()=>{
    const [open,setOpen] = useState(false)
    const [minValue, set_minValue] = useState(25);
const [maxValue, set_maxValue] = useState(75);
const [toggle,setToggle] = useState(false)
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};
    return(
        <Fragment>
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
            <iframe className="top-0 left-0 h-full w-full absolute" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3585.1449119976737!2d87.86059436376514!3d22.435431135301144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1735281204710!5m2!1sen!2sin" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
            <div className="absolute top-0 right-0">
                <Link to={"/home/events/2"}>
                <img
                src={CloseButtonImg}
                />
                </Link>
            </div>
            <div className="absolute top-12 left-0 right-0 flex justify-center">
                <div className="bg-[#4FC2CA] flex rounded-full divide-x divide-gray-200 py-3">
                <div onClick={()=>{setOpen(true)}} className="flex px-4 items-center gap-1 w-24">
                    <img
                    src={FunnelImg}
                    className="size-6"
                    />
                    <span>Filter</span>
                </div>
                <div className="flex px-4 items-center gap-2 w-24">
                    <img
                    src={FilterImg}
                    className="size-4"
                    />
                    <span>List</span>
                </div>
                </div>
            </div>
            <div className="absolute bottom-12 left-24">
                <img
                src={SampleMarkerImg}
                />
            </div>
            <div className="absolute bottom-48 right-24">
                <img
                src={SampleMarkerImg}
                />
            </div>
        </div>
        <BottomSheet
         open={open}
         onDismiss={()=>{setOpen(false)}}
         >
            <div className="p-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl text-[#4FC2CA] font-semibold">Filter results</h2>
                <img
                src={CloseButtonImg}
                className="cursor-pointer"
                onClick={()=>{setOpen(false)}}
                />
            </div>
            <div className="h-px w-full bg-gray-400 mb-4"></div>
            <MultiRangeSlider
			min={0}
			max={100}
			step={5}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
            className="!shadow-none !border-0 !p-0 !pt-2 !mb-0 h-6"
          barLeftColor="#4FC2CA"
          barInnerColor="#4FC2CA"
          barRightColor="#4FC2CA"
          thumbLeftColor="#4FC2CA"
          thumbRightColor="#4FC2CA"
		/>
        <div className="pt-4 grid grid-cols-11 items-center gap-3">
            <div className="col-span-5 relative">
            <input defaultValue={50} className="bg-white border border-[#B4B4B4] text-black w-full py-2 px-3 rounded-full" />
            <div className="absolute right-4 top-2.5 text-gray-400 text-sm">SAR</div>
            </div>
            <div className="col-span-1">
            <span className="text-black w-full flex items-center justify-center">-</span>
            </div>
            <div className="col-span-5 relative">
            <input defaultValue={"+ 40100"} className="bg-white border border-[#B4B4B4] text-black w-full py-2 px-3 rounded-full" />
            <div className="absolute right-4 top-2.5 text-gray-400 text-sm">SAR</div>
            </div>
        </div>
        <div className="h-px w-full bg-gray-400 my-4"></div>
        <h2 className="text-lg text-black font-semibold">Filter by</h2>
        <div className="flex justify-between items-center py-3">
        <div className="flex gap-3">
            <img
            src={DiscountImg}
            className="size-6"
            />
            <span className="text-black">Offers & Discounts</span>
        </div>
        <Switch onChange={()=>{setToggle(!toggle)}} checked={toggle} checkedIcon={false} uncheckedIcon={false} />
</div>
<div className="h-px w-full bg-gray-300 my-2"></div>
<div className="flex justify-between items-center py-3">
        <div className="flex gap-3">
            <img
            src={ShieldImg}
            className="size-6"
            />
            <span className="text-black">No Insurance</span>
        </div>
        <Switch onChange={()=>{setToggle(!toggle)}} checked={toggle} checkedIcon={false} uncheckedIcon={false} />
</div>
<div className="h-px w-full bg-gray-300 mt-2 mb-4"></div>
<h2 className="text-lg text-black font-semibold">Filter results by locations</h2>
<div className="flex flex-col py-3 gap-3">
    <div className="grid grid-cols-12 gap-4 items-center">
        <p className="text-black col-span-3">District</p>
        <select className="bg-white border border-[#B4B4B4] text-black w-full py-2.5 px-3 rounded-full col-span-9">
        <option selected disabled>State Name</option>
            <option>First Items</option>
        </select>
    </div>
    <div className="flex gap-4 items-center">
        <p className="text-black col-span-3">Direction</p>
        <select className="bg-white border border-[#B4B4B4] text-black w-full py-2.5 px-3 rounded-full col-span-9">
            <option selected disabled className="text-gray-400">State Direction</option>
            <option>First Items</option>
        </select>
    </div>
</div>
<div className="h-px w-full bg-gray-300 mt-2 mb-4"></div>
<h2 className="text-lg text-black font-semibold">Seating capacity of the halls</h2>
<div className="py-3 -mx-3 flex flex-nowrap overflow-auto scroll-none">
    <div className="flex gap-2">
        <div className="bg-[#D1D1D1] rounded-full px-6 py-3 text-black text-sm ml-3">
            Jacuzzi
        </div>
        <div className="bg-[#D1D1D1] rounded-full px-6 py-3 text-black text-sm">
        Sauna
        </div>
        <div className="bg-[#D1D1D1] rounded-full px-6 py-3 text-black text-sm">
        Bathtub
        </div>
        <div className="bg-[#D1D1D1] rounded-full px-6 py-3 text-black text-sm mr-3">
        Tissue
        </div>
    </div>
</div>
<div className="h-px w-full bg-gray-300 mt-2 mb-4"></div>
<h2 className="text-lg text-black font-semibold">Room Condition</h2>
<div className="py-3 -mx-3 flex flex-nowrap overflow-auto scroll-none">
    <div className="flex gap-2">
        <div className="border border-[#D1D1D1] flex gap-2 items-center justify-center rounded-full w-fit px-6 py-3 text-[#B48921] text-sm font-semibold ml-3">
            <img src={CrownImg} className="size-5" />
            <span>Luxury</span>
        </div>
        <div className="border border-[#D1D1D1] flex gap-2 items-center justify-center rounded-full w-fit px-6 py-3 text-[#980D2F] text-sm font-semibold">
            <img src={IncriptionImg} className="size-5" />
            <span>Historical</span>
        </div>
        <div className="border border-[#D1D1D1] flex gap-2 items-center justify-center rounded-full w-fit px-6 py-3 text-[#46C8FF] text-sm font-semibold mr-3">
            <img src={BadgeImg} className="size-5" />
            <span>Special</span>
        </div>
    </div>
</div>
<div className="h-px w-full bg-gray-300 mt-2 mb-4"></div>
<h2 className="text-lg text-black font-semibold">Rating</h2>
<div className="py-3 -mx-3 flex flex-nowrap overflow-auto scroll-none">
    <div className="flex gap-2">
        <div className="border border-[#D1D1D1] flex gap-1 items-center justify-center rounded-full px-6 py-3 text-black text-sm ml-3">
        <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">{/*!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#f97400" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
        <span className="whitespace-nowrap">7 star & more</span>
        </div>
        <div className="border border-[#D1D1D1] flex gap-1 items-center justify-center rounded-full px-6 py-3 text-black text-sm mr-3">
        <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">{/*!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#f97400" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
        <span className="whitespace-nowrap">8 star & more</span>
        </div>
    </div>
</div>
<div className="h-px w-full bg-gray-300 mt-2 mb-4"></div>
<h2 className="text-lg text-black font-semibold">Facilities</h2>
<div className="py-3 -mx-3 flex flex-nowrap overflow-auto scroll-none">
    <div className="flex gap-2">
        <div className="border border-[#D1D1D1] flex flex-col gap-1 items-center justify-center rounded-[20%] px-6 py-3 text-black text-sm ml-3">
        <img src={WifiImg} />
        <span>Internet</span>
        </div>
        <div className="border border-[#D1D1D1] flex flex-col gap-1 items-center justify-center rounded-[20%] px-6 py-3 text-black text-sm">
        <img src={ParkImg} />
        <span className="text-center">Play<br /> Ground</span>
        </div>
        <div className="border border-[#D1D1D1] flex flex-col gap-1 items-center justify-center rounded-[20%] px-6 py-3 text-black text-sm">
        <img src={CheckImg} />
        <span className="text-center">Smart<br /> Entry</span>
        </div>
        <div className="border border-[#D1D1D1] flex flex-col gap-1 items-center justify-center rounded-[20%] px-6 py-3 text-black text-sm mr-3">
        <img src={SpeakerImg} />
        <span className="text-center">Speaker</span>
        </div>
    </div>
</div>
<div className="h-px w-full bg-gray-300 mt-2 mb-4"></div>
<h2 className="text-lg text-black font-semibold">Unit Area</h2>
<div className="py-3">
<MultiRangeSlider
			min={0}
			max={100}
			step={5}
			minValue={0}
			maxValue={100}
			onInput={(e) => {
				handleInput(e);
			}}
            labels={["0 m2","+ 1500 m2"]}
            className="!shadow-none !border-0 !p-0 !pt-2 h-12 !text-black !whitespace-nowrap !text-base"
          barLeftColor="#4FC2CA"
          barInnerColor="#4FC2CA"
          barRightColor="#4FC2CA"
          thumbLeftColor="#4FC2CA"
          thumbRightColor="#4FC2CA"
		/>
</div>
<div className="h-px w-full bg-gray-300 mt-4 mb-4"></div>
<h2 className="text-lg text-black font-semibold">Search with unit code/name</h2>
<div className="flex flex-col py-3 gap-3 mb-24">
    <div className="grid grid-cols-12 gap-4 items-center">
        <p className="text-black col-span-4 whitespace-nowrap">Unit Code</p>
        <input placeholder="Unit Code" className="bg-white border border-[#B4B4B4] text-black w-full py-2.5 px-3 rounded-full col-span-8" />
    </div>
    <div className="grid grid-cols-12 gap-4 items-center">
        <p className="text-black col-span-4 whitespace-nowrap">Unit Name</p>
        <input placeholder="Unit Name" className="bg-white border border-[#B4B4B4] text-black w-full py-2.5 px-3 rounded-full col-span-8" />
    </div>
</div>

<div className="absolute bottom-0 left-0 right-0 mt-12 z-[99999]">
    <div className="bg-[#E7E7E7] rounded-t-[48px] px-6 pt-8 pb-4 flex items-center gap-3">
        <button className="bg-[#4FC2CA] whitespace-nowrap py-4 font-my-regular text-xs px-6 rounded-full">Show 100 + vacation rental</button>
        <p className="font-my-regular text-black text-xs whitespace-nowrap">Reset All</p>
    </div>
</div>
            </div>
         </BottomSheet>
        </Fragment>
    );
}