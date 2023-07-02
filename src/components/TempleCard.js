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
          <Image
            className={Styles["card-listing-img"]}
            src={props.image}
            alt=""
            width={800}
            height={150}
          />
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
