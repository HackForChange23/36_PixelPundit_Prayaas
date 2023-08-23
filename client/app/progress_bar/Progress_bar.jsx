import React, { useState } from 'react'

const Progress_bar = () => {

     const [current_status,setstatus]=useState(0);

    //BLOCKCHAIN CONNECTION HERE
    const [state,setState]=useState({
        provider:null,
        signer:null,
        contract:null,
      })  
    
      useEffect(()=>{
         const connectWallet=async()=>{
            const contractAddress = "0x429F8baDb1Dd06c9eC0DD932939d4891D288Ca69";
            const contractAbi=abi.abi;
            try{
               const {ethereum}=window;
               if(ethereum){
                    const account = await ethereum.request({method:"eth_requestAccounts"})
               }else{
                   console.log("no metamask")
               }
               const provider= new ethers.providers.Web3Provider(ethereum);
               const signer=provider.getSigner();
               const contract=new ethers.Contract(contractAddress,contractAbi,signer);
               setState({provider,signer,contract})
            }catch(error){
               console.log(error)
            } 
        };
        connectWallet();
      },[]);
      
    //BLCOKCHAIN CONNECTION ENDS HERE    
 
    useEffect(()=>{
        const update_status = async(_applicationId)=>{
            const transaction=await contract.updateStatus_Installment('123')
            await transaction.wait();
            const st=await contract.getCurrentStatus('123');
            setstatus(st);
            console.log(st);
        } ;
       update_status();
     },[]);

     const update_status = async(_applicationId)=>{
        const transaction=await contract.updateStatus_Installment('123')
        await transaction.wait();
        const st=await contract.getCurrentStatus('123');
        setstatus(st);
        console.log(st);
    } ;

  //fetch current process bar
  //update process bar
    return (
    <div>
      <button onClick={update_status}>UPDATE_STATUS</button>
    </div>
  )
}

export default Progress_bar