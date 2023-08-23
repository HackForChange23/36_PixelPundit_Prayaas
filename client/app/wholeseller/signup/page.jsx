"use client"
import React, { useState } from "react";
import AppBar from "@/components/AppBar";
import "./Details.css";
import { BsFillTelephoneFill, BsFillPersonVcardFill } from "react-icons/bs";
import CenterCont from "@/components/CenterCont";
import axios from "axios";
import { useRouter } from 'next/navigation';
import {url} from '../../utils'


const Details = () => {
  const router = useRouter(null);

  const [contact_no, setContactNo] = useState("");
  const [gstin, setGstin] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const clearInputFields = () => {
    setContactNo("");
    setGstin("");
    setEmail("");
    setName("");
    setPassword("");
    setAddress("");
  };

  const registerWholeseller = async () => {
    try {
      // const res = await axios.post(
      //   `${url}wholeseller/register`,
      //   {
      //     contact_no,
      //     gstin,
      //     email,
      //     name,
      //     password,
      //     address,
      //   }
      // );
      // console.log(res);
      clearInputFields();
      router.push("/wholeseller/login"); // Use router.push() with lowercase "r"
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradientbg min-h-screen">
      <AppBar />
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <div className="justify-center flex align-middle">
          <div className="w-[75%] h-20 flex verify justify-center align-middle font text-2xl text-black font-titleFont">
            Verify Your Details
          </div>
        </div>
        <div className="h-10 justify-center flex align-middle">
          <div className="w-[75%] h-auto flex items-center justify-center align-middle text-black font-bodyFont text-sm border-black border-b-2">
            Help us know you better
          </div>
        </div>
        <br />
        <div className=" overflow-hidden w-full h-[80%] absolute bottom-0 flex flex-col justify-start items-center">
          {/* Dropdown code */}
        </div>

        {/* Input fields */}
        <CenterCont>
          <div className="relative mb-4 w-[75%]">
            
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </CenterCont>
        <CenterCont>
          <div className="relative mb-4 w-[75%]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BsFillTelephoneFill className="text-black" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Phone Number"
              value={contact_no}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </div>
        </CenterCont>

        <CenterCont>
          <div className="relative mb-4 w-[75%]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5">
              <BsFillPersonVcardFill className="text-black" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="GST Number"
              value={gstin}
              onChange={(e) => setGstin(e.target.value)}
            />
          </div>
        </CenterCont>

        <CenterCont>
          <div className="relative mb-4 w-[75%]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5">
              <BsFillPersonVcardFill className="text-black" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </CenterCont>

        <CenterCont>
          <div className="relative mb-4 w-[75%]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5">
              <BsFillPersonVcardFill className="text-black" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </CenterCont>

        <CenterCont>
          <div className="w-[75%]">
            <label
              htmlFor="first_name"
              className="block mb-[1px] text-xs font-medium text-gray-900"
            >
              Password:
            </label>
            <div className="relative mb-3 w-auto ">
              <input
                type="password"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </CenterCont>

        {/* <CenterCont>
          <button
            className="bg-[#2B2A1E] h-10 rounded-2xl w-[75%] text-white"
            onClick={()=>{
              console.log("hfsjf");
            }}
          >
            Submit
          </button>
        </CenterCont> */}
        <CenterCont>
            <button onClick={registerWholeseller} style={{zIndex: 1}}
              type="submit"
              className="bg-[#2B2A1E] h-10 rounded-2xl w-[75%] text-white"
            >
              Submit
            </button>
          </CenterCont>
          <CenterCont>
            <button style={{zIndex: 1, marginTop: '15px'}}
              type="submit"
              className="bg-[#2B2A1E] h-10 rounded-2xl w-[75%] text-white" 
              onClick={()=>{registerWholeseller();}}
            >
              Go to Login
            </button>
          </CenterCont>
      </div>
    </div>
  );
};

export default Details;
