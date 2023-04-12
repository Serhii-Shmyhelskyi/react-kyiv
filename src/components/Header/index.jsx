import React from "react";
import styles from "./header.module.scss";

import background from "../../assets/img/topBg.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div
        className={styles.header__top}
        style={{ backgroundImage: `url(${background})` }}>
        <div className={styles.header__topIn}>
          <h1 className={styles.header__title}>Київ</h1>
          <p className={styles.header__text}>Explore the world</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
