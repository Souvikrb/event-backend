import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  Button,
  Switch,
  TextField,
  Checkbox,
  Slide,
} from "@mui/material";
import CloseButtonImg from "../../../assets/images/close-button.png";
import CalendarImg from "../../../../src/assets/images/reservation/img1.png";
import EmailImg from "../../../../src/assets/images/reservation/img2.png";
import InfoIcon from "@mui/icons-material/Info";
import ApiPaths from "../../../api/ApiPaths";
import useApiHandlers from "../../../api/ApiHandlers";
import useResponse from "../../../customHooks/useResponse"

function ReservationModal({ open, onClose, formdata, eventId }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [promo, setPromo] = useState(false);

  const handleGuestCount = (increment) => {
    setGuestCount((prev) => Math.max(0, prev + increment));
  };
  const sliderStyles = {
    transform: open ? 'translateY(0)' : 'translateY(100%)',
    transition: 'transform 0.7s ease-in-out',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    zIndex: 1000,
  };
  const { getApiHandler,postApiHandler } = useApiHandlers();
  const [bookingdata, setBookingdata] = useState({
    eventId: eventId,
    dateId: '',
    timeslotId: '',
    promocode: '',
    guest:0
  })
  const [timeslots, setTimeslots] = useState([]);
  const {notify} = useResponse();
  const getTimeSlot = (dateId) => {
    setSelectedDate(dateId)
    setBookingdata(prv => ({ ...prv, dateId }))
    const item = formdata.dateTime.find(data => data._id == dateId);
    const timeslots = item ? item.timeSlots : '';
    setTimeslots(timeslots);
  }
  const convertToAmPm = (time) => {
    const [hours, minutes] = time.split(":").map(Number); // Split and convert to numbers
    const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM/PM
    const convertedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    return `${convertedHours}:${minutes.toString().padStart(2, "0")} ${ampm}`; // Format the time
  };
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const bookEvent = async () => {
    console.log(guestCount);
    setBookingdata(prv=>({...prv,guest:guestCount}));
    const response = await postApiHandler(ApiPaths.booking, bookingdata);
    alert(response.data);
  }
  useEffect(() => {
    if (formdata.dateTime && formdata.dateTime.length > 0) {
      // Automatically select the first date
      const firstDate = formdata.dateTime[0];
      setSelectedDate(firstDate._id);
      getTimeSlot(firstDate._id);
    }
  }, [formdata.dateTime]); 
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
      // TransitionComponent={(props) => <Slide direction="up" {...props} />}
      // key={open ? "open" : "closed"}
      >
        <DialogContent className="bg-white p-4 sm:p-6" style={sliderStyles}>
          <div className="flex justify-between items-center">
            <h2 className="text-lg sm:text-xl text-[#4FC2CA] font-semibold">
              Reserve Now
            </h2>
            <img
              src={CloseButtonImg}
              className="cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="my-3 sm:my-4 border-b"></div>
          <div className="flex justify-between items-center">
            <p className="text-gray-700 text-normal font-semibold">
              When are you visiting?
            </p>
            <div className="flex items-center text-[#69CBD2]">
              <img
                src={CalendarImg}
                alt="calendar"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <button className="ml-2 text-[#4FC2CA] underline text-sm sm:text-base">
                Calendar
              </button>
            </div>
          </div>
          <div
            className="mt-3 overflow-x-auto whitespace-nowrap"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="inline-flex space-x-2">

              {formdata.dateTime && formdata.dateTime.length > 0 && (
                formdata.dateTime.map((d, index) => {
                  const newdate = new Date(d.date);
                  const day = newdate.getDate();
                  const month = newdate.toLocaleString("default", { month: "short" });
                  const weekday = weekdays[newdate.getDay()];
                  return (
                    <button
                      key={index}
                      onClick={() => getTimeSlot(d._id)}
                      className={`py-6 px-3 rounded-3xl border ${selectedDate === d._id
                        ? "bg-[#4FC2CA] text-white"
                        : "border-gray-300 text-gray-700"
                        }`}
                    >
                      <div className="text-sm">{weekday}</div>
                      <div className="text-lg font-medium">{day}&nbsp;{month}</div>
                    </button>

                  );

                })
              )}
            </div>
          </div>

          <div className="my-4 border-b"></div>
          {/* <p className="text-gray-800 text-lg font-semibold">
            Choose Table Place
          </p>
          <button className="mt-3 bg-[#4FC2CA] text-white py-2 px-4 rounded-full">
            Restaurant
          </button> */}
          <div className="my-3 sm:my-4 border-b"></div>
          <div className="flex items-center justify-between mb-4">
            <label className="text-gray-700 font-semibold">
              Number Of Guests
            </label>
            <div className="flex items-center border border-gray-200 rounded-full p-1">
              <button
                onClick={() => handleGuestCount(-1)}
                className=" text-gray-700 px-3 py-1 rounded-l-md"
              >
                -
              </button>
              <span className="px-4 bg-white text-gray-700">{guestCount}</span>
              <button
                onClick={() => handleGuestCount(1)}
                className=" text-gray-700 px-3 py-1 rounded-r-md"
              >
                +
              </button>
            </div>
          </div>
          <div className="my-3 sm:my-4 border-b"></div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-4">
              <label className="text-gray-700 font-semibold">
                Available Time Slots
              </label>
              <button className="capitalize border rounded-full p-2 border-[#4FC2CA] text-[#4FC2CA] font-sm text-sm">
                Add Me Waiting List
              </button>
            </div>
            <div className="flex space-x-2">
              {timeslots &&
                timeslots.map((slot, slotIndex) => {
                  const time24 = slot.stime;
                  const time12 = convertToAmPm(time24);
                  return (
                    <button onClick={(e) => setBookingdata(prv => ({ ...prv, timeslotId: slot._id }))}
                      key={slotIndex}
                      className="bg-transparent border border-gray-500 rounded-full text-gray-700 p-4  hover:bg-blue-100"
                    >
                      {time12}
                    </button>
                  );
                }

                )
              }
            </div>
          </div>
          <div className="my-3 sm:my-4 border-b"></div>

          <div className="flex items-center justify-between mb-4">
            <label className="text-gray-700 font-semibold">
              Do you have promo or coupon?
            </label>
            <Switch
              checked={promo}
              onChange={(e) => setPromo(e.target.checked)}
              color="primary"
            />
          </div>
          <div className="my-3 sm:my-4 border-b"></div>

          <div className="bg-white p-4 rounded-lg ">
            <h2 className="font-semibold text-gray-700 mb-4">Price</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Price Per Person</span>
              <span className="text-gray-900 font-semibold">{formdata.price} SR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">VAT Amount</span>
              <span className="text-gray-900 font-semibold">0.00 SR</span>
            </div>
          </div>
          <div className="my-3 sm:my-4 border-b"></div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-4">
              Enter Your Email
            </label>
            <div className="relative border border-gray-300 rounded-full p-2">
              <TextField
                fullWidth
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                      <img src={EmailImg} alt="calendar" className="w-7 h-8 " />
                    </span>
                  ),
                }}
                sx={{
                  backgroundColor: "transparent",
                  "& .MuiInputBase-root": {
                    border: "none",
                    outline: "none",
                    padding: "8px",
                  },
                }}
              />
            </div>
          </div>
          <div className="my-3 sm:my-4 border-b"></div>

          <div className="mb-4 bg-white p-4 rounded-3xl shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <InfoIcon className="text-[#4FC2CA] mr-2" />
              <span className="text-[#4FC2CA] font-sans">Useful Bits</span>
            </div>
            <ul className="list-none space-y-2 text-gray-600">
              <li className="flex items-start text-base">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-1 mr-2"></span>
                A minimum charge applies for terrace seating.
              </li>
              <li className="flex items-start text-base">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-1 mr-2"></span>
                <span>
                  {" "}
                  You can edit your reservation before 24 hours...
                  <a
                    href="#"
                    className="text-[#4FC2CA] hover:underline text-sm"
                  >
                    Show More
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="flex items-start mb-4">
            <Checkbox
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              color="primary"
            />
            <label className="text-gray-700 my-2.5">
              I’ve Read And Accept The{" "}
              <span className="text-blue-500 hover:underline">
                Terms & Conditions
              </span>
            </label>
          </div>
          <div className="my-3 sm:my-4 border-b"></div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700 font-semibold text-xl">
              Total Price
            </span>
            <span className="text-gray-900 font-semibold text-xl">{formdata.price}SR</span>
          </div>

          <Button
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#3ccfcf",
              color: "white",
              borderRadius: "30px",
              fontWeight: "semibold",
              fontSize: "20px",
              padding: "10px",
              letterSpacing: "1px",
            }}
            disabled={!termsAccepted}
            onClick={bookEvent}
          >
            RESERVE NOW
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ReservationModal;
