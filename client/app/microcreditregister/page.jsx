"use client";
import AppBar from "@/components/AppBar";
import React from "react";
import Inputfield from "@/components/Inputfield";
import CenterCont from "@/components/CenterCont";
import { HiCurrencyRupee } from "react-icons/hi";
import Navbar from "@/components/Navbar";
import "./microcredits.css";
import { Input, Option } from "@material-tailwind/react";
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {  } from "@mui/material/Select";
import { Snackbar } from "@mui/material";
import { useState } from "react";
import {RiLockPasswordLine}  from "react-icons/ri";

const register = () => {
  const [members, setMembers] = useState([{ PrayaasId: "", amount: "" ,KCC: ""}]);
  const [req, setReq] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleAddMember = () => {
    if (members.length >= 3) {
      setOpenSnackbar(true);
      return;
    }

    const values = [...members];
    values.push({ PrayaasId: "", amount: '',KCC: '' });
    setMembers(values);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleMemberChange = (index, key, value) => {
    const values = [...members];
    values[index][key] = value;
    setMembers(values);
  };

  const handleReqChange = (e) => {
    setReq(e.target.value);
  };

  const calculateTotalValue = () => {
    return members.reduce(
      (total, member) => total + parseFloat(member.amount),
      0
    );
  };

  const sendData = () => {
    console.log(members[0]);
    const totalValue = calculateTotalValue();
    const dataToSend = { farmer1:members[0] , farmer2:members[1] ,farmer3:members[2], total_grant:totalValue,fpo_prayasId:"12454",requirement:req };
    // console.log(dataToSend);
    axios
      .post("http://localhost:5000/api/contract/post", dataToSend)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error sending data:", error);
      });
  };

  console.log(members);
  return (
    <>
      <AppBar />
      <div className="min-h-screen flex flex-col relative ">
        <div className="justify-center flex items-baseline credittitle">
          <div className="w-[75%] h-20 flex verify justify-center align-baseline font text-2xl text-black font-titleFont">
            <p className="credittitle flex flex-col justify-end">
              Micro-Credit Loans
            </p>
          </div>
        </div>
        <div className="h-10 justify-center flex align-middle">
          <div className="w-[75%] h-auto flex items-center justify-center align-middle text-black font-bodyFont text-sm border-black border-b-2">
            Get Help Together
          </div>
        </div>
        <div className="w-[35%]">
          <label
            htmlFor="first_name"
            className="block mb-[1px] text-xs font-medium text-gray-900"
          ></label>
          {/* <CenterCont> */}
          <div className="flex justify-center items-center w-full  mt-5">
            <FormControl sx={{ width: "400px", paddingX: "20px" }}>
              <InputLabel id="demo-simple-select-label ml-3">
                {" "}
                Select Need
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={req}
                label="Select Req"
                onChange={handleReqChange}
                sx={{
                  width: "300px",
                }}
              >
                <MenuItem value={"Crop"}>Crop</MenuItem>
                <MenuItem value={"Fertilizer"}>Fertilizer</MenuItem>
                <MenuItem value={"Personal Needs"}>Personal Needs</MenuItem>
                <MenuItem value={"Others"}>Others</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* </CenterCont> */}
        </div>
        <CenterCont className="flex flex-">
          <div className="mt-2 relative mb-2 w-[75%] ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <RiLockPasswordLine className="text-black" />
            </div>
            <input
              type="number"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="PIN"
            />
          </div>
        </CenterCont>
        <p className="flex items-center justify-center mt-3 font-semibold gap-2">
          Add Team Members
          <IoIosAddCircle
            className="text-4xl text-green-500 "
            onClick={handleAddMember}
          />
        </p>
        <div className="">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col mt-5">
              <Inputfield
                placeholder={`Team Member ${index + 1} Prayaas ID`} 
                value={member.PrayaasId}
                onChange={(e) =>{
                  console.log(e.target.value);
                  handleMemberChange(index, "PrayaasId", e.target.value)}
                }
              />
              <Inputfield
                placeholder={`Team Member ${index + 1} KCC`}
                value={member.KCC}
                onChange={(e) =>{
                  console.log(e.target.value);
                  handleMemberChange(index, "KCC", e.target.value)}
                }
                type="number"
              />
              <Inputfield
                placeholder={`Team Member ${index + 1} Amount Required`}
                value={member.amount}
                onChange={(e) =>
                  handleMemberChange(index, "amount", e.target.value)
                }
                type="number"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="bg-[#7ACB2D] h-10 rounded-2xl w-[65%] ml-[60px]"
          onClick={sendData}
        >
          Submit
        </button>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message="Cant add more than 3 members"
        // action={action}
      ></Snackbar>

      {/* <Navbar></Navbar> */}
    </>
  );
};

export default register;