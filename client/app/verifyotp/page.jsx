"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@/components/AppBar";
import "./verifyotp.css";
import CenterCont from "@/components/CenterCont";
import axios from "axios";
import { useRouter } from "next/navigation";

const initialFormState = {
  first_number: "",
  second_number: "",
  third_number: "",
  fourth_number: "",
};

const verifyotp = () => {
  const router = useRouter();
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

  const otpverified = async () => {
    const res = await axios.post("http://localhost:5000/api/otp/verify", {
      otp: formData.first_number + formData.second_number +
        formData.third_number + formData.fourth_number,
    });

    // console.log(res.data);
    // console.log(res.data.type);
    // console.log(res.data.success);

    if (res.data.success) {
      router.push("/signup2");
    } else {
      alert("Error");
    };
  };

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
          value={formData.first_number}
          onChange={(e) =>
            setFormData({ ...formData, first_number: e.target.value })
          }
        />
        <input
          className="otp2"
          type="number"
          name="otp2"
          placeholder="______"
          value={formData.second_number}
          onChange={(e) => setFormData({ ...formData, second_number: e.target.value })}
        />
        <input
          className="otp3"
          type="number"
          name="otp3"
          placeholder="______"
          value={formData.third_number}
          onChange={(e) => setFormData({ ...formData, third_number: e.target.value })}
        />
        <input
          className="otp4"
          type="number"
          name="otp4"
          placeholder="______"
          value={formData.fourth_number}
          onChange={(e) =>
            setFormData({ ...formData,fourth_number: e.target.value })
          }
        />
        <button
          type="button"
          className="submit-button bg-[#7ACB2D] h-10 rounded-2xl w-[75%] text-white"
          onClick={otpverified}
        >
          Verify
        </button>
      </form>
      <p className="resend">Resend OTP</p>
    </div>
  );

};

export default verifyotp;
