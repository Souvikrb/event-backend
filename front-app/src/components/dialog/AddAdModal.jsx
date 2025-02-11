import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    Button,
    Switch,
    TextField,
    Checkbox,
    Slide,
    TextareaAutosize,
} from "@mui/material";
import CloseButtonImg from "../../assets/images/close-button.png";
import InfoIcon from "@mui/icons-material/Info";
import ImageGalleryImg from "../../assets/images/outline/image-gallery.png"
import MapImg from '../../assets/images/outline/map.png'
const AddAdModal = ({ isOpen, onClose }) => {

    return (
        <Dialog fullScreen sx={
            {
                '& .MuiDialog-paper': {
                    borderRadius: '0',
                    margin: '20px',
                    width: '100%',
                    maxWidth: '100%',
                    height: '100%',
                    maxHeight: '100%',
                    overflow: 'hidden',
                }
            }
        } open={isOpen} onClose={onClose}>
            <DialogContent className="bg-white p-4 sm:p-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg sm:text-xl text-[#4FC2CA] font-semibold">
                        ADD AD
                    </h2>
                    <img
                        src={CloseButtonImg}
                        className="cursor-pointer"
                        onClick={onClose}
                        alt="Close"
                    />
                </div>
                <div className=" rounded-xl w-full flex items-center justify-center" style={{ minHeight: 'calc(60vh - 155px)' }}>
                    <div className="flex flex-col p-8 rounded-lg items-center bg-[#e6e4e4]">
                        <img src={ImageGalleryImg} className="size-12 text-black" alt="Image Gallery" />
                        <p className="uppercase text-lg font-semibold mt-4">Add a photo</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3  mt-2">

                    <input
                        className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
                        placeholder="Name"

                    />
                    <input
                        className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
                        placeholder="dd-mm-yyyy"

                    />
                    <input
                        className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
                        placeholder="Price"

                    />
                    <div>
                        <label className="text-gray-500">Start Timing</label>
                        <input
                            className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
                            placeholder="----   --"

                        />
                    </div>
                    <div>
                        <label className="text-gray-500">Start Timing</label>
                        <input
                            className="bg-white border border-[#B4B4B4] text-gray-500 rounded-full pl-4 pr-12 py-3 w-full"
                            placeholder="----   --"

                        />
                    </div>
                    <TextareaAutosize
                        className="bg-white border border-[#B4B4B4] text-gray-500 rounded-xl pl-4 pr-12 py-3 w-full resize-none"
                        placeholder="Description"
                        minRows={4}
                    />

                    <div className="mt-2 rounded-xl overflow-hidden border border-[#B4B4B4]">
                        <img src={MapImg} />
                    </div>
                    <Button
                        variant="contained"
                        fullWidth
                        style={{
                            backgroundColor: "#3ccfcf",
                            color: "black",
                            borderRadius: "30px",
                            fontWeight: "semibold",
                            fontSize: "15px",
                            padding: "10px",
                            letterSpacing: "0.5px",
                        }}

                    >
                        Conservation
                    </Button>
                </div>

            </DialogContent>
        </Dialog>
    );
};

export default AddAdModal;
