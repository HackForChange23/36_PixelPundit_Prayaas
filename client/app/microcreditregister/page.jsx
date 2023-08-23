import AppBar from "@/components/AppBar";
import React from "react";
import Inputfield from "@/components/Inputfield";
import CenterCont from "@/components/CenterCont";
import { HiCurrencyRupee } from "react-icons/hi";
import Navbar from "@/components/Navbar";
import "./microcredits.css";
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
        <div className="mt-4">
          <CenterCont>
            <div className="w-[75%]">
              <label
                for="first_name"
                className="block mb-[1px] text-sm font-medium text-gray-900 dark:text-white"
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

          <CenterCont>
            <button
              type="button"
              className="bg-[#2B2A1E] h-10 rounded-2xl w-[75%] text-white"
            >
              Join Application
            </button>
          </CenterCont>
          <CenterCont>
            <div className="w-[80%] flex items-center justify-center relative py-2">
              <div className="w-1/2 h-[1px] bg-black"></div>
              <p className="text-lg text-black/80 bg-transparent p-3">OR</p>
              <div className="w-1/2 h-[1px] bg-black"></div>
            </div>
          </CenterCont>
          <CenterCont>
            <button
              type="button"
              className="bg-[#2B2A1E] h-10 rounded-2xl w-[75%] text-white"
            >
              Create New
            </button>
          </CenterCont>
        </div>
      </div>

      <Navbar></Navbar>

    </>
  );
};

export default register;
