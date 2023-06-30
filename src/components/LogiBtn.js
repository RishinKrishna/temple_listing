import React from "react";
import Link from "next/link";
import Styles from "./LoginBtn.module.css";


const LogiBtn = () => {
  return (
    <div>
      <Link href="/login" className= {Styles["login-btn"]}> 
         Login
      </Link>
    </div>
  );
};

export default LogiBtn;
