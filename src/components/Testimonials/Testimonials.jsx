import React from "react";
import styles from "./Testimonials.module.css";

const user ={
  img7:'https://www.akerufeed.com/wp-content/uploads/2019/09/2-55.jpg',
  img8:'https://www.ladyissue.com/wp-content/uploads/2021/11/2-23-2.jpg',
  img9:'https://www.ladyissue.com/wp-content/uploads/2021/11/2-16-5.jpg',
}
function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
          Good at work and organized.
          </p>
          <img
            src="src/components/Testimonials/2-55.jpg"
            alt=""
          />
          <h4>Trin</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          Focused, determined, good-hearted and friendly.
          </p>
          <img
            src="src/components/Testimonials/2-23-2.jpg"
            alt=""
          />
          <h4>King</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          Helpful and careful, not deviating from appointments.
          </p>
          <img
            src="src/components/Testimonials/2-16-5.jpg"
            alt=""
          />
          <h4>Apple</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;