import AbouUsImg from "../../../../assets/images/contact-us.png"
import EmailImg from "../../../../assets/images/email.png"
import PersonImg from "../../../../assets/images/user-color.png"
import InstagramImg from "../../../../assets/images/social/instagram.png"
import SnapchatImg from "../../../../assets/images/social/snapchat.png"
import TiktokImg from "../../../../assets/images/social/tiktok.png"
import UserIcoImg from "../../../../assets/images/outline/user.png"
import EmailOutlineImg from "../../../../assets/images/outline/email.png"
import PhoneImg from "../../../../assets/images/outline/phone.png"
import MessageImg from "../../../../assets/images/message.png"
import { Link } from "react-router-dom"
export const ContactUs = ()=>{
    return(
        <div className="bg-white text-black pb-[100px] mt-[55px] p-4">
            <div className="relative">
            <img src={AbouUsImg} />
            <div className="absolute bottom-4 left-0 right-0">
            <h1 className="text-white text-center font-bold text-2xl uppercase">Contact Us</h1>
            </div>
            </div>
            <div className="py-3 flex flex-col gap-3 text-sm">
                    <div className="bg-[#F0F0F0] p-3 -mx-3">
                        <div className="flex gap-2 items-center">
                            <img src={EmailImg} />
                            <h2 className="text-[#4FC2CA] text-xl -ml-2">Email</h2>
                        </div>
                        <p className="text-[#161616] text-sm font-semibold">youdra.info@gmail.com</p>
                    </div>
                    <div className="bg-[#F0F0F0] p-3 -mx-3">
                        <div className="flex gap-2 items-center">
                            <img src={PersonImg} />
                            <h2 className="text-[#4FC2CA] text-xl">Contact Us</h2>
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
            <div className="my-6">
                <h2 className="uppercase text-black font-bold text-center text-2xl">Connect with us</h2>
                <div className="flex flex-col gap-3 mt-8">
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
                        <img src={EmailOutlineImg} />
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
                    <textarea
                      className="bg-white border border-[#B4B4B4] rounded-[32px] pl-4 pr-12 py-3 w-full"
                      placeholder="Message"
                      rows={4}
                    />
                    <div className="absolute right-4 top-4">
                        <img src={MessageImg} />
                    </div>
                </div>
                <div className="mt-2">
                <button className="bg-[#4FC2CA] uppercase font-my-regular rounded-full py-4 px-12 text-white text-sm">send</button>
                </div>
                </div>
            </div>
        </div>
    );
}