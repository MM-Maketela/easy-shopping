import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <nav id={classes.Navigation}>
      <div id={classes.navItemContainer}>
        <ul id={classes.navItems}>
          <li>
            <Link to="" id={classes.item}>
              Home
            </Link>
          </li>
          <li>
            <Link id={classes.item} to="/category">
              Hot Deals
            </Link>
          </li>
          <li>
            <Link id={classes.item} to="/category">
              Categories
            </Link>
          </li>
          <li>
            <Link id={classes.item} to="/category">
              Laptops
            </Link>
          </li>
          <li>
            <Link id={classes.item} to="/category">
              Smartphones
            </Link>
          </li>
          <li>
            <Link id={classes.item} to="/category">
              Cameras
            </Link>
          </li>
          <li>
            <Link id={classes.item} to="/category">
              Accessories
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
