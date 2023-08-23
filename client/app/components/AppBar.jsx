import Image from 'next/image'
import React from 'react'
import {BsArrowLeftCircle} from 'react-icons/bs'
import {prayaas} from "../app/assets/assets"
import { google_translate } from '../app/assets/assets'
import Link from 'next/link';



const AppBar = ({ link = '/' }) => {
  return (
    <div className="flex w-[100%] h-12 bg-[#2B2A1E]">
      <div className='flex justify-center h-10 w-[33%] text-white text-3xl'>
        <Link href={link}>
          <BsArrowLeftCircle className="backbtn self-center" />
        </Link>
      </div>
      <Image src={prayaas} alt='logo' />
      <div className="text-3xl text-white w-[34%] flex justify-center">
        <Image src={google_translate} className="self-center" />
      </div>
    </div>
  );
}

export default AppBar;
