"use client";
import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";

import "./signup.css";
import AppBar from "@/components/AppBar";
import { farmer } from "../assets/assets";
import Image from "next/image";
import CenterCont from "@/components/CenterCont";
// import Inputfield from "@/components/Inputfield";
import { google } from "../assets/assets";
import { phonenumber } from "../assets/assets";
import { namelogo } from "../assets/assets";
import { passwordlogo } from "../assets/assets";
import Inputfield from "@/components/Inputfield";

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

  const handleVerify = async() => {
    if (!isValidPhoneNumber(phoneNumber)) {
      setIsPhoneNumberValid(false);
      return;
    }
    // Store data in local storage
    const details = {
      name: name,
      password: password,
      phoneNumber: phoneNumber,
    };
    // localStorage.setItem("details", JSON.stringify(details));
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);

    // Navigate to the Verify OTP page
    // Router.push("/verifyotp");
    const res = await axios.post("http://localhost:5000/api/otp", {
      phoneNumber: phoneNumber,
    });

    if(res.data.success){
      console.log("mast");
       window.location = "/verifyotp";
    } else {
      alert("Error");
    }

  };

  const handleChange=(e)=>{
    setName(e.target.value)
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setIsPhoneNumberValid(true); // Reset phone number validation state on input change
  };

  const isValidPhoneNumber = (number) => {
    // Implement your phone number validation logic here
    // Return true if the phone number is valid, otherwise false
    return number.length === 10 && /^[0-9]+$/.test(number);
  };

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
            {/* <div className="signupgoogle">
              <Image className="google" src={google} alt="logo" />
              <button className="signupgoogle-text">Sign in with Google</button>
            </div> */}
            <button type="button" className="bg-[white] h-10 rounded-2xl w-[75%] mt-4">
          <Image
            src={google}
            alt="Google image"
            width={30}
            height={30}
            className=" inline"
          />
          Sign in with Google{" "}
        </button>
          </CenterCont>
          <CenterCont>
            <div className=" w-[80%] flex items-center justify-center relative">
              <div className="w-1/2 h-[1px] bg-black"></div>
              <p className="text-lg text-black/80 bg-transparent p-3">OR</p>
              <div className="w-1/2 h-[1px] bg-black"></div>
            </div>
          </CenterCont>
          <CenterCont>
            <div  className={`phone ${!isPhoneNumberValid ? "error" : ""}`}>
              <Inputfield
                type="number"
                icon={phonenumber}
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              ></Inputfield>
               {!isPhoneNumberValid && (
            <p className="error-message">Invalid phone number</p>
          )}
            </div>
            <div className="name">
              <Inputfield
                type="text"
                icon={namelogo}
                placeholder="Name"
                value={name}
                onChange={handleChange}
              ></Inputfield>
            </div>

            <div className="password">
              <Inputfield
                type="password"
                icon={passwordlogo}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Inputfield>
            </div>
          </CenterCont>

          <button
            type="button"
            className="submit-button bg-[#7ACB2D] h-10 rounded-2xl w-[75%] text-white"
            onClick={handleVerify}
          >
            Verify
          </button>

          <Link href="" className="bottomline">
            Already have an account?
          </Link>
          <Link href="/login" className="loginbutton">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
