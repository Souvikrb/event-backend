import ChevronLeftImg from "../../../assets/images/chevron-left.png"
import ShareImg from "../../../assets/images/share.png"
import SaveImg from "../../../assets/images/save.png"
import EventsImg1 from "../../../assets/images/events/image1high.png"
import ChakraImg from "../../../assets/images/chakra.png"
import RightArrowImg from "../../../assets/images/right-arrow.png"
import ZoneMapImg from "../../../assets/images/zone-map.png"
import SendImg from "../../../assets/images/send.png"
import ApproveImg from "../../../assets/images/approve.png"
import ProviderImg from "../../../assets/images/provider.png"
import PhoneImg from "../../../assets/images/phone.png"
import TagImg from "../../../assets/images/tag.png"
import ChevronDownImg from "../../../assets/images/chevron-down.png"
import CategoryImg1 from "../../../assets/images/category/image1.png"
import CategoryImg2 from "../../../assets/images/category/image2.png"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReservationModal from "../reserve/Reservation"
import ApiPaths from "../../../api/ApiPaths"
import useApiHandlers from "../../../api/ApiHandlers"
import useResponse from "../../../customHooks/useResponse"
export const EventDetails = () => {
  const defaultFormValues = {
    eventName: "",
    eventHighlight: "",
    eventDescription: "",
    dateTime: "",
    country: "",
    city: "",
    location: "",
    profileImage: "",
    category: "",
    providerName: "",
    phone: "",
    status: "active",
    termsTitle: "",
    termsDetails: "",
    price: ""
  };

  const [formdata, setFormdata] = useState(defaultFormValues);
  const [isModalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const { getApiHandler } = useApiHandlers();
  const { notify } = useResponse();
  const [categorylist, setCategorylist] = useState([]);
  useEffect(() => {
    fetchData();
    fetchCategory();
  }, []);
  const fetchData = async () => {
    const response = await getApiHandler(`${ApiPaths.event}/${id}`);
    setFormdata(response.data);

    if (response.status === 200) {
      //setBookingdata(prv => ({ ...prv, eventId: response.data._id }))
    } else {
      notify({ title: "Error!", text: response.data, icon: "error" });
    }
  };
  const fetchCategory = async () => {
    const response = await getApiHandler(`${ApiPaths.master_list}/MASTER_CATEGORY`);
    if (response.status === 200) {
      setCategorylist(response.data);
    }
  }
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };
  return (
    <div className="bg-white">
      <div className="bg-white !text-black px-3 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        <div>
          <Link to={"/home/events"} className="h-10 w-full flex items-center justify-center">
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
        <div className="mb-4">
          {formdata.profileImage && (
            <img src={`${ApiPaths.site_url}${formdata.profileImage}`} className="w-full h-[220px]" />
          )}

          <div className="pb-2 pt-4 flex justify-between items-center">
            <h2 className="text-xl text-[#4FC2CA] font-semibold">{formdata.eventName}</h2>
          </div>
          <p className="text-sm text-[#161616]">{formdata.eventDescription} </p>
          <div className="h-px w-full bg-gray-400 my-4"></div>
          <h2 className="text-xl text-black font-semibold">Zone</h2>
          <div className="bg-[#E9E9E9] p-3 mt-3 rounded-md flex gap-3 items-center">
            <img
              src={ChakraImg}
              className="size-12"
            />
            <div>
              <h2 className="text-lg text-black">Boulevaed City</h2>
              <p className="text-xs text-gray-400">Explore more things to do</p>
            </div>
            <img
              src={RightArrowImg}
              className="size-6"
            />
          </div>
          <div className="my-6 relative rounded-xl overflow-hidden">
            <img
              src={ZoneMapImg}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.3)]">
              <div className="absolute bottom-4 right-4 left-4 grid grid-cols-2 gap-4">
                <h2 className="text-black text-sm">Boulevaed City, Riyadh Saudi Arabia</h2>
                <Link to={'/home/events/map'} className="py-1 bg-[rgba(255,255,255,0.6)] rounded-md h-12 w-full flex text-sm text-black items-center justify-evenly">
                  <img
                    src={SendImg}
                  />
                  <span className="whitespace-nowrap text-sm">Get Direction</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-gray-400 mb-4"></div>
          <div className="flex flex-col gap-3 divide-y divide-gray-300">
            <div className="flex gap-2 items-center">
              <div className="w-8 -mr-2">
                <img src={ApproveImg} className="size-5" />
              </div>
              <p className="text-black text-sm"><strong>Date : </strong>
                <span>
                  {formdata.dateTime && formdata.dateTime.length > 0 ? formatDate(formdata.dateTime[0].date): 'Not Updated'}
                </span>
              </p>
            </div>
            <div className="flex gap-2 items-center pt-3">
              <div className="w-8 -mr-2">
                <img src={TagImg} className="size-5" />
              </div>
              <p className="text-black text-sm"><strong>Price : </strong><span>Cost Start From {formdata.price} SAR</span></p>
            </div>
            <div className="flex gap-2 items-center pt-3">
              <div className="w-8 -mr-2">
                <img src={ProviderImg} className="size-5" />
              </div>
              <p className="text-black text-sm"><strong>Provider Name : </strong><span>{formdata.providerName}</span></p>
            </div>
            <div className="flex gap-2 items-center pt-3 pb-6">
              <div className="w-8 -mr-2">
                <img src={PhoneImg} className="size-5" />
              </div>
              <p className="text-black text-sm"><strong>Phone Number : </strong><span>{formdata.phone}</span></p>
            </div>

          </div>
          <div className="h-px w-full bg-gray-400 mb-4"></div>
          <h2 className="text-xl text-black font-semibold">{formdata.termsTitle}</h2>
          <div className="mt-3 relative">
            <p className="text-sm text-black">{formdata.termsDetails} </p>
            {formdata.termsDetails && (
              <div className="absolute bottom-0 h-48 left-0 right-0 bg-gradient-to-t from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.5)]">
                <div className="h-px w-full bg-gray-400 absolute bottom-0 left-0 right-0">
                  <div className="absolute left-0 right-0 flex justify-center ">
                    <div className="w-24 bg-[rgba(255,255,255,1)] h-12 -mt-6 flex items-center justify-center">
                      <img src={ChevronDownImg} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl text-black font-semibold">Other Experience</h2>
            <Link to={"/home/events"} className="font-my-regular text-xs text-gray-500">See All</Link>
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

          <div className="flex justify-between items-center mt-6 -mb-2">
            <h2 className="font-my-regular text-black text-lg"><span className="text-[#B3B3B3] font-my-regular text-sm">From</span> {formdata.price} sar</h2>
            <button onClick={handleOpenModal} className="bg-[#4FC2CA] rounded-full font-my-regular text-white py-4 px-8">Book Tickets</button>
          </div>
        </div>
      </div>
      <ReservationModal open={isModalOpen} formdata={formdata} onClose={handleCloseModal} eventId={id} />
    </div>
  );
}