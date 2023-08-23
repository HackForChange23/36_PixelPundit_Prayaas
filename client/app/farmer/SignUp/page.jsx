'use client'
import React from "react";
import Link from 'next/link';
import "./signup.css";
import AppBar from "@/components/AppBar";
import { farmer } from "../assets/assets";
import Image from "next/image";
import CenterCont from "@/components/CenterCont";
import Inputfield from "@/components/Inputfield";
import {google} from "../assets/assets";
import {phonenumber} from "../assets/assets";
import {name} from "../assets/assets";
import {password} from "../assets/assets";

const Signup = () => {
  return (
    <div className="">
      <AppBar></AppBar>
      <div>
        <CenterCont>
          <Image src={farmer} className=" farmer" />
        </CenterCont>
      </div>
      <div className="bottom-container">
        <div className="heading">
          <CenterCont>
            <p className="content-head">Create New Account</p>
          </CenterCont>
        </div>
        <div className="white-container">
          <CenterCont>
          <div className="signupgoogle">
        <Image className="google" src={google} alt='logo'/>
          <p className="signupgoogle-text">Sign in with Google</p>
        </div>
          </CenterCont>
          <CenterCont>
          <div className="mt-5 w-[80%] flex items-center justify-center relative">
            <div className="w-1/2 h-[1px] bg-black"></div>
            <p className="text-lg text-black/80 bg-transparent p-3">OR</p>
            <div className="w-1/2 h-[1px] bg-black"></div>
          </div>
        </CenterCont>
          <CenterCont>
            <div className="phone">
            <Inputfield icon={phonenumber} placeholder="Phone Number"></Inputfield>
            </div>
            <div className="name">
            <Inputfield icon={name} placeholder="Name"></Inputfield>
            </div>
            
            <div className="password">
            <Inputfield icon={password} placeholder="Password"></Inputfield>
            </div>
          </CenterCont>
       
          <button
              type="button"
              className="submit-button bg-[#7ACB2D] h-10 rounded-2xl w-[75%] text-white"
              href="/verifyotp"
            >
            Verify
            </button>

            <Link href= ""className="bottomline">Already have an account?</Link> 
            <Link href="/login" className="loginbutton">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
