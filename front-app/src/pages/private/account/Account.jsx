import UserImg from "../../../assets/images/user_avatar.png"
import UserIcoImg from "../../../assets/images/outline/user.png"
import ArrowImg from "../../../assets/images/outline/arrow.png"
import CategoryImg from "../../../assets/images/outline/category.png"
import EmailImg from "../../../assets/images/outline/email.png"
import IdCardImg from "../../../assets/images/outline/id-card.png"
import ImageGalleryImg from "../../../assets/images/outline/image-gallery.png"
import LocationImg from "../../../assets/images/outline/location.png"
import ConfirmPasswordImg from "../../../assets/images/outline/password-conf.png"
import PasswordImg from "../../../assets/images/outline/password.png"
import PhoneImg from "../../../assets/images/outline/phone.png"
import TemplateImg from "../../../assets/images/outline/template.png"
import DownArrowImg from "../../../assets/images/outline/down-arrow.png"
import MapImg from "../../../assets/images/outline/map.png"
import "./style.css"
import { useNavigate } from "react-router-dom"
export const Account = ()=>{
    const navigate = useNavigate();
    return(
        <div className="bg-white text-black pb-[100px] mt-[55px]">
            <div className="bg-[#D9D9D9] h-36 w-full"></div>
            <div className="-mt-24 flex w-full justify-center">
                <img 
                src={UserImg}
                className="h-36 w-36"
                />
            </div>
            <h2 className="text-black text-center py-3 text-lg">Logo For Service Provider</h2>
            <div className="flex flex-col gap-3 px-3 mt-2">
                <div className="relative">
                    <input
                      className="bg-white border border-[#B4B4B4] rounded-full pl-4 pr-12 py-3 w-full"
                      placeholder="Provider Name"
                    />
                    <div className="absolute right-4 top-0 h-full flex items-center justify-center">
                        <img src={UserIcoImg} />
                    </div>
                </div>
                <div className="relative">
                    <input
                      className="bg-white border border-[#B4B4B4] rounded-full pl-4 pr-12 py-3 w-full"
                      placeholder="Email"
                    />
                    <div className="absolute right-0 top-0.5 h-full flex items-center justify-center">
                        <img src={EmailImg} />
                    </div>
                </div>
                <div className="relative">
                    <input
                      className="bg-white border border-[#B4B4B4] rounded-full pl-4 pr-12 py-3 w-full"
                      placeholder="Phone Number"
                    />
                    <div className="absolute right-4 top-0 h-full flex items-center justify-center">
                        <img src={PhoneImg} />
                    </div>
                </div>
                <div className="relative">
                    <select className="bg-white border border-[#B4B4B4] rounded-full pl-4 pr-12 py-3 w-full">
                        <option disabled value="" selected>Country</option>
                        <option value="india">India</option>
                    </select>
                    <div className="absolute right-3 top-0 h-full flex items-center justify-center">
                    <img src={DownArrowImg} className="mr-2" />
                        <img src={LocationImg} />
                    </div>
                </div>
                <div className="relative">
                    <select className="bg-white border border-[#B4B4B4] rounded-full pl-4 pr-12 py-3 w-full">
                        <option disabled value="" selected>City</option>
                        <option value="india">Mumbai</option>
                    </select>
                    <div className="absolute right-1.5 top-0 h-full flex items-center justify-center">
                    <img src={DownArrowImg} className="mr-2" />
                        <img src={ArrowImg} />
                    </div>
                </div>
                <div className="relative">
                    <select className="bg-white border border-[#B4B4B4] rounded-full pl-4 pr-12 py-3 w-full">
                        <option disabled value="" selected>Category</option>
                        <option value="india">Category 1</option>
                    </select>
                    <div className="absolute right-3 top-0 h-full flex items-center justify-center">
                    <img src={DownArrowImg} className="mr-2" />
                        <img src={CategoryImg} className="size-5" />
                    </div>
                </div>
                <div className="relative">
                    <select className="bg-white border border-[#B4B4B4] rounded-full pl-4 pr-12 py-3 w-full">
                        <option disabled value="" selected>Section</option>
                        <option value="india">Section 1</option>
                    </select>
                    <div className="absolute right-3 top-0 h-full flex items-center justify-center">
                    <img src={DownArrowImg} className="mr-2" />
                        <img src={TemplateImg} className="size-5" />
                    </div>
                </div>
                <div className="relative">
                    <input
                      className="bg-white border border-[#B4B4B4] rounded-full pl-4 pr-12 py-3 w-full"
                      placeholder="Postal Code"
                    />
                    <div className="absolute right-3 top-0.5 h-full flex items-center justify-center">
                        <img src={IdCardImg} className="size-6" />
                    </div>
                </div>
                <div className="relative">
                    <input
                      className="bg-white border border-[#B4B4B4] rounded-full pl-4 pr-12 py-3 w-full"
                      placeholder="Password"
                      type="password"
                    />
                    <div className="absolute right-3 top-0.5 h-full flex items-center justify-center">
                        <img src={PasswordImg} className="size-6" />
                    </div>
                </div>
                <div className="relative">
                    <input
                      className="bg-white border border-[#B4B4B4] rounded-full pl-4 pr-12 py-3 w-full"
                      placeholder="Confirm Password"
                      type="password"
                    />
                    <div className="absolute right-3 top-0.5 h-full flex items-center justify-center">
                        <img src={ConfirmPasswordImg} className="size-6" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-400">Event</label>
                    <label htmlFor="dropzone" className="border border-[#B4B4B4] rounded-xl p-4 flex gap-4 items-center cursor-pointer">
                        <div className="bg-[#D9D9D9] p-5 rounded-xl w-full flex items-center justify-center">
                            <img src={ImageGalleryImg} className="size-12" />
                        </div>
                        <button className="bg-[#D9D9D9] text-[#6F6969] px-8 py-3 h-fit text-sm whitespace-nowrap">Upload Image</button>
                    </label>
                    <input id="dropzone" className="hidden" type="file" />
                </div>
                <div className="mt-2 rounded-xl overflow-hidden border border-[#B4B4B4]">
                    <img src={MapImg} />
                </div>
                <div className="mt-4 mb-8 flex items-center justify-center">
                <button onClick={() => navigate('/home/account/user/personal-details')}  className="bg-[#4FC2CA] uppercase font-my-regular rounded-full py-4 px-12 text-white text-sm">registration</button>
                </div>
            </div>
        </div>
    );
}