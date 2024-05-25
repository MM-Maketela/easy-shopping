import React from "react";
import PropTypes from "prop-types";
import classes from "./CollectionCard.module.css";
import { BsArrowRightCircle } from "react-icons/bs/index.esm";
import { Link } from "react-router-dom";

const CollectionCard = (props) => {
  return (
    <div className={classes.collection}>
      <div className={classes.shop}>
        <div className={classes.shopImg}>
          <img src={props.image} alt="" />
          <div id={classes.svg}>
            <svg width="350" height="250" viewBox="0 0 350 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H350L108.772 250H0V0Z" fill="#3F45D1" fill-opacity="0.75" />
            </svg>
          </div>
          <div className={classes.btnAndTitle}>
            <h3 id={classes.title}> {props.title}</h3>
            <div className={classes.showBtn}>
              <Link to="/category" id={classes.Btn}>
                {" "}
                <div id={classes.shopNowText}>Shop now</div>
                <BsArrowRightCircle size={15} id={classes.arrow} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
