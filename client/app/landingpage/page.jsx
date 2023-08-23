"use client";
import AppBar from "@/components/AppBar";
import React from "react";
import "../landingpage/landing.css";
import CenterCont from "@/components/CenterCont";
import Navbar from "@/components/Navbar";
import StaticCarousel from "@/components/StaticCarousel";
import { scheme1 } from "../assets/assets";
// import { scheme2 } from '../assets/assets';
// import { scheme3 } from '../assets/assets';
import { scheme2, scheme3, scheme4 } from "../assets/assets";
import Image from "next/image";
const landingpage = () => {
  return (
    <div className=" bg-white min-h-screen">
      <AppBar />
      <div className="static-carousel">
        <div className="carousel-item">
          <Image src={scheme1}></Image>
          <h3>Item 1</h3>
          <p>Description for Item 1</p>
        </div>
        <div className="carousel-item">
          <Image src={scheme2}></Image>
          <h3>Item 2</h3>
          <p>Description for Item 2</p>
        </div>
        <div className="carousel-item">
          <img src={scheme3} alt="Item 2" />
          <h3>Item 2</h3>
          <p>Description for Item 2</p>
        </div>
        <div className="carousel-item">
          <img src={scheme4} alt="Item 2" />
          <h3>Item 2</h3>
          <p>Description for Item 2</p>
        </div>
        {/* Add more carousel items as needed */}
      </div>
      <CenterCont>
        <div className="w-full justify-center bg-white flex align-middle mt-2">
          <div className="w-[75%] h-20 flex card1 verify justify-center align-middle font text-2xl text-black font-titleFont">
            <button
              type="button"
              className="bg-[#2B2A1E] h-10 rounded-2xl w-[75%] text-white"
            >
              FPO
            </button>
          </div>
        </div>
      </CenterCont>

      <div className="justify-center bg-transparent flex align-middle mt-2">
        <div className="w-[75%] h-20 flex card2 verify justify-center align-center  font text-2xl text-black font-titleFont">
          <button
            type="button"
            className="bg-[#2B2A1E] h-10 rounded-2xl w-[75%] text-white"
          >
            Micro Credit Loan
          </button>
        </div>
      </div>

      <div className="justify-center bg-white flex align-middle mt-2">
        <div className="w-[75%] h-20 flex card3 verify justify-center align-middle font text-2xl text-black font-titleFont">
          <button
            type="button"
            className="bg-[#2B2A1E] h-10 rounded-2xl w-[75%] text-white"
          >
            Market Place
          </button>
        </div>
      </div>

      <div className="justify-center bg-white flex align-middle mt-2">
        <div className="w-[75%] h-20 flex card4 verify justify-center align-middle font text-2xl text-black font-titleFont">
          <button
            type="button"
            className="bg-[#2B2A1E] h-10 rounded-2xl w-[75%] text-white"
          >
            FAQs
          </button>
        </div>
      </div>

      <Navbar></Navbar>
    </div>
  );
};

export default landingpage;
