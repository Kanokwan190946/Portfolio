import React from 'react'
import styles from './Portfolio.module.css'

const user ={
  img1:'https://i.pinimg.com/564x/ee/3b/1b/ee3b1b75d0e41e022d571d19c4d4a96f.jpg',
  img2:'https://i.pinimg.com/564x/89/41/65/894165f3830477647d582800e9b5ed0c.jpg',
  img3:'https://i.pinimg.com/564x/08/f4/ea/08f4eaa4e0625af972599365dfeec6b6.jpg',
  img4:'https://i.pinimg.com/564x/a2/46/a3/a246a38a46de6e005e7b851009af9f11.jpg',
  img5:'https://i.pinimg.com/564x/b9/b0/6f/b9b06fdb71c126d069da4b328993df3f.jpg',
  img6:'https://i.pinimg.com/564x/16/04/93/160493dbe7df1c370cfd035e06595c4c.jpg',
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