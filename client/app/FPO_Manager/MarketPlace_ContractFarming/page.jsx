"use client"
import React, { useState, useEffect } from "react";
import "./home.css";
import Link from "next/link";
import { url } from "@/app/utils";
import axios from "axios";

const Page = () => {
  const [products, setProducts] = useState(false);
  const [reqURL, setreqURL] = useState(url);
  const [img, setImg] = useState();

  const getAllProducts = async () => {
    try {
      console.log("Fetching ...");
      const res = await axios.get(url + "/getserviceproviders");
      console.log(res.data.msg)
      setProducts(res.data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <div className="AppBar"></div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', flexWrap: 'wrap'}}>

 


{products &&
        products.map((product, productIndex) => (
          <div key={productIndex} style={{display: 'flex'}}>
            {product.orders.map((order, orderIndex)=>(
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '200px', width: '280px', backgroundColor: '#fff', margin: '10px', borderRadius: '7px', boxShadow: '0 0 7px #000'}}>
                <p>{product.name}</p>
                <p>{product.company}</p>
                <p>{order.crop}</p> 
                <p>{order.quantity}</p>
                <p>{order.amount}</p>
              </div>


            ))}
          </div>
        ))}
   
    </div>
    </div>
  );
};

export default Page;
