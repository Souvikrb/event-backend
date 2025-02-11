import CalendarImg from "../../assets/images/calendar.png"
import SearchImg from "../../assets/images/search.png"
import HomeImg from "../../assets/images/home.png"
import TicketImg from "../../assets/images/ticket.png"
import UserImg from "../../assets/images/user.png"
import { Link } from "react-router-dom"
export const BottomBar = ()=>{
    return(
        <div className="bg-[#4FC2CA] p-3 grid grid-cols-5 gap-3 fixed bottom-0 left-0 right-0 z-50">
            <div className="h-full w-full flex flex-col items-center justify-center gap-2">
                <img
                src={CalendarImg}
                className="size-5"
                />
                <span className="font-my-light text-black text-[10px] whitespace-nowrap text-ellipsis">Bookings</span>
            </div>
            <div className="h-full w-full flex flex-col items-center justify-center gap-2">
                <img
                src={SearchImg}
                className="size-5"
                />
                <span className="font-my-light text-black text-[10px] whitespace-nowrap text-ellipsis">Search</span>
            </div>
            <Link to={"/home"} className="h-16 w-16 flex flex-col items-center justify-center gap-2 bg-white rounded-full -mt-12">
                <img
                src={HomeImg}
                className="size-5"
                />
            </Link>
            <div className="h-full w-full flex flex-col items-center justify-center gap-2">
                <img
                src={TicketImg}
                className="size-5"
                />
                <span className="font-my-light text-black text-[10px] whitespace-nowrap text-ellipsis">My Ticket</span>
            </div>
            <Link to={"/home/account/user/personal-details"} className="h-full w-full flex flex-col items-center justify-center gap-2">
                <img
                src={UserImg}
                className="size-5"
                />
                <span className="font-my-light text-black text-[10px] whitespace-nowrap text-ellipsis">User</span>
            </Link>
        </div>
    );
}