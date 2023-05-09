import React, { createRef } from "react";

import styles from "./dream.module.scss";
import dreamphoto from "../../assets/img/about-img.png";

const Dream = () => {
  return (
    <div className={styles.dream}>
      <div className={styles.about__preview + " " + styles.sectionLine}>
        <h2 className={styles.about__previewTitle + " " + styles.title}>
          Літак Мрія
        </h2>
        <div
          className={styles.about__imagesBox + " " + styles.containerContent}>
          <img src={dreamphoto} alt="Dream AH225" />
          <div className={styles.about__dot + " " + styles.about__dot1}>
            <p className={styles.about__dotText}>240 світових рекордів</p>
          </div>
          <div className={styles.about__dot + " " + styles.about__dot2}>
            <p className={styles.about__dotText}>
              Розмах крила, становить 88,4 метра.
            </p>
          </div>
          <div className={styles.about__dot + " " + styles.about__dot3}>
            <p className={styles.about__dotText}>
              Максимальна вага для зльоту – 600 тонн
            </p>
          </div>
          <div className={styles.about__dot + " " + styles.about__dot4}>
            <p className={styles.about__dotText}>6 двигунів</p>
          </div>
        </div>
        <p
          className={styles.about__previewText + " " + styles.containerContent}>
          Ан-225 є найбільшим літаком у світі, що володіє самою високою
          вантажопідйомністю. Це реактивне транспортне повітряне судно.
          Розроблялося в Україні, дослідно-конструкторським бюро імені О. К.
          Антонова. Метою побудови такого літака, було транспортування в повітрі
          космічних човників на космодром для їх подальшого запуску. Із-за
          великих розмірів човників, розмістити їх усередині літака небуло
          можливим. Конструктори прийшли до рішення розмістити їх на поверхні
          повітряного судна за допомогою спеціального кріплення. Для цього
          довелося повністю змінити будову хвостової частині літака. Так і
          з'явився Ан-225.
        </p>
      </div>
    </div>
  );
};

export default Dream;
