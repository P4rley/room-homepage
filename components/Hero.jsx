import styles from "../styles/Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import data from "../data.json";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [headerSlides] = useState(data);

  const prev = () => {
    setCurrent(current === 0 ? headerSlides.length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current != headerSlides.length - 1 ? current + 1 : 0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src={require(`../public/images/desktop-` +
            headerSlides[current].image)}
          alt=""
          layout="fill"
        />
      </div>

      <div className={styles.right}>
        <div className={styles.arrowButton}>
          <button className={styles.prevArrow} onClick={prev}>
            <Image
              src="/images/icon-angle-left.svg"
              alt=""
              width={20}
              height={20}
            />
          </button>

          <button className={styles.nextArrow} onClick={next}>
            <Image
              src="/images/icon-angle-right.svg"
              alt=""
              width={20}
              height={20}
            />
          </button>
        </div>

        <h1 className={styles.rightHeading}>{headerSlides[current].heading}</h1>
        <p className={styles.rightText}>{headerSlides[current].subheading}</p>

        <a className={styles.shop}>
          <span className={styles.shopText}>SHOP NOW</span>
          <Image src="/images/icon-arrow.svg" width={50} height={15} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
