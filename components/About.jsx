import styles from "../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPic}>
        <Image src="/images/image-about-dark.jpg" layout="fill" alt="" />
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading}>About Our Furniture</h1>
        <p className={styles.text}>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>

      <div className={styles.rightPic}>
        <Image src="/images/image-about-light.jpg" layout="fill" alt="" />
      </div>
    </div>
  );
};

export default About;
