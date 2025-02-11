import React, { useEffect, useState } from 'react';
import UserMenu from '../../../../components/userMenu/UserMenu';
import { Button } from '@mui/material';

const ActivityInfo = () => {
    const [formData, setFormData] = useState({
        destination: '',
        definition: '',
        workingHours: ''
    });
    useEffect(() => {
        const fetchData = async () => {
            const response = await getApiHandler(`${ApiPaths.users}`);
            console.log(response);
            setFormData(response.data);

        };
        fetchData();
    }, [])
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!formData.destination.trim()) newErrors.destination = "Destination is required";
        if (!formData.definition.trim()) newErrors.definition = "Definition is required";
        if (!formData.workingHours.trim()) newErrors.workingHours = "Working hours are required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;
        try {
            const response = await postApiHandler(ApiPaths.activity, formData);
            alert(response.data);
        } catch (error) {
            alert("Error submitting form");
        }
    };

    return (
        <div className="bg-white text-black pb-[100px] mt-[55px]">
            <UserMenu />
            <div className="flex flex-col gap-3 px-3 my-8">
                <input
                    name="destination"
                    className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
                    placeholder="Destination"
                    value={formData.destination || "Enter destination"}
                    onChange={handleChange}
                />
                {errors.destination && <p className="text-red-500 text-sm">{errors.destination}</p>}

                <input
                    name="definition"
                    className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
                    placeholder="Definition"
                    value={formData.definition || "Enter definition"}
                    onChange={handleChange}
                />
                {errors.definition && <p className="text-red-500 text-sm">{errors.definition}</p>}

                <input
                    name="workingHours"
                    className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
                    placeholder="Working Hours"
                    value={formData.workingHours || "Enter working hours"}
                    onChange={handleChange}
                />
                {errors.workingHours && <p className="text-red-500 text-sm">{errors.workingHours}</p>}

                <Button
                    variant="contained"
                    fullWidth
                    style={{
                        backgroundColor: "#3ccfcf",
                        color: "white",
                        borderRadius: "30px",
                        fontWeight: "semibold",
                        fontSize: "15px",
                        padding: "10px",
                        letterSpacing: "0.5px",
                    }}
                    onClick={handleSubmit}
                >
                    Modulation
                </Button>
            </div>

        </div>
    );
}

export default ActivityInfo;
