import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../../pages/private/Home";
import { Navbar } from "../../components/navbar/Navbar";
import { BottomBar } from "../../components/bottombar/BottomBar";
import { Events } from "../../pages/private/events/Events";
import { Fragment } from "react";
import { EventDetails } from "../../pages/private/events/EventDetails";
import { EventMap } from "../../pages/private/events/EventMap";
import { Account } from "../../pages/private/account/Account";
import { AboutUs } from "../../pages/private/account/aboutus/AboutUs";
// import { PersonalDetails } from "../../pages/private/account/user/PersonalDetails";
import PersonalDetails from "../../pages/private/account/user/PersonalDetails";
import Address from "../../pages/private/account/user/Address";
import Photos from "../../pages/private/account/user/Photos";
import YourAds from "../../pages/private/account/user/YourAds";
import ActivityInfo from "../../pages/private/account/user/ActivityInfo";
import Rates from "../../pages/private/account/user/Rates";
import TermsConditions from "../../pages/private/account/terms&Conditions/Terms&Condition";
import PrivacyPolicy from "../../pages/private/account/privacyPolicy/PrivacyPolicy";
export const PrivateRouting = () => {
    const location = useLocation()
    const routesWithBars = ["/home", "/home/account", "/home/account/about-us", "/home/account/contact-us", "/home/events", "/home/events/map", "/home/events/:id", "/home/reserve", "/home/account/user", "/home/account/user/personal-details", "/home/account/user/address", "/home/account/user/photos", "/home/account/user/your-ads", "/home/account/user/activity-info", "/home/account/user/rates", "/home/account/terms-conditions", "/home/account/privacy-policy"];
    const showBars = routesWithBars.includes(location.pathname);
    return (
        <div className="min-h-screen w-full">
            {showBars&&(
            <Fragment>
              <Navbar />
              <BottomBar />
            </Fragment>
        )}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:id" element={<EventDetails />} />
                <Route path="/events/map" element={<EventMap />} />
                <Route path="/account" element={<Account />} />
                <Route path="/account/about-us" element={<AboutUs />} />
                <Route path="/account/user/personal-details" element={<PersonalDetails />} />
                <Route path="/account/user/address" element={<Address />} />
                <Route path="/account/user/photos" element={<Photos />} />
                <Route path="/account/user/your-ads" element={<YourAds />} />
                <Route path="/account/user/activity-info" element={<ActivityInfo />} />
                <Route path="/account/user/rates" element={<Rates />} />
            </Routes>
        </div>
    );
};