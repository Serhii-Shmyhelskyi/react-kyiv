import React from "react";
import styles from "./reason.module.scss";

import reasonStat1 from "../../assets/img/statistics1.svg";
import reasonStat2 from "../../assets/img/statistics2.svg";
import reasonStat3 from "../../assets/img/statistics3.svg";
import reasonStat4 from "../../assets/img/statistics4.svg";

const Reason = () => {
  return (
    <section className={styles.reason}>
      <div className={styles.container + " " + styles.sectionLine}>
        <h2 className={styles.reason__title + " " + styles.title}>
          Чому тобі сподобається відпустка в Києві?
        </h2>
        <p className={styles.reason__text + " " + styles.containerContent}>
          Хто хоч на день приїде до Києва, не може не зайти до Києво-Печерської
          лаври, Софійського та Михайлівського соборів, не познімкуватися на
          Майдані, не порозглядати Будинок з химерами, не прогулятися
          Андріївським узвозом. Проте, крім «стандартного набору» найвизначніших
          місць, у столиці є чимало місць незвичайних, які варто відвідати не
          лише задля цікавості, а й задля нетипових світли
        </p>
        <div className={styles.reason__link + " " + styles.containerContent}>
          <a href="#">Read More ››</a>
        </div>
        <div
          className={styles.reason__statistics + " " + styles.containerContent}>
          <div className={styles.reason__statisticsItem}>
            <img
              className={styles.reason__statisticsImages}
              src={reasonStat1}
              alt="ReasonStat"
            />
            <p className={styles.reason__statisticsNum}>1,530</p>
            <p className={styles.reason__statisticsText}>Trips</p>
          </div>
          <div className={styles.reason__statisticsItem}>
            <img
              className={styles.reason__statisticsImages}
              src={reasonStat2}
              alt="ReasonStat"
            />
            <p className={styles.reason__statisticsNum}>256</p>
            <p className={styles.reason__statisticsText}>Venues</p>
          </div>
          <div className={styles.reason__statisticsItem}>
            <img
              className={styles.reason__statisticsImages}
              src={reasonStat3}
              alt="ReasonStat"
            />
            <p className={styles.reason__statisticsNum}>2,351</p>
            <p className={styles.reason__statisticsText}>Tickets Sold</p>
          </div>
          <div className={styles.reason__statisticsItem}>
            <img
              className={styles.reason__statisticsImages}
              src={reasonStat4}
              alt="ReasonStat"
            />
            <p className={styles.reason__statisticsNum}>2,615</p>
            <p className={styles.reason__statisticsText}>Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
