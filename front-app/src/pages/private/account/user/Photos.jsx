import React, { useState } from 'react';
import UserMenu from '../../../../components/userMenu/UserMenu';
import ImageGalleryImg from "../../../../assets/images/outline/image-gallery.png";

const Photos = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage({ file, preview: imageUrl });
        }
    };

    const handleSubmit = async () => {
        if (!selectedImage) {
            alert("Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedImage.file);

        try {
            const response = await fetch("YOUR_API_ENDPOINT", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                alert("Image uploaded successfully");
                setSelectedImage(null);
            } else {
                alert("Error uploading image");
            }
        } catch (error) {
            alert("An error occurred while uploading");
        }
    };

    return (
        <div className="bg-white text-black pb-[100px] mt-[55px]">
            <UserMenu />
            <div className="mt-8 rounded-xl w-full flex items-center justify-center" style={{ minHeight: 'calc(60vh - 155px)' }}>
                <div className="flex flex-col p-8 rounded-lg items-center bg-[#e6e4e4]">
                    {selectedImage ? (
                        <img src={selectedImage.preview} className="w-32 h-32 rounded-lg object-cover" alt="Preview" />
                    ) : (
                        <img src={ImageGalleryImg} className="size-12 text-black" alt="Image Gallery" />
                    )}
                    <input type="file" accept="image/*" onChange={handleImageChange} className="mt-4" />
                </div>
            </div>
            <div className="mt-4 mb-8 flex items-center justify-center">
                <button
                    className="bg-[#4FC2CA] uppercase font-my-regular rounded-full py-4 px-12 text-white text-sm"
                    onClick={handleSubmit}
                    disabled={!selectedImage}
                >
                    Modulation
                </button>
            </div>
        </div>
    );
};

export default Photos;
