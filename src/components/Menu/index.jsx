import React, { useState, useEffect } from "react";
// import axios from "axios";
import styles from "./menu.module.scss";

import { useSelector } from "react-redux";

const Menu = () => {
  // const [itemMenu, setItemMenu] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://63ebc7d7be929df00ca23593.mockapi.io/itemMenu")
  //     .then((res) => {
  //       setItemMenu(res.data);
  //     });
  // }, []);
  const itemMenu = useSelector((state) => state.counter.itemMenu);
  return (
    <nav className={styles.menu}>
      <div className={styles.menu__btn}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={styles.menu__list}>
        {itemMenu.map((obj) => {
          return (
            <li key={obj} className={styles.menu__listItem}>
              <a className={styles.menu__listLink} href="#">
                {obj}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
