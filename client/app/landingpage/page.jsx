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
import Link from "next/link";


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
      </div><div style={{maxHeight: '370px', overflowY: 'auto'}}>
            <Link href={'/'}>
            <CenterCont>
                <div className="w-full justify-center bg-white flex align-middle mt-2">
                    <div className="w-[75%] h-20 flex card1 verify justify-center align-middle font text-2xl text-black font-titleFont"
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                    
                    <h1>FPO</h1>
                      
                    </div>
                </div>
            </CenterCont>
            </Link>
            <Link href={'/microcreditregister'}>
            <CenterCont>
                <div className="w-full justify-center bg-white flex align-middle mt-2">
                    <div className="w-[75%] h-20 flex card2 verify justify-center align-middle font text-2xl text-black font-titleFont"
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                    
                    <h1>Micro-Credit Loan</h1>
                      
                    </div>
                </div>
            </CenterCont>
            </Link>
            <Link href={'/marketplace'}>
            <CenterCont>
                <div className="w-full justify-center bg-white flex align-middle mt-2">
                    <div className="w-[75%] h-20 flex card3 verify justify-center align-middle font text-2xl text-black font-titleFont"
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                    
                    <h1>Market Place</h1>
                      
                    </div>
                </div>
            </CenterCont>
            </Link>
            <CenterCont>
                <div className="w-full justify-center bg-white flex align-middle mt-2">
                    <div className="w-[75%] h-20 flex card4 verify justify-center align-middle font text-2xl text-black font-titleFont"
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                    
                    <h1>FAQ</h1>
                      
                    </div>
                </div>
            </CenterCont>
            <Link href={'/newsAPI'}>
            <CenterCont>
                <div className="w-full justify-center bg-white flex align-middle mt-2">
                    <div className="w-[75%] h-20 flex card1 verify justify-center align-middle font text-2xl text-black font-titleFont"
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                    
                    <h1>News & Scheme</h1>
                      
                    </div>
                </div>
            </CenterCont>
            </Link>
            <Link href={'/ai'}>
            <CenterCont>
                <div className="w-full justify-center bg-white flex align-middle mt-2">
                    <div className="w-[75%] h-20 flex card1 verify justify-center align-middle font text-2xl text-black font-titleFont"
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                    
                    <h1>Predict Disease</h1>
                      
                    </div>
                </div>
            </CenterCont>
            </Link>
            
            </div>

      <Navbar></Navbar>
    </div>
  );
};

export default landingpage;








