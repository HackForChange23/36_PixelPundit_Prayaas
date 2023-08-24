"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {url} from '../utils';
import {useRouter} from 'next/navigation'
import {Link} from 'next/link';

const View_All_Loans = () => {


const [data, setdata] = useState(false);

const router = useRouter();

const getContracts = async () => {
  try {
    console.log("hi")
    const res = await axios.get(url+`/getcontracts?zone=${1}`);
    console.log(res.data)
    setdata(res.data)
  } catch (error) {
    console.log(error)
  }
}
    useEffect(()=>{
      getContracts();
    },[])


    return (
      <div style={{minHeight: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#D4ADFC'}}>
         <div className='bg-[#0C134F] h-[100px] w-[100%] '>PRAYAS</div>
         <p className='text-center text-[30px] mt-[25px] heading'>MICRO-CREDIT LOAN</p>
         <p className='heading_2'>Get Help Together</p>
         <div className='w-[90%] h-[1px] bg-black mt-[15px]'></div>
         {/* <p style={{display: 'flex', maxWidth: '50vw'}}>{data && JSON.stringify(data)}</p> */}
         <table style={{ border: '1px solid black', borderCollapse: 'collapse' ,padding: '10px'}}>
                <thead style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                    <tr style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                        <th>SR_NO</th>
                        <th>Contract No</th>
                        <th>VIEW</th>
                    </tr>
                </thead>
                {/* <tbody> */}
                  {data && data.data.map((item, index) => (
                    
                      <tr style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                          <td>{index + 1}</td>
                          <td>{item._id}</td>
                          <td>
                              
                                  <button onClick={()=>{router.push(`/view_all_loans/${item._id}`)}}>view</button>
                        
                          </td>
                      </tr>
                      
                  ))}
                  
              {/* </tbody> */}

               
            </table>
      </div>
      

    );
};

export default View_All_Loans;
