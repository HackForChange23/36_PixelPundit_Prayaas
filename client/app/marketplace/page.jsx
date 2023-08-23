"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import AppBar from "@/components/AppBar";
import "../landingpage/landing.css";
import Link from "next/link";
import CenterCont from "@/components/CenterCont";
const page = () => {
  return (
    <div className="bg-white min-h-screen">
      <AppBar />
      <Link href={'/farmer_sell'}>
            <CenterCont>
                <div className="w-full justify-center bg-white flex align-middle mt-2">
                    <div className="w-[75%] h-20 flex card1 verify justify-center align-middle font text-2xl text-black font-titleFont"
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                    
                    <h1>Sell Items</h1>
                      
                    </div>
                </div>
            </CenterCont>
            </Link>
            <Link href={'/RentItem'}>
            <CenterCont>
                <div className="w-full justify-center bg-white flex align-middle mt-2">
                    <div className="w-[75%] h-20 flex card2 verify justify-center align-middle font text-2xl text-black font-titleFont"
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                    
                    <h1>Get Rented Equipment</h1>
                      
                    </div>
                </div>
            </CenterCont>
            </Link>
      <Navbar></Navbar>
    </div>
  );
};

export default page;
