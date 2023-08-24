"use client";
import React from "react";
import CenterCont from "@/components/CenterCont";
import AppBar from "@/components/AppBar";
import Navbar from "@/components/Navbar";
import styles from "../../landingpage/landing.css";
import { Progress } from "@material-tailwind/react";
import { TiTick } from "react-icons/ti";
import {RxCross2} from "react-icons/rx";
const myloan = () => {
  return (
    <div className="bg-gradientbg min-h-screen">
      <AppBar />
      <CenterCont>
        <div className="w-full justify-center bg-wh flex align-middle mt-6">
          <div
            className="w-[80%] h-20 rounded-lg flex card1 font text-sm text-black font-titleFont p-2 justify-between items-center"
          >
            <h5>Application Id:</h5>
            <span>234{""}</span>
              <button
                type="button"
                className="bg-[#2B2A1E] h-8 rounded-lg text-white w-8 -mr-10 justify-center items-center flex"
              >
                <TiTick />
              </button>
            <button
              type="button"
              className="bg-[#2B2A1E] h-8 rounded-lg text-white w-8 mx-1 justify-center items-center flex"
            >
              <RxCross2/>
            </button>
          </div>
        </div>
      </CenterCont>
      <Navbar></Navbar>
    </div>
  );
};

export default myloan;
