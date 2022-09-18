import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__text">
        <p>Contact</p>
        <h1>Find Us</h1>
        <h3>733 West Lane Lincoln Park, MI 48146</h3>

        <h4>Telephone Number: 202-555-0167</h4>
        <h5>Email Adress: flavorosa-restaurant@gmail.com</h5>
      </div>
      <div className="contact__opening-hours">
        <h3>Opening Hours</h3>
        <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
        <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
      </div>
    </section>
  );
};

export default Contact;
