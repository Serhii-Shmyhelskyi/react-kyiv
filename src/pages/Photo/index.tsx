import { FC } from "react";
import styles from "./photo.module.scss";

import Slider from "../../components/Slider/Slider";

const Photo: FC = () => {
  return (
    <section className={styles.photo}>
      <div className={styles.container}>
        <h2 className={styles.photo__title + " " + styles.title}>
          Київ в фото
        </h2>
        <p className={styles.photo__text + " " + styles.containerContent}>
          Проблема походження Києва постійно привертала увагу істориків. За
          легендою, наприкінці V - початку VI ст. нашої ери три брати Кий, Щек і
          Хорив та їх сестра Либідь заснували на крутому правому березі річки
          Дніпро місто та назвали його на честь старшого брата Києвом.
          Археологічними дослідженнями виявлено на Старокиївській горі житла та
          господарські будівлі "містечка Кия", датовані V-VI ст. Офіційно
          прийнято дату заснування Києва - 482 рік.
        </p>
        <div className={styles.photo__slider}>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Photo;
