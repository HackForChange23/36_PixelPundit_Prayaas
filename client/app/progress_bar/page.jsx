'use client';
import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ethers } from 'ethers';
import abi from '../contracts/Loan.json';
import '../contract_approving/contract_approving.css'

const steps = ['INSTALLMENT1', 'INSTALLMENT2', 'INSTALLMENT3','INSTALLMENT4','REPAYMENT1','REPAYMENT2','NFT_GENERATED'];


const Progress_bar = () => {

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

    const [current_status,setstatus]=useState(0);

    //BLOCKCHAIN CONNECTION HERE
    const [state,setState]=useState({
        provider:null,
        signer:null,
        contract:null,
      })  
    
      useEffect(()=>{
         const connectWallet=async()=>{
            const contractAddress = "0x3f1defbD01a839763ba625191860430a2c57c406";
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

      const {contract} =state;
      
    //BLCOKCHAIN CONNECTION ENDS HERE    
 

    const update_status = async()=>{
      const transaction=await contract.updateStatus_Installment('1234')
      await transaction.wait();
      const st=await contract.getCurrentStatus('1234');
      setstatus();
      console.log(st);
    } ;

    useEffect(()=>{
       update_status();
     },[]);

  //fetch current process bar

  //update process bar
    return (
    <div>
      <button onClick={update_status}>UPDATE_STATUS</button>
    </div>
  )
}

export default Progress_bar