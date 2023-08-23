import React from "react";
import "./home.css";
import Link from "next/link";

const page = () => {
  return (
    <div>
      
      <div className="AppBar"></div>

      <div className="contractcard">
          <Link href="">
            <button type="button" className="viewdetail">
              Accept
            </button>
          </Link>

          <p className="name">Name</p>
          <p className="quantity">Qunatity </p>
          <p className="amount">Amount per kg </p>
        </div>
    </div>
  );
};

export default page;
