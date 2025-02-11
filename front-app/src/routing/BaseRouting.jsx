import { Routes, Route } from "react-router-dom";
import { PublicRouting } from "./public/PublicRouting";

export const BaseRouting = () => {
    return (
        <div className="h-screen w-full">
            <Routes >
                <Route path="/*" element={<PublicRouting />} />
            </Routes>
        </div>
    );
}
