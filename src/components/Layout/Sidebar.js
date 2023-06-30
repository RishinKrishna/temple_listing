import React from "react";
import Link from "next/link";
import Styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={`${Styles["admin-sidebar"]}`}>
      <nav>
        <h4 className={`py-4 px-2 ${Styles["sidebar-logo"]}`}>
          TempleAddress.com
        </h4>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-4 my-1 ">
            <Link className={`nav-link text-dark fw-semibold fs-5 px-3 ${Styles["nav_link"]}`} href="">
              About
            </Link>
          </li>
          <li className="nav-item mx-4 my-1">
            <Link className={`nav-link text-dark fw-semibold fs-5 px-3 ${Styles["nav_link"]}`} href="/products">
              Temple List
            </Link>
          </li>
          <li className="nav-item mx-4 my-1">
            <Link className={`nav-link text-dark fw-semibold fs-5 px-3 ${Styles["nav_link"]}`} href="/templeList">
              Gallery
            </Link>
          </li>
          <li className="nav-item mx-4 my-1">
            <Link className={`nav-link text-dark fw-semibold fs-5 px-3 ${Styles["nav_link"]}`} href="/login">
              Login
            </Link>
          </li>
          <li className="nav-item mx-4 my-1 mt-2"></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;