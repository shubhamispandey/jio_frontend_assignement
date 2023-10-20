"use client";
import { useState, CSSProperties } from "react";
import "./PageSpinner.css";
import { PropagateLoader } from "react-spinners";
import Image from "next/image";

const PageSpinner = () => {
  return (
    <div className="page-spinner">
      <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
      <PropagateLoader color="#0658ac" />
    </div>
  );
};

export default PageSpinner;
