import React from 'react'
import styles from './Portfolio.module.css'

const user ={
  img1:'https://pin.it/7JYwAyHT2',
  img2:'https://pin.it/2wD6KqUrJ',
  img3:'https://pin.it/3eVJpqUok',
  img4:'https://pin.it/36EZacUES',
  img5:'https://pin.it/1kwuVqeow',
  img6:'https://pin.it/34yZg8ueK',
}
function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Leisure activities</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src={user.img1} />
            <p>Go to the beach</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img2} />
            <p>work</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img3} />
            <p>Cook</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img4} />
            <p>flower arrangement</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img5} />
            <p>play with pets</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img6} />
            <p>exercise</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio