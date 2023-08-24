import React from "react";
import "./AppBar.css";
import CenterCont from "./CenterCont";
import { prayas } from "../app/assets/assets";
import Image from "next/image";
import { home } from "../app/assets/assets";
import Link from "next/link";
import { helper } from "../app/assets/assets";
import { alerts } from "../app/assets/assets";
import { profile } from "../app/assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="home">
        <Link href="/landingpage">
          <CenterCont>
            <Image className="homelogo" src={home} alt="logo" />
          </CenterCont>
        </Link>
        <CenterCont>
          <p className="homecont">Home</p>
        </CenterCont>
      </div>
      <div className="helper">
        <Link href="/chatbot">
          <CenterCont>
            <Image className="homelogo" src={helper} alt="logo" />
          </CenterCont>
        </Link>
        <CenterCont>
          <p className="homecont">Helper</p>
        </CenterCont>
      </div>

      <CenterCont>
        <div className="prayas">
          <Link href="">
            <CenterCont>
              <Image className="prayaslogo" src={prayas} alt="logo" />
            </CenterCont>
          </Link>
          <CenterCont>
            <p className="prayascont">Prayas</p>
          </CenterCont>
        </div>
      </CenterCont>
      <div className="alerts">
        <Link href="">
          <CenterCont>
            <Image className="homelogo" src={alerts} alt="logo" />
          </CenterCont>
        </Link>
        <CenterCont>
          <p className="homecont">Alerts</p>
        </CenterCont>
      </div>
      <div className="profile">
        <Link href="/profile">
          <CenterCont>
            <Image className="homelogo" src={profile} alt="logo" />
          </CenterCont>
        </Link>
        <CenterCont>
          <p className="homecont">Profile</p>
        </CenterCont>
      </div>
    </div>
  );
};

export default Navbar;
