'use client';
import AppBar from '@/components/AppBar';
import CenterCont from '@/components/CenterCont';
import { Button, Checkbox, Input, Typography } from '@material-tailwind/react';
import React from 'react'
import { AiFillFileText } from 'react-icons/ai';
import { useState } from 'react';

const page = () => {
  const [productname, setproductname] = useState("");
  return (
    <div className=" bg-gradientbg min-h-screen">
      <AppBar />
      <CenterCont>
        <div className="w-[75%]">
          <div className="relative mb-3 w-auto ">
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="name"

            />
          </div>
        </div>
      </CenterCont>
      <CenterCont>
        <div className="w-[75%]">
          <div className="relative mb-3 w-auto ">
            <input
              type="number"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Quality"
            />
          </div>
        </div>
      </CenterCont>
      <CenterCont>
        <div className="w-[75%]">
          <div className="relative mb-3 w-auto ">
            <input
              type="number"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Cost"
            />
          </div>
        </div>
      </CenterCont>
    </div>
  )
}

export default page;