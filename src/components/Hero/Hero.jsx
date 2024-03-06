import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";


function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}> My Name is </p>
            <h3 className={styles.text_2}>Kanokwan Thathip</h3>
            <p className={styles.text_3}>
              <span>I am a </span>
              <TypeAnimation
                sequence={[
                  "Web developer.",
                  1000,
                  // Same substring at the start will only be typed out once, initially
                  "programmer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "design application",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
</p>
            <p className={styles.text_4}>
            Gentle but not weak
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className={styles.hero_image}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;