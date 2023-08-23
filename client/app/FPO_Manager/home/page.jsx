"use client";
import React from "react";
import "./home.css";
import Image from "next/image";
import Link from "next/link";
// import prayasfpo from "./assets/images/prayasfpo.png"
import { prayasfpo } from "@/app/assets/assets";
// import mcllogo from "@/"
import { mplogo } from "@/app/assets/assets";
import {mcllogo} from "@/app/assets/assets";

// import mcllogo from '../app/assets/images/mcllogo.png';
// import {mplogo} from '../app/assets/assets';

const home = () => {
  return (
    <div>
      
      <div className="AppBar">
        <Image src={prayasfpo} className="prayasfpo" ></Image>
      </div>
      

      <div className="profile">
        <div className="profileimg"></div>
        <div className="NameFpoMan">
          <p className="textname">FPO MANAGER</p>
        </div>
        <div className="IDFpoMan">
          <p className="textid">12367xxxxxxx89</p>
        </div>
        <div className="zone">
          <p className="zonetext">ZONE : 123456 </p>
        </div>
        <div className="zonemember">
          <p className="membertext">Members : 123456 </p>
        </div>
        <button type="button" className="viewmember">
          View Member
        </button>
      </div>

      <div className="container">
        <div className="mclcard">
        <Link href="./Microcreditfpo">
          <button type="button" className="viewdetail">
            View
          </button>
          </Link>
          <Image src={mcllogo} className="mcllogo" ></Image>
          <p className="mclhead">Micro-Credit Loan</p>
        </div>
        <div className="mpcard">
          <Link href="./MarketPlace_ContractFarming">
            <button type="button" className="viewdetail">
              View
            </button>
          </Link>
          <Image src={mplogo} className="mplogo" ></Image>
          <p className="mclhead">Market Place</p>
        </div>
      </div>
    </div>
  );
};

export default home;
