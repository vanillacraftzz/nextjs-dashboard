import React from "react";
import Head from "next/head.js";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data.js";

const orders = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Orders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between px-4 pt-4">
          <h2>Orders</h2>
          <h2>Welcome Back, Clint</h2>
        </div>
        <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <span>Order</span>
              <span className="sm:text-left text-right">Status</span>
              <span className="lg:block hidden">Last Order</span>
              <span className="lg:block hidden">Method</span>
            </div>
            <ul>
              {data.map((order, id) => (
                <li
                  key={id}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid gap-x-1 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                >
                  <div className="flex">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <FaShoppingBag className="text-purple-800" />
                    </div>
                    <div className="pl-4">
                      <p className="text-gray-800 font-bold">
                        ${order.total.toLocaleString()}
                      </p>
                      <p className="text-gray-800 text-sm">
                        {order.name.first}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-left text-right">
                    <span
                      id="status"
                      className={
                        order.status == "Processing"
                          ? "bg-green-200 p-2 rounded-lg"
                          : order.status == "Completed"
                          ? "bg-blue-200 p-2 rounded-lg"
                          : "bg-yellow-200 p-2 rounded-lg"
                      }
                    >
                      {order.status}
                    </span>
                  </p>
                  <p className="sm:block hidden">{order.date}</p>
                  <div className="sm:flex hidden justify-between items-center">
                    <p>{order.method}</p>
                    <BsThreeDotsVertical />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default orders;
