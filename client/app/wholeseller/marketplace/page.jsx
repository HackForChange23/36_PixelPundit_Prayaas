"use client"
import React, { useEffect, useState } from "react";
import "../marketplace/marketplace.css";
import { BsArrowLeftCircle } from "react-icons/bs";
import { prayaas } from "../../assets/assets";
import { google_translate } from "../../assets/assets";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { url } from "../../utils";
import { Circles } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import Link from "next/link";


const marketplace = () => {

    const router = useRouter();
  
  const [products, setProducts] = useState(false);
  const [reqURL, setreqURL] = useState(url);
  const [img, setImg] =useState();

  const getAllProducts = async () => {
    try {

      const res = await axios.get(reqURL + "/getwholesellproducts");
      console.log(res.data.data)
      setProducts(res.data.data);
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getAllProducts();
  }, [])

  return (
    <div className=" bg-gradientbg min-h-screen">
      <div className="flex w-[100%] h-10 bg-[#2B2A1E]">
        <div className="flex justify-center h-10 w-[33%] text-white text-3xl">
          <BsArrowLeftCircle className=" self-center " />
        </div>
        <Image src={prayaas} alt="logo" height={100} className="w-[33%]" />
        <div className="text-3xl text-white w-[34%] flex justify-center">
          <Image src={google_translate} alt="google_translate" className="self-center" />
        </div>
      </div>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <div className="justify-center flex align-middle">
          <div className="w-[75%] h-20 flex verify justify-center align-middle font text-2xl text-black font-titleFont">
            Verify Your Details
          </div>
        </div>
        <div className="h-10 justify-center flex align-middle">
          <div className="w-[75%] h-auto flex items-center justify-center align-middle text-black font-bodyFont text-sm border-black border-b-2">
            {" "}
            Market Place for Wholesellers
          </div>
        </div>
      </div>

      <div className=" overflow-hidden w-full h-[77%] absolute bottom-0 flex flex-col justify-start items-center">
        <form>
          <div className="relative">
            {/* <div className="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
              <BsSearch className=" text-black"/>
            </div> */}
            <input
              type="search"
              id="default-search"
              className="block w-full h-6 p-4 pl-4 text-sm text-[#7ACB2D] border rounded-lg  focus:ring-black focus:border-black dark:bg-[#7ACB2D] dark:border-gray-600 dark:placeholder-black dark:text-black"
              placeholder="Equipments..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-0.5 top-0.5 bg-transparent focus:outline-none  font-medium rounded-lg text-sm px-4 py-2"
            >
              <div className="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
              <BsSearch className=" text-white"/>
            </div>
            </button>
          </div>
        </form>

        <div style={{marginTop: '5px'}}>Select Product you want to buy</div>
  
        <div style={{height: '100vh', width: '100vw',marginTop: '20px', padding: '10px 15px 25px 15px', maxWidth: '400px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxHeight: 'calc(100vh - 50px)', overflowY: 'auto'}}>
          {
            products ?
     
            products.map((product, index) => (

              
              <div style={{height: 'auto', width: '35%', backgroundImage: "linear-gradient(60deg, green,white, white)", minWidth: '150px', borderRadius: '10px', boxShadow: '0 0 15px #000', marginTop: '10px', display: 'flex', flexDirection: 'column'}} key={index}>
                  <div style={{height: '150px'}}>
                  <img src={`${reqURL}imgs/${product.image}`} alt="Not Found" style={{height: '150px', width: '100%'}} />
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
                    <p style={{color: "white", textAlign: 'center', height: 'auto', display: 'flex', alignItems: 'center', padding: '5px 0'}}>{product.name}</p>
                  </div>
                  <div style={{display: 'flex', backgroundColor: 'linear-gradient(60deg, #56c474, #56c474, #56c474, #0c9933)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <p style={{fontSize: '15px', margin: '10px 0px', textAlign: 'center'}}>Rs.{product.cost} / day</p>
                    <span style={{display: 'block', height: '25px', width: '90%', borderRadius: '10%', backgroundColor: 'lightblue', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <p style={{color: 'white'}}>Quantity : {product.minimumQuantity}</p>
                    </span>
                    <p style={{color: 'black', marginBottom: '10px'}}>{product.farmer}</p>


                    
                  </div>

                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px 0'}}><button style={{width: '100px', backgroundColor: 'brown', color: 'white', borderRadius: '5px'}}>BUY</button></div>
              </div>
            ))
            :
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px'}}>
            <Circles style={{marginTop: '150px'}}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
            </div>
  
          }
          {/* <div style={{height: '200px', width: '35%', backgroundImage: "linear-gradient(60deg, green, white)", minWidth: '150px', borderRadius: '10px', boxShadow: '0 0 5px #000', marginTop: '10px'}}>
              <div style={{height: '80px'}}>
              <img src="../../assets/images/PM-Kisan-SCHEME.jpg" alt="Not Found" style={{maxHeight: '80px', maxWidth: '100%'}}/>
              </div>
              <p style={{color: "black", textAlign: 'center'}}>Product Title</p>
              <div style={{display: 'flex', backgroundColor: 'green', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <p style={{fontSize: '15px', margin: '10px 0px', textAlign: 'center'}}>Rs.500 / day</p>
                <span style={{display: 'block', height: '25px', width: '35px', borderRadius: '50%', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <p style={{color: 'white'}}>25</p>
                </span>
                <p style={{color: 'lightblue', marginBottom: '10px'}}>Owner</p>
                
              </div>
          </div> */}


        </div>
      </div>
      
    </div>
  );
};

export default marketplace;
