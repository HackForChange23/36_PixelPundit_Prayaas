import React from 'react'
import CenterCont from './CenterCont';
import './AppBar.css';
import Image from 'next/image'
// import {phonenumber} from "../app/assets/assets";

function Inputfield(props){
  


  return (
    
    <CenterCont>
    <div className=" inputfield relative mb-6 w-[253px] h-[30px]">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
      <Image src={props.icon} className=" inputimage self-center"/>
      </div>
      <input
          type={props.type || "text"} // Use || instead of |
          id="input-group-1"
          className="cont text-gray-900 text-sm rounded-lg block w-full pl-10 p-2"
          placeholder={props.placeholder}
          autoComplete="off"
          value={props.value}
          onChange={props.onChange}
        />
    </div>   
  </CenterCont>
  )
}

export default Inputfield