import React from "react";
import styles from "./Testimonials.module.css";

const user ={
  img7:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.akerufeed.com%2Ftrend-life%2F30-boyfriend-picture-ideas&psig=AOvVaw3gDWHupQsky2T2028M3Jhf&ust=1709829579375000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqGAoTCICUrdiJ4IQDFQAAAAAdAAAAABCeAQ',
  img8:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ladyissue.com%2F218973%2F&psig=AOvVaw14g4xVrS03yXM7ZcDDBesq&ust=1709829796916000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDJh8CK4IQDFQAAAAAdAAAAABAE',
  img9:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ladyissue.com%2F218973%2F&psig=AOvVaw14g4xVrS03yXM7ZcDDBesq&ust=1709829796916000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDJh8CK4IQDFQAAAAAdAAAAABAI',
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