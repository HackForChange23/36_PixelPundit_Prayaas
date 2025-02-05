"use client";
import React, {useState, useEffect} from "react";
import CenterCont from "@/components/CenterCont";
import AppBar from "@/components/AppBar";
import Navbar from "@/components/Navbar";
import styles from "../../landingpage/landing.css";
import { Progress } from "@material-tailwind/react";
import { TiTick } from "react-icons/ti";
import {RxCross2} from "react-icons/rx";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRouter } from "next/navigation";
import { url } from "@/app/utils";
import axios from "axios";
// import {useRouter} from "next/navigation/"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const myloan = () => {

  const router = useRouter();
  
  const [products, setProducts] = useState(false);
  const [reqURL, setreqURL] = useState(url);
  const [img, setImg] =useState();

  const getAllProducts = async () => {
    try {

      const res = await axios.post(url + 
      // `/getContractsByPrayasId?farmer1.PrayaasId=${localStorage.getItem('prayaasId')}`
      `/getContractsByPrayasId?farmer1.PrayaasId=FAM653005`,
       {prayasId: 'FAM653005'});
      console.log(res.data);
      setProducts(res.data);
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getAllProducts();
  }, [])

  const handleClick = () => {
    alert("Accepted");
    router.push("/landingpage");
  }

  const [open, setOpen] = React.useState(false);
  const [pin, setPin] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="bg-gradientbg min-h-screen">
      <AppBar />
      <CenterCont>
        <div className="w-full justify-center bg-wh flex align-middle mt-6">
          {products && products.data.map((product)=>(
              <div
              className="w-[80%] h-[100px] rounded-lg flex card1 font text-sm text-black font-titleFont p-2 justify-between items-center"
            >
              <h5>{product.farmer1.PrayaasId}</h5>
          <span>234{""}</span>
            <button
              type="button"
              className="bg-[#2B2A1E] h-8 rounded-lg text-white w-8 -mr-10 justify-center items-center flex"
              onClick={handleOpen}
            >
              <TiTick />
            </button>
          <button
            type="button"
            className="bg-[#2B2A1E] h-8 rounded-lg text-white w-8 mx-1 justify-center items-center flex"
            
          >
            <RxCross2/>
          </button>
        </div>
          ))}
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Enter your Pin to confirm
          </Typography>
          <CenterCont>
          <div className="w-[75%]">
            <label
              htmlFor="first_name"
              className="block mb-[1px] text-xs font-medium text-gray-900"
            >
              Pin
            </label>
            <div className="relative mb-3 w-auto ">
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                placeholder=""
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>
            <button style={{height: '40px', width: '150px'}} onClick={handleClick}>Confirm</button>
          </div>
        </CenterCont>
        </Box>
      </Modal>
      {/* {products && JSON.stringify(products)} */}
      </CenterCont>
      <Navbar></Navbar>
    </div>
  );
};

export default myloan;
