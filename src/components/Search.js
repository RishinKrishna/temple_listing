import React from "react";
import Styles from "./search.module.css";
import SearchImg from "@/assets/images/search-img/search.svg";
// import DropdowonBtn from "./dropdowonBtn";
// import { Dropdown } from "bootstrap";

const Search = () => {
  return (
    <div>
      <div className={Styles["temple-input"]}>
        <input
          className={Styles["search-input"]}
          type="text"
          name="serchBox"
          placeholder="Search temple..."
        />
        <img src={SearchImg.src} className={`d-block ${Styles["search-icon"]}`} alt="..." />
      </div>
      {/* <DropdowonBtn/> */}
    </div>
  );
};

export default Search;
