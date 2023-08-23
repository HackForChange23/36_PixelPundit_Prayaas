"use client";
import React, { useState } from "react";
import Image from "next/image";
import farmer from "../../assets/images/farmer.png";
import { AiFillPhone } from "react-icons/ai";
import axios from "axios";

const Login = () => {
  const [contact_no, setContactNo] = useState("");
  const [password, setPassword] = useState("");

  const loginWholeSeller = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/loginwholeseller", {
        contact_no,
        password
      });
      console.log(res.data.data);
      clearInputFields();
      window.location("/wholeseller/home");
    } catch (error) {
      console.log(error);
    }
  };

  const clearInputFields = () => {
    setContactNo("");
    setPassword("");
  };

  return (
    <div
      className="min-h-screen bg-[#B2E185] flex flex-col relative overflow-hidden"
      style={{ maxWidth: "400px" }}
    >
      <div className="h-1/4" style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
        <Image src={farmer} alt="Farmer image" style={{ transform: "translateY(45px)" }} />
      </div>
      <div className=" bg-[#7ACB2D] rounded-t-3xl overflow-hidden w-full h-3/4 absolute bottom-0 flex flex-col justify-center items-center"></div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2 className="relative text-xl font-semibold top-10 text-black" style={{ fontFamily: "cursive", letterSpacing: "2px" }}>
          WELCOME
        </h2>
      </div>
      <div className=" bg-[#F7F9FC] rounded-t-3xl overflow-hidden w-full h-[65%] absolute bottom-0 flex flex-col justify-center items-center">
        <div style={{ margin: '10px 0' }}><p>Login as Wholeseller</p></div>
        <div className="w-[80%] h-10 relative block bg-white border-gray-500 border rounded-xl ">
          <span className="absolute text-3xl text-black" style={{ height: "100%", display: "flex", alignItems: "center", padding: "0 5px" }}>
            <AiFillPhone color="gray" />
          </span>
          <input
            className="w-full h-10 left-2 bg-transparent inline rounded-xl focus:border-none p-2  text-black"
            placeholder="Phone Number"
            style={{ paddingLeft: "42px" }}
            value={contact_no}
            onChange={(e) => setContactNo(e.target.value)}
          />
        </div>
        <input
          className="border-gray-500 border rounded-xl p-2 placeholder-shown:border-gray-500 w-[80%] mt-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <h2 className="text-sm font-semibold mb-2 text-[#7ACB2D]">
          Forgot Password?
        </h2>
        <button type="button" className="bg-[#7ACB2D] h-10 rounded-2xl w-[75%]" onClick={loginWholeSeller}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
