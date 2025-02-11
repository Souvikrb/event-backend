import ChevronLeftImg from "../../../assets/images/chevron-left.png"
import ShareImg from "../../../assets/images/share.png"
import SaveImg from "../../../assets/images/save.png"
import EventsImg1 from "../../../assets/images/events/image1high.png"
import EventsImg2 from "../../../assets/images/events/image2high.png"
import EventsImg3 from "../../../assets/images/events/image3high.png"
import EventsImg4 from "../../../assets/images/events/image4high.png"
import ApproveImg from "../../../assets/images/approve.png"
import AlarmImg from "../../../assets/images/alarm.png"
import TagImg from "../../../assets/images/tag.png"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import useApiHandlers from "../../../api/ApiHandlers"
import ApiPaths from "../../../api/ApiPaths"
import StarIcon from '@mui/icons-material/Star';
export const Events = () => {
    const { getApiHandler } = useApiHandlers()
    const navigation = useNavigate()
    const [eventlist, setEventlist] = useState([]);
    useEffect(() => {
        fetchEvent();
    }, [])
    const fetchEvent = async () => {
        const response = await getApiHandler(`${ApiPaths.event}`);
        if (response.status === 200) {
            setEventlist(response.data);
            console.log(response)
        }
    };
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${day}-${month}-${year}`;
      };
    return (
        <div className="bg-white">
            <div className="bg-white !text-black px-3 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
                <div>
                    <Link to={"/home"} className="h-10 w-full flex items-center justify-center">
                        <img src={ChevronLeftImg} alt="Logo" />
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <div className="h-10 w-6/12 flex items-center justify-center">
                        <img src={ShareImg} alt="Logo" />
                    </div>
                    <div className="h-10 w-6/12 flex items-center justify-center">
                        <img src={SaveImg} alt="Logo" />
                    </div>
                </div>
            </div>
            <div className="mt-[55px] p-3 divide-y divide-gray-400">
                {eventlist && eventlist.map((list, index) => (
                    <div key={index} onClick={() => { navigation(`/home/events/${list._id}`) }} className="py-4">
                        {list.profileImage ? (
                            <img
                                src={`${ApiPaths.site_url}${list.profileImage}`}
                                className="w-full h-[220px]"
                            />
                        ) : (
                            <img src={EventsImg2} className="w-full h-[220px]" />
                        )}
                        <div className="pb-2 pt-4 flex justify-between items-center">
                            <h2 className="text-xl text-[#4FC2CA] font-semibold">{list.eventName}</h2>
                            <div className="flex items-center">
                                <StarIcon style={{ color: "gold" }} />
                                <StarIcon style={{ color: "gold" }} />
                                <StarIcon style={{ color: "gold" }} />
                                <StarIcon style={{ color: "gold" }} />
                                <StarIcon style={{ color: "gray" }} />
                            </div>
                        </div>
                        <p className="text-sm text-[#161616]">{list.eventDescription}</p>
                        <div className="py-3 flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="w-8 -mr-2">
                                    <img src={ApproveImg} className="size-5" />
                                </div>
                                <p className="text-black text-sm"><strong>Date : </strong><span>{list.dateTime && formatDate(list.dateTime[0].date)}</span></p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-black inline-flex gap-2 text-sm"><strong>Time : </strong><img src={AlarmImg} className="size-5" /> <span>03:30 pm</span></p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <div className="w-8 -mr-2">
                                    <img src={TagImg} className="size-7" />
                                </div>
                                <p className="text-black text-sm"><strong>Price : </strong><span>Cost Start From {list.price} SAR</span></p>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    );
}