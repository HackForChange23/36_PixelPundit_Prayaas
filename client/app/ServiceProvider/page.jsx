"use client";
import AppBar from "@/components/AppBar";
import Navbar from "@/components/Navbar";
import React from "react";
import ".././landingpage/landing.css";
import Link from "next/link";
import CenterCont from "@/components/CenterCont";
const page = () => {
  return (
    <div>
      <AppBar />
      <h2 className="text-[30px] text-center">Namaste! Welcome to Prayas</h2>
      <div className="flex flex-col gap-3">
        <div className="w-[100%] flex justify-center items-center content-center ">
          <Link href={"/ServiceProvider/UploadRentItems"}>
            <div className="card1 w-[170px] h-[200px] rounded-[10px] mx-1">
              <CenterCont>
              Upload Rent Items
              </CenterCont>
            </div>
          </Link>
          <Link href={"/ServiceProvider/GrantLoans"}>
            <div className="card2 w-[170px] h-[200px] rounded-[10px] mx-1">
            <CenterCont>
              Upload Contracts
              </CenterCont>
            </div>
          </Link>
        </div>
        <div className="flex justify-around items-center">
          <Link href={"/ServiceProvider/GrantLoans"}>
     
            <div className="card4 w-[340px] h-[200px] rounded-[10px]">
            <CenterCont>
Grant Loans
                
</CenterCont>
            </div>
          </Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default page;
