import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import React, {useState} from "react";
const ContactForm = () => {
  const[name, setName]= useState("Ritesh")
  const [email, setEmail] = useState("support@dosomecoding.com");
  const [text, setText] = useState("my second project is here");
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target)

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    console.log(name,email,text,"----------------MY DATA")
  };
    
   
  return( <section className={styles.container}>
    
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
    <Button text="VIA CALL" icon={< FaPhoneAlt  fontSize="22px"/>}/>
    </div>
    <Button 
    isOutline={true}
    text="VIA A EMAIL" icon={< MdEmail  fontSize="22px"/>}/>
    <form onSubmit={handleSubmit}>
      <div className={styles.form_control}>
      <label htmlFor="name">Name</label>
      <input type="text"name="name"/>
      </div>
      <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="3" />
          </div>
          
          <div
            style={{ display: "flex",
              justifyContent: "center",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>{name + " " + email + " " + text}</div>
      

    </form>
    </div>
   
    <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    

        </section>
  );
  
}

export default ContactForm;