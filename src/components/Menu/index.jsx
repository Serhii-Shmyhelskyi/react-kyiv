import React, { useState, useEffect } from "react";

import styles from "./menu.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { fetchMenus } from "../../redux/slices/menuSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const menuItem = useSelector((state) => state.menu);
  useEffect(() => {
    dispatch(fetchMenus());
  }, []);

  return (
    <nav className={styles.menu}>
      <div className={styles.menu__btn}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={styles.menu__list}>
        {menuItem.status === "error" ? (
          <div>
            <h2>Виникла помилка 😕</h2>
            <p>Нажаль не вдалося отримати меню</p>
            <p>Спробуйте повторити пізніше</p>
          </div>
        ) : menuItem.status === "loading" ? (
          <div>Loading...</div>
        ) : (
          menuItem.itemMenus.map((obj) => {
            return (
              <li key={obj} className={styles.menu__listItem}>
                <a className={styles.menu__listLink} href="#">
                  {obj}
                </a>
              </li>
            );
          })
        )}
      </ul>
    </nav>
  );
};

export default Menu;
