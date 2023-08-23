import React from 'react'
import { useState } from 'react';


const Contract_Approving = ({_applicationId}) => {

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

    const [data, setdata] = useState([]);
    const { contract } = state;
    
    //FETCH DATA FROM AXIOS
    
    const add_data = async(_applicationId, _Loan_Approver_Prayas_id,_Total_Loan_Amount,_Prayas_id_Farmers,_Individual_Amount,_Interest_Rate)=>{
        const transaction= await contract.add_data(_applicationId,_Loan_Approver_Prayas_id,_Total_Loan_Amount,_Prayas_id_Farmers,_Individual_Amount,_Interest_Rate) 
        await transaction.wait();
        window.alert('ADDED');
        console.log("DATA",transaction);
    } 


  return (
    <>
    <div>
      <p>{data._applicationId}</p>
      <p>{data._Loan_Approver_Prayas_id}</p>
      <p>{data._Total_Loan_Amount}</p>
      <p>{data._Interest_Rate}</p>
      <p>{data.Prayas_id_Farmers.map((aadhar) => aadhar.toString()).join(', ')}</p>
      <p>{data.Individual.map((amount) => amount.toString()).join(', ')}</p>
    </div>

    <button onClick={add_data}>APPROVE</button>
    </>



  )
}

export default Contract_Approving