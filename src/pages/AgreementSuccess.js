import React from 'react';
import { Link } from 'react-router-dom';

const AgreementSuccess = () => {
    return (
        <div className=" flex justify-center items-center h-64  w-3/4 lg:w-1/4 mx-auto  lg:mt-32 border rounded-lg">
            <div className="m-4">
                <h1 className="text-lg font-medium text-green-500 text-start">Agreement Create Success</h1>

                <Link to="/">
                    <h1 className="text-sm font-medium text-violet-500 text-start mt-4">Back to Home </h1></Link>
            </div>
        </div>
    );
};

export default AgreementSuccess;