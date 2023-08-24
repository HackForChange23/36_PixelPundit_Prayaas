"use client";
import React, { useState }from "react";
import { useRouter } from "next/navigation";
// import React, { useState } from "react";
import AppBar from "@/components/AppBar";
// import { AiFillFileText } from "react-icons/ai";
import Link from "next/link";
import CenterCont from "@/components/CenterCont";
import Navbar from "@/components/Navbar";
import { ButtonGroup } from "@material-tailwind/react";
const farmersell = () => {
  const router = useRouter();
  const [productName, setProductName] = useState("");
  const [costPerKg, setCostPerKg] = useState("");
  const [minimumQuantity, setMinimumQuantity] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleCostPerKgChange = (event) => {
    setCostPerKg(event.target.value);
  };

  const handleMinimumQuantityChange = (event) => {
    setMinimumQuantity(event.target.value);
  };

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    setSelectedImage(image);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Clicked");

    // Handle form submission logic here

    // After submitting, redirect to the desired page
    // window.href.location("/marketplace");
    router.push("/marketplace")
  };

  return (
    
    <div className=" bg-gradientbg min-h-screen">
      <AppBar />
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <div className="justify-center flex align-middle">
          <div className="w-[75%] h-20 flex verify justify-center align-middle font text-2xl text-black font-titleFont">
            Sell Your Produce
          </div>
        </div>
        <div className="h-10 justify-center flex align-middle">
          <div className="w-[75%] h-auto flex items-center justify-center align-middle text-black font-bodyFont text-sm border-black border-b-2">
            sell and produce
          </div>
        </div>
        <br />
        <div className=" overflow-hidden w-full h-[80%] absolute bottom-0 flex flex-col justify-start items-center">
        </div>
        <form onSubmit={handleSubmit}>
        <CenterCont>
        <div className="relative mb-4 w-[75%]">
          <input
            type="text"
            value={productName}
            onChange={handleProductNameChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
            placeholder="Product Name"
          />
        </div>
      </CenterCont>

      <CenterCont>
        <div className="relative mb-4 w-[75%]">
          <input
            type="text"
            value={costPerKg}
            onChange={handleCostPerKgChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
            placeholder="Cost per kg"
          />
        </div>
      </CenterCont>

      <CenterCont>
        <div className="relative mb-4 w-[75%]">
          <input
            type="text"
            value={minimumQuantity}
            onChange={handleMinimumQuantityChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
            placeholder="Minimum Quantity"
          />
        </div>
      </CenterCont>

      <CenterCont>
        <div className="relative mb-4 w-[75%]">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
      </CenterCont>
        
      <CenterCont>
  <button
    type="submit"
   
    className="bg-[#2B2A1E] h-10 rounded-2xl w-[75%] text-white flex items-center justify-center z-10"
  >
    Sell
    </button>
  
</CenterCont>
</form>
      </div>
      <Navbar></Navbar>
    </div>
    
  );
};

export default farmersell;
