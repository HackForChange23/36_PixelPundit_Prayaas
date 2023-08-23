import AppBar from '@/components/AppBar';
import React from 'react'

const page = () => {
  return (
    <div>

        <AppBar></AppBar>
        <div style={{height: 'calc(100vh - 40px)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>

            <div style={{height: '40px', width: '200px', backgroundColor: 'white', marginTop: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 5px #000'}}>

                <h2 style={{color: 'black', fontSize: '18px'}}>GPAY</h2>

            </div>
            <div style={{height: '40px', width: '200px', backgroundColor: 'darkblue', marginTop: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 5px #000'}}>

                <h2 style={{color: 'white', fontSize: '18px'}}>PAYTM</h2>

            </div>
            <div style={{height: '40px', width: '200px', backgroundColor: 'orange', marginTop: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 5px #000'}}>

                <h2 style={{color: 'white', fontSize: '18px'}}>CREDIT CARD</h2>

            </div>

            


        </div>
      
    </div>
  )
}

export default page;
