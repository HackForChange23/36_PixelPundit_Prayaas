"use client";
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from '../contracts/Loan.json';
import '../contract_approving/contract_approving.css'

const ContractApproving = ({ _applicationId }) => {
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

    const add_data = async (_Loan_Approver_Prayas_id, _Total_Loan_Amount, _Prayas_id_Farmers, _Individual_Amount, _Interest_Rate) => {
        const transaction = await contract.add_data(_applicationId, _Loan_Approver_Prayas_id, _Total_Loan_Amount, _Prayas_id_Farmers, _Individual_Amount, _Interest_Rate);
        await transaction.wait();
        window.alert('ADDED');
        console.log("DATA", transaction);
    };

    const data = { // Remove the array wrapper
        _applicationId: 40,
        _Total_Loan_Amount: 50,
        _Interest_Rate: 8,
        _Prayas_id_Farmers: ['10', '50', '30'],
        Individual: [8, 9, 3]
    };

    return (

      <div style={{minHeight: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: 'D4ADFC'}}>
         <div className='bg-[#0C134F] h-[100px] w-[100%] '>PRAYAS</div>
         <p className='text-center text-[30px] mt-[25px] heading'>MICRO-CREDIT LOAN</p>
         <p className='heading_2'>Get Help Together</p>
         <div className='w-[90%] h-[1px] bg-black mt-[15px]'></div>
       <div className='' style={{height: '100vw'}}>
            <div className='data_div'>
                <div className='bg-[]'></div>
                <p className=''>APPLICATION ID : {data._applicationId}</p>
                <p>TOTAL LOAN AMOUNT :{data._Total_Loan_Amount}</p>
                <p>INTEREST RATE : {data._Interest_Rate}</p>
                <div>FARMERS AADHAR CARD : <p>{data._Prayas_id_Farmers.map((aadhar) => aadhar.toString()).join(', ')}</p></div>
                <div>INDIVIDUAL AMOUNT : <p>{data.Individual.map((amount) => amount.toString()).join(', ')}</p></div>
            </div>
            <button onClick={add_data} className='btn'>APPROVE</button>
        </div>
      </div>
      

    );
};

export default ContractApproving;
