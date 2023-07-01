import React from "react";
import Styles from "./TempleCard.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const TempleCard = (props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/temple/${123}`); // count 1   console.log("Count" + count);
  };
  return (
    <div className="col-md-3">
      <div className={Styles["card"]}>
        <div className={Styles["card-listing"]}>
          {/* <Image
            className={Styles["card-listing-img"]}
            src="https://cdn.pixabay.com/photo/2014/02/02/08/41/temple-256588_1280.jpg"
            alt=""
            width={800}
            height={500}
          /> */}
        </div>
        <div className="px-3">
          <h2>{props.name}</h2>
          <p>{props.place}</p>
          <p>{props.discription}</p>
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-outline-warning"
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default TempleCard;
