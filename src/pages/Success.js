import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className=" flex flex-1 justify-center items-center h-64 w-3/4 lg:w-1/4 mx-auto  lg:mt-32 border rounded-lg">
            <div className="m-4">
                <h1 className="text-lg font-medium text-violet-500 text-start">Payment Success</h1>
                <h1 className="text-4xl font-medium text-gray-900 text-start mt-4">Thanks for Order</h1>
                <p className="text-lg font-medium text-gray-400 text-start mt-4">We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation very soon!</p>
                <Link to="/">
                    <h1 className="text-sm font-medium text-violet-500 text-start mt-4">Back to Home </h1>
                </Link>
            </div>
        </div>
    );
};

export default Success;