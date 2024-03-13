import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Box, Modal, Typography } from '@mui/material';
import PaymentModal from './PaymentModal';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "450px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};
const textStyle = {
    textAlign: "center",
    color: "blue",
    fontFamily: "cursive",
    fontSize: "24px",
};
const Home = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const pay = async () => {
        try {
           
            const { data } = await axios.post('http://localhost:5000/api/bkash/payment/create', { amount: 1, orderId: 1 }, { withCredentials: true });
            window.location.href = data.bkashURL
        } catch (error) {
            console.log(error.response.data)
        }
    }
    const createAgreement = async () => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/bkash/create/agreement', { amount: 1, orderId: 1 }, { withCredentials: true });
            window.location.href = data.bkashURL;
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return (
        <div className="flex flex-1 justify-center items-center h-svh">
            <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                        src="ghg"
                        alt=""
                        className="h-64 w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>

                <div className="py-5 text-start">

                    <span className="block text-sm ml-4 font-semibold text-gray-600 dark:text-white">Test Product</span>
                    <span className="block text-sm mt-4 ml-4 font-semibold text-gray-600 dark:text-white">Test Price 1 TK</span>
                    <div className="flex justify-between gap-4 m-4 mb-8">
                        <button className="bg-black text-white  mt-4 w-2/4 h-10 border rounded-lg border-black " onClick={pay}>Buy Now </button>
                        <button className="bg-black text-xs text-white  mt-4 w-2/4 h-10 border rounded-lg border-black " onClick={createAgreement}>Buy with agreement </button>

                    </div>

                    <Link to="/cart" className="mt-8 ml-4 p-2 bg-black text-white  w-3/4 h-10 border rounded-lg border-black ">
                        Add to Cart
                    </Link>

                    <Link to="" className="mt-8 ml-4 p-2 bg-blue-500 text-white  w-full h-10 border rounded-lg border-blue-500 "
                    onClick={handleOpen}>
                        Pay Tution Fees
                    </Link>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={style}>
                    <Typography variant="h6" style={textStyle}>
                        Create Payment
                    </Typography>
                    <PaymentModal handleClose={handleClose}/>
                </Box>
            </Modal>
        </div>
    );
};

export default Home;