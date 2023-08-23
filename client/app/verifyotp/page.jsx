"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@/components/AppBar";
import "./verifyotp.css";
import CenterCont from "@/components/CenterCont";

const initialFormState = {
  from_name: "",
  number: "",
  grade: "",
  message: "",
};

const verifyotp = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [userDetails, setUserDetails] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);

    setFormData(initialFormState);
  };

  useEffect(() => {
    setUserDetails(localStorage.getItem("details"));
    console.log(JSON.stringify(localStorage.getItem("details")));
  }, []);

  return (
    <div className="">
      <AppBar></AppBar>
      <div className="top-container">
        <div className="headingotp">
          <CenterCont>
            <p className="headingotpcont">OTP Verification</p>
          </CenterCont>
        </div>
        <div className="contentotp">
          <CenterCont>
            <p className="contentotpcont">
              Please enter your correct OTP for number verification process.
            </p>
          </CenterCont>
        </div>
      </div>

      <form className="form" onSubmit={onSubmit}>
        <input
          className="otp1"
          type="number"
          name="from_name"
          placeholder="______"
          value={formData.from_name}
          onChange={(e) =>
            setFormData({ ...formData, from_name: e.target.value })
          }
        />
        <input
          className="otp2"
          type="number"
          name="otp2"
          placeholder="______"
          value={formData.number}
          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
        />
        <input
          className="otp3"
          type="number"
          name="otp3"
          placeholder="______"
          value={formData.grade}
          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
        />
        <input
          className="otp4"
          type="number"
          name="otp4"
          placeholder="______"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <button
          type="button"
          className="submit-button bg-[#7ACB2D] h-10 rounded-2xl w-[75%] text-white"
        >
          Verify
        </button>
      </form>
      <p className="resend">Resend OTP</p>
    </div>
  );
};

export default verifyotp;
