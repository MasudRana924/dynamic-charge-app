import React from 'react';

const Error = () => {
    const searchData = new URLSearchParams(window.location.search)
    const message = searchData.get('message')
    return (
        <div className="flex flex-1 justify-center items-center border rounded-lg h-64 m-4">
             <div className="text-red-500 text-xl font-bold flex justify-center items-center h-svh">{message}</div>
        </div>
    );
};

export default Error;