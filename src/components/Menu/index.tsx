import { FC } from "react";

import styles from "./menu.module.scss";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";

const Menu: FC = () => {
  const menu = useSelector((state: RootState) => state.menu.itemMenus);

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
            <li key={obj.name} className={styles.menu__listItem}>
              <Link to={obj.link} className={styles.menu__listLink}>
                {obj.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
