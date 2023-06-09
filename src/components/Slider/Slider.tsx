import { FC, useState } from "react";

import styles from "./slider.module.scss";

import swiperSlider1 from "../../assets/img/photoSlider1.jpg";
import swiperSlider2 from "../../assets/img/photoSlider2.jpg";
import swiperSlider3 from "../../assets/img/photoSlider3.jpg";
import sliderPrew from "../../assets/img/arrow-left.svg";
import sliderNext from "../../assets/img/arrow-right.svg";

const Slider: FC = () => {
  let slides = [swiperSlider1, swiperSlider2, swiperSlider3];
  let sizePhoto = 640;

  const [offset, setOffset] = useState(0);

  return (
    <>
      <div className={styles.photo__slider}>
        <div
          style={{ left: offset + "px" }}
          className={styles.photo__sliderLine}>
          {slides.map((slide) => (
            <img src={slide} alt={slide} />
          ))}
        </div>
        <button
          onClick={() =>
            offset > -sizePhoto + 1
              ? setOffset(-sizePhoto * (slides.length - 1))
              : setOffset(offset + sizePhoto)
          }
          className={styles.sliderPrew}>
          <img src={sliderPrew} alt="sliderPrew" />
        </button>
        <button
          onClick={() =>
            offset < -sizePhoto * (slides.length - 1) + 1
              ? setOffset(0)
              : setOffset(offset - sizePhoto)
          }
          className={styles.sliderNext}>
          <img src={sliderNext} alt="sliderNext" />
        </button>
      </div>
      <div className={styles.sliderSmall}>
        {slides.map((slide) => (
          <img src={slide} alt={slide} />
        ))}
      </div>
    </>
  );
};

export default Slider;
