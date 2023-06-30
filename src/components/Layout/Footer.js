import React from "react";
import Styles from "./footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={Styles["foo_ter"]}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link className="navbar-brand fw-semibold" href="/">
              <h2 className="pb-4 text-light"> TempleAddress.com</h2>
            </Link>
            <p className="text-light">
              Our team works well with the management of all the temples listed
              on the website. As a result, all poojas booked through us will be
              performed with the same zeal and emotion as if booked in person at
              Temple counter.
            </p>
          </div>
        </div>
        <div className={Styles["foot-line"]}></div>
        <div className="row">
          <div className="col-md-6">
            <div className="py-4">
              <p className="text-light fs-6">
                Copyright © 2021 iPrarthana. All Rights Reserved
              </p>
              <span className="text-light fs-6">
                templeAddress brand is owned and operated by templeAddress Private
                Limited
              </span>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
