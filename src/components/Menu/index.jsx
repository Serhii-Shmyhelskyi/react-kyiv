import React from "react";

import styles from "./menu.module.scss";

import { useSelector } from "react-redux";

const Menu = () => {
  const menu = useSelector((state) => state.menu.itemMenus);

  return (
    <nav className={styles.menu}>
      <div className={styles.menu__btn}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={styles.menu__list}>
        {menu.map((obj) => {
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
