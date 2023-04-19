import React from "react";
import styles from "./kyiv.module.scss";

import kuivPhoto1 from "../../assets/img/kyiv1.jpg";
import kuivPhoto2 from "../../assets/img/kyiv2.jpg";

const Kyiv = () => {
  return (
    <section className={styles.kyiv}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <h2 className={(styles.kyiv__title, styles.title)}>Київ - це...</h2>
          <p className={styles.kyiv__text}>
            Київ – одне з найстаріших міст Європи, засноване щонайменше 1500
            років тому. Сучасне європейське місто здатне здивувати будь-кого –
            від любителів природної краси, архітектури та визначних пам'яток до
            тих, хто віддає перевагу більш насиченому та активному відпочинку.
            Київ побудовано на схилах живописної річки Дніпро, що дає можливість
            милуватися неповторними панорамами мегаполісу.
          </p>
          <div
            className={styles.kyiv__item}
            style={{ backgroundImage: `url(${kuivPhoto1})` }}>
            <div className={styles.kyiv__box}>
              <h3 className={styles.kyiv__boxTitle}>Історична спадщина</h3>
              <p className={styles.kyiv__boxText}>
                Києво-Печерська лавра заснована у XI ст. Розташована на схилах
                Дніпра, вона є одним із найбільш впізнаваних символів столиці
                України. Сюди приїздять тисячі віруючих людей та паломників,
                також це улюблене місце для цікавих прогулянок, куди люблять
                завітати не лише гості Києва, але й його мешканці.
              </p>
            </div>
          </div>
          <div
            className={styles.kyiv__item}
            style={{ backgroundImage: `url(${kuivPhoto2})` }}>
            <div className={styles.kyiv__box}>
              <h3 className={styles.kyiv__boxTitle}>Київ гастрономічний</h3>
              <p className={styles.kyiv__boxText}>
                Божественні страви і напої національної української кухні –
                пиріжки у старовинній пекарні, 8 видів котлети по-київськи,
                різні види сала, крученики, вареники, борщ, київські цукати, ну
                і звісно, знаменитий Київський торт. На вас очікують кулінарні
                майстер-класи, екскурсії гастрономічними місцями, вулична їжа і
                дегустація неймовірно смачних настоянок.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kyiv;
