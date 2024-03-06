import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Leisure activities</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/360102801_661157488907585_2244236003193224579_n.jpg" alt="" />
            <p>Go to the beach</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/376427311_125970403908822_8181956495185048738_n.jpg" alt="" />
            <p>work</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/395502079_1064014521426032_3197137900085209045_n.jpg" alt="" />
            <p>Cook</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/405420901_376511184883292_1397235329166583557_n.jpg" alt="" />
            <p>flower arrangement</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/430195456_1575056979925112_8225809804253651409_n.jpg" alt="" />
            <p>play with pets</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/430737705_3210318159102241_5459136999957994975_n.jpg" alt="" />
            <p>exercise</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio