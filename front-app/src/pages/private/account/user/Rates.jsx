import React from 'react'
import UserMenu from '../../../../components/userMenu/UserMenu'
import ratesImg from "../../../../assets/images/user/rating.png"
import { Button } from '@mui/material'
const Rates = () => {
    return (
        <div className="bg-white text-black pb-[100px] mt-[55px]">
            <UserMenu />
            <div className='m-4 '>
            <div className='my-8 flex space-x-1'>
            <img src={ ratesImg } />
            <p className='p-1 text-base'>0 Rating</p>
            </div>
            <Button
                    variant="contained"
                    fullWidth
                    style={{
                        backgroundColor: "#D9D9D9",
                        color: "black",
                        borderRadius: "30px",
                        fontWeight: "semibold",
                        fontSize: "15px",
                        padding: "10px",
                        letterSpacing: "0.5px",
                    }}

                >
                    Modulation
                </Button>
                </div>
        </div>
    )
}

export default Rates