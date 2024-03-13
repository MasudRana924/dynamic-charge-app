import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
const Cart = () => {
    const createAfterAgreement = async () => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/bkash/create/agreement/payment', { amount: 1, orderId: 1 }, { withCredentials: true });
            window.location.href = data.bkashURL;
        } catch (error) {
            console.log(error.response.data)
        }
    }
    return (

        <div className="flex justify-center items-center h-screen w-2/4 mx-auto">

            <div className="flex justify-between border rounded w-3/4 mx-auto p-4">
                <div>
                    <div className=" mt-12">
                        <h2 className="text-start text-xl font-semibold text-gray-900 mb-8">Payment Method</h2>
                        <div className="flex">

                            <input type="checkbox" checked className="checkbox checkbox-primary" />
                            <span className="ml-4 text-fuchsia-600 font-semibold" >
                                Pay With Bkash
                            </span>

                        </div>
                    </div>
                    <button className="bg-black text-white  mt-4 w-full h-10 border rounded-lg border-black " onClick={createAfterAgreement}>Buy </button>
                </div>
                <div class="mt-8 w-2/4">
                    <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                            <li class="flex py-6">
                                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center" />
                                </div>

                                <div class="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <Link href="#">Test Product</Link>
                                            </h3>
                                            <p class="ml-4">1 TK </p>
                                        </div>

                                    </div>
                                    <div class="flex flex-1 items-end justify-between text-sm">
                                        <p class="text-gray-500">Qty 1</p>

                                        <div class="flex">
                                            <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Cart;