"use client";
import React, { useState } from "react";
import AppBar from "@/components/AppBar";
import "../signup2/Details.css";
import { AiFillFileText } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BiPhone } from "react-icons/bi";
import { Select, Option } from "@material-tailwind/react";
import {
  BsFillTelephoneFill,
  BsPhoneFill,
  BsFillPersonVcardFill,
} from "react-icons/bs";
import CenterCont from "@/components/CenterCont";
const Details = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className=" bg-gradientbg min-h-screen">
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
          {/* <div className="overflow-hidden w-full h-[80%] absolute bottom-0 flex flex-col justify-start items-center">
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-white"
              type="button"
            >
              Choose your role
              <IoIosArrowDropdownCircle className="ml-2 text-black text-xl" />
            </button>
            {dropdownOpen && (
              <div
                id="dropdown"
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-black bg-slate-50"
                  // aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Farmer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Service Provider
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      F.P.O. Manager
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div> */}
        </div>
        <CenterCont className="flex flex-">
          <div className="relative mb-4 w-[75%] ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <AiFillFileText className="text-black" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Aadhaar Card"
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
            />
          </div>
        </CenterCont>
        {/* <CenterCont>
          <div className="relative mb-6 w-[75%]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BsFillPersonVcardFill className="text-black" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Use Your Current Loaction"
            />
          </div>         
        </CenterCont> */}
        <CenterCont>
          <div className="w-[80%] flex items-center justify-center relative">
            <div className="w-1/2 h-[1px] bg-black"></div>
            <p className="text-lg text-black/80 bg-transparent p-3">OR</p>
            <div className="w-1/2 h-[1px] bg-black"></div>
          </div>
        </CenterCont>
        <CenterCont>
          <div className="w-[75%]">
            <label
              for="first_name"
              className="block mb-[1px] text-xs font-medium text-gray-900"
            >
              Flat, House no., Building, Company, Apartment
            </label>
            <div className="relative mb-3 w-auto ">
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                placeholder=""
              />
            </div>
          </div>
        </CenterCont>

        <CenterCont>
          <div className="w-[75%]">
            <CenterCont>
              <label
                for="first_name"
                className="block mb-[1px] text-xs font-medium text-gray-900"
              >
                Area, Street, Sector, Village
              </label>
            </CenterCont>

            <div className="relative mb-3 w-auto ">
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                placeholder=""
              />
            </div>
          </div>
        </CenterCont>

        <div className="flex justify-center gap-10">
          <div className="w-[35%]">
            <label
              for="first_name"
              className="block mb-[1px] text-xs font-medium text-gray-900"
            >
              Pincode
            </label>
            <div className="relative mb-4 w-auto ">
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                placeholder=""
              />
            </div>
          </div>

          <div className="w-[35%]">
            <label
              for="first_name"
              className="block mb-[1px] text-xs font-medium text-gray-900"
            >
              States
            </label>
            {/* <CenterCont> */}
            <Select
              color="blue"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg h-10 flex items-center justify-center"
            >
              <Option>Maharashtra</Option>
              <Option>Karnataka</Option>
              <Option>Madhya Pradesh</Option>
              <Option>Andhra Pradesh</Option>
              <Option>Gujarat</Option>
            </Select>
            {/* </CenterCont> */}
          </div>
        </div>

        <CenterCont>
            <button
              type="button"
              className="bg-[#2B2A1E] h-10 rounded-2xl w-[75%] text-white"
            >
              Submit
            </button>
          </CenterCont>
      </div>
    </div>
  );
};

export default Details;
