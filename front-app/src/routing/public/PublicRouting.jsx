import { Route, Routes } from "react-router-dom";
import { Login } from "../../pages/public/login/Login";
import { Registration } from "../../pages/public/register/Registration";
import { Landing } from "../../pages/public/landing/Landing";
import {PrivateRouting} from "../private/PrivateRouting"
export const PublicRouting = () => {
    return (
        <div className="min-h-screen w-full">
            <Routes >
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/home/*" element={<PrivateRouting />} />
            </Routes>
        </div>
    );
};
