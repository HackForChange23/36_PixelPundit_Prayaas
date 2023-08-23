"use client";
import React from "react";
import "./home.css";
import Image from "next/image";
import Link from "next/link";
// import mcllogo from "@/"

// import mcllogo from '../app/assets/images/mcllogo.png';
// import {mplogo} from '../app/assets/assets';
const home = () => {
  return (
    <div>
      <div className="AppBar"></div>

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
          {/* <img src="../app/assets/images/mcllogo.png"></img> */}
          {/* <Image className="mcllogo" src="../app/assets/images/mcllogo.png" alt='mcllogo' /> */}
          <button type="button" className="viewdetail">
            View
          </button>
          <p className="mclhead">Micro-Credit Loan</p>
        </div>
        <div className="mpcard">
          <Link href="./MarketPlace_ContractFarming">
            <button type="button" className="viewdetail">
              View
            </button>
          </Link>

          <p className="mclhead">Market Place</p>
        </div>
      </div>
    </div>
  );
};

export default home;
