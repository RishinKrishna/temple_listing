import Navbar from "@/components/Layout/Navbar";
import { useRouter } from "next/router";
import React from "react";

const TempleList = () => {
  const { query } = useRouter()
  const { id } = query;
  return (
    <div>
      <Navbar />  
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="">
            </div>
          </div>
          <div className="col-md-5">
            <div className="">
            <h1>Temple Name</h1>
            <h3>TempleAddress</h3>
            <p>
              Located at a distance of 4 kms from Kottayam in Kumaranalloor,
              Kumaranalloor Devi Temple enshrines Bhagwathi- the mother Goddess.
              Considered as one of the most important Hindu temples among 108
              Durgalayas (Devi temples) spread across Kerala, the shrine is said
              to be 2400 years old as per historical, mythical and scientific
              sources.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleList;
