import AppBar from "@/components/AppBar";
import React from "react";
import Inputfield from "@/components/Inputfield";
import CenterCont from "@/components/CenterCont";
import { BsPersonVcard } from "react-icons/bs";
import { HiCurrencyRupee } from "react-icons/hi"
import "../microcreditregister/microcredits.css"
const register = () => {
  return (
    <>
      <AppBar />
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <div className="justify-center flex items-baseline credittitle">
          <div className="w-[75%] h-20 flex verify justify-center align-baseline font text-2xl text-black font-titleFont">
            <p className="credittitle flex flex-col justify-end">
              Micro-Credit Loans
            </p>
          </div>
        </div>
        <div className="h-10 justify-center flex align-middle">
          <div className="w-[75%] h-auto flex items-center justify-center align-middle text-black font-bodyFont text-sm border-black border-b-2">
            Get Help Together
          </div>
        </div>
        <div className="mt-3">
          <CenterCont>
            <div className="w-[75%]">
              <label
                for="first_name"
                className="block mb-[1px] text-sm font-bold text-gray-900"
              >
                Loan needed
              </label>
              <div className="relative mb-6 w-auto ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <HiCurrencyRupee className="text-black" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                  placeholder="10000"
                />
              </div>
            </div>
          </CenterCont>
          <div className="h-10 justify-center flex align-middle">
            <div className="w-[75%] h-auto flex items-center justify-center align-middle text-black text-2xl border-black border-b-2 mb-3 font-titleFont">
              Add Members
            </div>
          </div>

          <CenterCont>
            <div className="w-[75%]">
              <label
                for="first_name"
                className="block mb-[1px] text-sm font-bold text-gray-900"
              >
                Member 1*
              </label>
              <div className="relative mb-2 w-auto ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <BsPersonVcard className="text-black" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                  placeholder="Enter Prayaas Id"
                />
              </div>
            </div>
          </CenterCont>
          <CenterCont>
            <div className="relative mb-4 w-[75%]">
              {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3.5">
                {/* <BsFillPersonVcardFill className="text-black" /> 
              </div> */}
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Name"
              />
            </div>
          </CenterCont>

          <CenterCont>
            <div className="w-[75%]">
              <label
                for="first_name"
                className="block mb-[1px] text-sm font-bold text-gray-900"
              >
                Member 2 *
              </label>
              <div className="relative mb-2 w-auto ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <BsPersonVcard className="text-black" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                  placeholder="Enter Prayaas Id"
                />
              </div>
            </div>
          </CenterCont>
          <CenterCont>
            <div className="relative mb-4 w-[75%]">
              {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3.5">
                {/* <BsFillPersonVcardFill className="text-black" /> 
              </div> */}
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Name"
              />
            </div>
          </CenterCont>

          <CenterCont>
            <div className="w-[75%]">
              <label
                for="first_name"
                className="block mb-[1px] text-sm font-bold text-gray-900"
              >
                Member 3 
              </label>
              <div className="relative mb-2 w-auto ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <BsPersonVcard className="text-black" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                  placeholder="Enter Prayaas Id"
                />
              </div>
            </div>
          </CenterCont>
          <CenterCont>
            <div className="relative mb-4 w-[75%]">
              {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3.5">
                {/* <BsFillPersonVcardFill className="text-black" /> 
              </div> */}
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Name"
              />
            </div>
          </CenterCont>
          <CenterCont>
            <button
              type="button"
              className="bg-[#2B2A1E] h-10 rounded-2xl w-[75%] text-white"
            >
              Apply
            </button>
          </CenterCont>
        </div>
      </div>
    </>
  );
};

export default register;
