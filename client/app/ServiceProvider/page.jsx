'use client'
import AppBar from '@/components/AppBar';
import Navbar from '@/components/Navbar';
import React from 'react'
import ".././landingpage/landing.css";
import Link from 'next/link';

const page = () => {
    return (
        <div>
            <AppBar />
            <h2 className='text-[30px] text-center'>Namaste! Welcome to Prayas</h2>
            <div className='flex flex-col gap-3'>
                
                <div className='flex justify-around items-center'>
                <Link href={'/ServiceProvider/UploadRentItems'}>
                    <div className='card1 w-[45%] h-[200px] rounded-[10px] '>
                        Upload Rent Items
                    </div>
                </Link>
                    <Link href={'/ServiceProvider/GrantLoans'}>
                    <div className='card2 w-[170px] h-[200px] rounded-[10px] ' >
                        Upload contracts
                    </div>
                    </Link>
                </div>
                <div className='flex justify-around items-center'>
                    <Link href={'/ServiceProvider/GrantLoans'}>
                    <div className='card4 w-[340px] h-[200px] rounded-[10px]' >
                        Grant Loans
                    </div>
                    </Link>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default page;