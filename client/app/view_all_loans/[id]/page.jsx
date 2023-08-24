"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import { useParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ethers } from 'ethers';
import abi from '../../contracts/Loan.json';

const steps = ['INSTALLMENT1', 'INSTALLMENT2', 'INSTALLMENT3','INSTALLMENT4','REPAYMENT1','REPAYMENT2','NFT_GENERATED'];

const Page = () => {

  const params=useParams();
  const uid=params.id;
  console.log(uid)
  const [data, setdata] = useState(false);
 
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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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

//BLOCKCHAIN CALL STARTS  
const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
});

useEffect(() => {
    const connectWallet = async () => {
        const contractAddress = "0x3f1defbD01a839763ba625191860430a2c57c406";
        const contractAbi = abi.abi;
        try {
            const { ethereum } = window;
            if (ethereum) {
                const accounts = await ethereum.request({ method: "eth_requestAccounts" });
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(contractAddress, contractAbi, signer);
                setState({ provider, signer, contract });
            } else {
                console.log("No Metamask");
            }
        } catch (error) {
            console.log(error);
        }
    };
    connectWallet();
}, []);

const { contract } = state;

//BLOCKCHAIN CALL ENDS
      
    //BLCOKCHAIN CONNECTION ENDS HERE    
 

    const update_status = async(uid)=>{
      const transaction= await contract.updateStatus_Installment(uid)
      await transaction.wait();
      const st=await contract.getCurrentStatus(uid);
      setstatus();
      console.log(st);
    } ;

    useEffect(()=>{
       update_status(uid);
     },[]);

  //fetch current process bar

  //update process bar
    return (
    <div>
     <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
              <Typography variant="caption">Optional</Typography>
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* <Button onClick={handleReset}>Reset</Button> */}
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
      {/* <button onClick={update_status}>UPDATE_STATUS</button> */}
    </div>
  )
}
  


export default Page;

