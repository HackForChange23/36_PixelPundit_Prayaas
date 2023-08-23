'use client';
import React from 'react'
import AppBar from "@/components/AppBar";
import "../profile/profile.css";
import { AiFillFileText } from "react-icons/ai";
import { Select, Option } from "@material-tailwind/react";
import Navbar from '@/components/Navbar';

const profile = () => {

  return (
    <div className=" bg-gradientbg min-h-screen ">
      <AppBar />
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <div className="justify-center flex align-middle">
          <div className="w-[327px] h-[110.27px] mt-[83px] border rounded-[28px] bg-[#355c43] border-none profiled">
               <div className='image'><img src=''></img></div>
               <div className='details'>
                   <div className='name'>LAAL MOHAN</div>
                   <div className='pan_card'>FYUPP2092</div>
               </div>
          </div>
        </div>
        <div className="h-10 justify-center flex-col mt-[20px]">
          <div className=" typo w-[85%] h-auto flex items-center justify-start align-middle text-black font-bodyFont text-sm border-black ml-[30px]">
           ACCOUNT
          </div>
          <div className='w-[95%] ml-[10px] mt-[5px] bg-black h-[2px]'></div>
          <div className='options mt-[30px] flex-col'>
             <div className='out mb-3 '><div className='option_name '>Change Location</div><div>&gt;</div></div>
             <div className='out mb-3 '><div className='option_name'>My Subscription</div><div>&gt;</div></div>
             <div className='out mb-3'><div className='option_name'>Update Details</div><div>&gt;</div></div>
             <div className='out mb-3'><div className='option_name'>My Loan Application</div><div>&gt;</div></div>
          </div>
          <button className='btn typo'>LOGOUT</button>
          <div className='w-[95%] ml-[10px] mt-[5px] bg-black h-[2px]'></div>
          <div className='typo del'>DELETE ACCOUNT</div>
          <div className="w-[65%]">
            <label
              for="first_name"
              className="ml-4 mt-2 block mb-[1px] text-xs font-medium text-gray-900"
            >
              Reason for deleting choose below
            </label>
            {/* <CenterCont> */}
            <Select
              color="blue"
              className="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg h-10 flex items-center justify-center"
            >
              <Option>not a farmer anyomore </Option>
              <Option>didnt like it </Option>
             
            </Select>
            {/* </CenterCont> */}
          </div>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};


 export default profile;
