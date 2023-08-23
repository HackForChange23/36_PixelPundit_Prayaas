"use client";
import React from "react";
// import React, { useState } from "react";
import AppBar from "@/components/AppBar";
// import { AiFillFileText } from "react-icons/ai";
import CenterCont from "@/components/CenterCont";
import Navbar from "@/components/Navbar";
const farmersell = () => {

  return (
    <div className=" bg-gradientbg min-h-screen">
      <AppBar />
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <div className="justify-center flex align-middle">
          <div className="w-[75%] h-20 flex verify justify-center align-middle font text-2xl text-black font-titleFont">
            Sell Your Produce
          </div>
        </div>
        <div className="h-10 justify-center flex align-middle">
          <div className="w-[75%] h-auto flex items-center justify-center align-middle text-black font-bodyFont text-sm border-black border-b-2">
            sell and produce
          </div>
        </div>
        <br />
        <div className=" overflow-hidden w-full h-[80%] absolute bottom-0 flex flex-col justify-start items-center">
        </div>
        <CenterCont className="flex flex-">
          <div className="relative mb-4 w-[75%] ">
            {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <AiFillFileText className="text-black" />
            </div> */}
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Product Name"
            />
          </div>
        </CenterCont>
        <CenterCont>
          <div className="relative mb-4 w-[75%]">
            {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BsFillTelephoneFill className="text-black" />
            </div> */}
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Cost per kg"
            />
          </div>
        </CenterCont>

        <CenterCont>
          <div className="relative mb-4 w-[75%]">
            {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3.5">
              <BsFillPersonVcardFill className="text-black" />
            </div> */}
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Minimum Quantity"
            />
          </div>
        </CenterCont>

        <CenterCont>
          <div className="relative mb-4 w-[75%]">
            {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3.5">
              <BsFillPersonVcardFill className="text-black" />
            </div> */}
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Minimum Quantity"
            />
          </div>
        </CenterCont>
        
        <CenterCont>
          <button
            type="button"
            className="bg-[#2B2A1E] h-10 rounded-2xl w-[75%] text-white"
          >
            Sell
          </button>
        </CenterCont>
      </div>
      <Navbar></Navbar>
    </div>
    
  );
};

export default farmersell;
