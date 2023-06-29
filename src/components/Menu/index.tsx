import { FC } from "react";

import styles from "./menu.module.scss";

import classnames from "classnames";

import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { RootState } from "../../redux/store";

const Menu: FC = () => {
  const menu = useSelector((state: RootState) => state.menu.itemMenus);

  let location = useLocation();

  let isActiveMenu = (button: string) => location.pathname === button;

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
            <Link to={obj.link} key={obj.name}>
              <li
                className={classnames({
                  [styles.active]: isActiveMenu(obj.pathnameId),
                })}>
                {obj.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
