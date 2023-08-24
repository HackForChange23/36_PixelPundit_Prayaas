import AppBar from '@/components/AppBar';
import CenterCont from '@/components/CenterCont';
import Navbar from '@/components/Navbar';
import React from 'react'
import { RxCross2 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';

const page = () => {
  return (
    <div className="bg-gradientbg min-h-screen">
      <AppBar />
      <CenterCont>
        <div className="w-full justify-center bg-wh flex align-middle mt-6">
          <div
            className="w-[80%] h-20 rounded-lg flex card1 font text-sm text-black font-titleFont p-2 justify-between items-center"
          >
            <h5>Application Id:</h5>
            <span>234{""}</span>
              <button
                type="button"
                className="bg-[#2B2A1E] h-8 rounded-lg text-white w-8 -mr-10 justify-center items-center flex"
                // onClick={handleOpen}
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
        </div>
        {/* <Modal
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
              />
            </div>
          </div>
        </CenterCont>
        </Box>
      </Modal> */}
      </CenterCont>
      <Navbar></Navbar>
    </div>
  )
}

export default page;