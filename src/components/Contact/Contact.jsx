import React from 'react'
import styles from './Contact.module.css'
import { MdAlternateEmail, MdCall } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { FaInstagram } from 'react-icons/fa6';

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>CONTACK INFORMATION</h3>
                <p className={styles.contact_desc}>
                Thank you for having me here. I want to experience I will do my best to come here.
                </p>
                <p>
                    <address>
                    Nan  <br />
                    Nanoi , Thailand
                    </address>
                </p>
                <p><MdAlternateEmail/>65020733@up.ac.th</p>
                <p><FaInstagram/>bammkanok</p>
                <p><MdCall/>095-xxx-xxxx</p>

            </div>
            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder="eg. Somchai"></input>
                        </div>
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder="eg. Jaidee"></input>
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder="eg. asdfsa@dddd.com" />
                    <label htmlFor="message">Your message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Type here"></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact