import React, { useEffect, useState } from 'react'

const View_All_Loans = () => {
    
    const [data,setdata]=useState([]);
    
    useEffect(() => {
        const fetch = async () => {
            try{
            const _data= await axios.fetch();
            setdata(_data);
            console.log(data);
            }catch(error){
                console.log(error);
            }
        };
        fetch();
      }, []);

    return (    

    <div>
      <div className='header'>
      </div>
      <div className='Title'>
         <h1>MICRO-CRESIT LOAN</h1>
           <p>GET HELP TOGETHER</p>
      </div>
      <p>APPLICATIONS</p>
      <table>
         <tr>
            <th>SR_NO</th>
            <th>Contract No</th>
            <th></th>
         </tr>

         {data.map((item,index) => (

            <tr key={item.application_id}>
                <td>{index+1}</td>
                <td>{item.application_id}</td>
                <td><button>View</button></td>
            </tr>
        ))}
      </table>

    </div>
    
    )
}

export default View_All_Loans