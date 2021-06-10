import React from "react";
import Header from "../Components/Header/Header";


export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    const templateParams = {}
   
  }

  return (
    <div>
      <Header headerText="Contact us" gradient={true} />
      <div>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
