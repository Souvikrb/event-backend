import NavigationImg from "../../assets/images/navigation.png"
import SearchImg from "../../assets/images/search.png"
import GroupImg from "../../assets/images/Group.png"
import CutlateImg from "../../assets/images/cutlate.png"
import FootballImg from "../../assets/images/football.png"
import CupImg from "../../assets/images/cup.png"
import StageImg from "../../assets/images/stage.png"
import DramaImg from "../../assets/images/drama.png"
import BasketImg from "../../assets/images/basket.png"
import ConcertImg1 from "../../assets/images/concert/image1.png"
import EventImg1 from "../../assets/images/events/image1.png"
import EventImg2 from "../../assets/images/events/image2.png"
import CategoryImg1 from "../../assets/images/category/image1.png"
import CategoryImg2 from "../../assets/images/category/image2.png"
import ApproveImg from "../../assets/images/approve.png"
import RightArrowImg from "../../assets/images/right-arrow.png"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import useApiHandlers from "../../api/ApiHandlers"
import ApiPaths from "../../api/ApiPaths"
export const Home = () => {
  const { getApiHandler } = useApiHandlers()
  const [categorylist, setCategorylist] = useState([]);
  const [eventlist, setEventlist] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    fetchCategory();
    fetchEvent();
  }, [])
  const fetchCategory = async () => {
    const response = await getApiHandler(`${ApiPaths.master_list}/MASTER_CATEGORY`);
    if (response.status === 200) {
      setCategorylist(response.data);
    }
  }
  const fetchEvent = async () => {
    const response = await getApiHandler(`${ApiPaths.event}`);
    if (response.status === 200) {
      setEventlist(response.data);
      console.log(response)
    }
  };

  return (
    <div className="bg-white text-black pb-[100px] mt-[55px]">
      <h1 className="text-base text-center font-my-regular max-w-[75%] mx-auto py-4">Book the best events, Experiences and Shows</h1>
      <div className="px-3">
        <div className="flex gap-3 items-center w-full">
          <div className="relative w-full">
            <div className="absolute left-4 top-0 bottom-0 flex items-center justify-center">
              <img src={SearchImg} />
            </div>
            <input
              type="search"
              id="Search"
              className="w-full border border-[#4FC2CA] bg-white text-black text-sm rounded-full py-2.5 px-6 pl-10 outline-none focus:ring-1"
              placeholder="Search"
            />
          </div>
          <div className="border border-gray-300 rounded-[100%] bg-[#ECECEC] h-10 w-12 flex items-center justify-center">
            <img src={NavigationImg} className="size-5" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-3 gap-y-4 py-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <img src={GroupImg} className="w-[43px] h-[36px]" />
            <span className="text-[10px] my-font-regular font-medium">Things to do</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src={CutlateImg} className="" />
            <span className="text-[10px] my-font-regular font-medium">Restaurants</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src={FootballImg} className="w-[43px] h-[36px]" />
            <span className="text-[10px] my-font-regular font-medium">Football</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src={CupImg} className="w-[43px] h-[36px]" />
            <span className="text-[10px] my-font-regular font-medium">Sports</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src={StageImg} className="w-[43px] h-[36px]" />
            <span className="text-[10px] my-font-regular font-medium">Concerts</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src={DramaImg} className="w-[43px] h-[36px]" />
            <span className="text-[10px] my-font-regular font-medium">Shows</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src={BasketImg} className="w-[43px] h-[36px]" />
            <span className="text-[10px] my-font-regular font-medium">Shop</span>
          </div>
        </div>
        <div className="flex overflow-x-auto -mx-3 scroll-none">
          <div className="flex flex-nowrap gap-3">
            <div className="w-[240px] h-[200px] flex-shrink-0 ml-3 relative">
              <img
                src={ConcertImg1}
                className="w-full h-[200px] rounded-md"
              />
              <div className="absolute bottom-4 left-4">
                <p className="font-my-regular text-white text-xs">Lorem ipsum dolor sit amet</p>
                <p className="text-gray-300 text-[10px]">Vivamus tristique feugiat enim, quis </p>
              </div>
            </div>
            <div className="w-[240px] h-[200px] flex-shrink-0 mr-3 relative">
              <img
                src={ConcertImg1}
                className="w-full h-[200px] rounded-md"
              />
              <div className="absolute bottom-4 left-4">
                <p className="font-my-regular text-white text-xs">LOR</p>
                <p className="text-gray-300 text-[10px]">Viva</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-[#F0F0F0] mt-4 -mx-3">
          <div className="flex justify-between items-center">
            <h2 className="font-my-regular">Our Specialist</h2>
            <Link to={"/home/events"} className="font-my-regular text-xs text-gray-500">See All</Link>
          </div>
          <div className="flex overflow-x-auto -mx-4 scroll-none mt-4">
            <div className="flex flex-nowrap gap-3">
              {eventlist && eventlist.map((list, index) => (
                <div onClick={() => { navigation(`/home/events/${list._id}`) }} className="max-w-[135px] flex-shrink-0 ml-3">
                  {list.profileImage ? (
                    <img
                      src={`${ApiPaths.site_url}${list.profileImage}`}
                      className="w-[135px] h-[135px]"
                    />
                  ) : (
                    <img
                      src={EventImg1}
                      className="w-[135px] h-[135px]"
                    />
                  )}
                  <div className="py-2 flex flex-col gap-1">
                    <div className="flex flex-row justify-between items-center text-xs pr-2">
                      <div className="flex flex-row gap-1 items-center">
                        <img src={ApproveImg} />
                        <span>{new Date(list.dateTime).toLocaleString()}</span>
                      </div>
                      <img src={RightArrowImg} className="size-5" />
                    </div>
                    <h2 className="text-sm font-semibold">{list.eventName}</h2>
                    <p className="text-[10px]">Vivamus tristique feugiat enim, quis </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 -mx-3">
          <div className="flex justify-between items-center">
            <h2 className="font-my-regular">Explore by category</h2>
            <span className="font-my-regular text-xs text-gray-500">See All</span>
          </div>
          <div className="flex overflow-x-auto -mx-4 scroll-none mt-4">
            <div className="flex flex-nowrap gap-3">
              {categorylist && categorylist.length > 0 && categorylist.map((list, index) => (
                <div className="max-w-[150px] flex-shrink-0 ml-3 relative" key={index}>
                  <img
                    src={CategoryImg1}
                    className="w-[150px] h-[200px]"
                  />
                  <div className="absolute bottom-3 left-3">
                    <p className="font-my-regular text-white text-xs">{list.DESC1}</p>
                    <p className="text-gray-300 text-[10px] whitespace-nowrap text-ellipsis max-w-[130px] overflow-hidden">Vivamus tristique feugiat enim, quis </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}