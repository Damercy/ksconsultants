import React from "react";
import Header from "../Components/Header/Header";
import axios from "axios";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    const data = {
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id: process.env.REACT_APP_TEMPLATE_ID,
      user_id: process.env.REACT_APP_USER_ID,
      template_params: {
        from_name: "James",
        to_name: "Dayamoy",
        message: "Test from react",
        phone: 8342891018,
      },
    };
    console.log(JSON.stringify(data));
    // axios
    //   .post(
    //     "https://api.emailjs.com/api/v1.0/email/send",
    //     JSON.stringify(data),
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  return (
    <div>
      <Header
        headerText="Contact us"
        subHeaderText="Fill the form & we'll get back to you"
        gradient={true}
      />
      <div>
        <form
          className="contact-form flex flex-col justify-center content-center p-16"
          onSubmit={sendEmail}
        >
          <label className="text-xl">Name</label>
          <input
            className="focus:outline-none focus:ring  rounded-md p-2"
            type="text"
            name="from_name"
          />
          <label>Email</label>
          <input
            className="focus:outline-none focus:ring  rounded-md p-2"
            type="email"
            name="from_email"
          />
          <label>Mobile number</label>
          <input
            className="focus:outline-none focus:ring  rounded-md p-2"
            type="phone"
            name="phone"
          />
          <label>Message</label>
          <textarea
            className="focus:outline-none focus:ring  rounded-md p-2"
            name="message"
          />
          <input
            className="cursor-pointer md:mx-72 transform transition duration-200 ease-in-out hover:scale-105 bg-gradient-to-r from-green-400 to-blue-500 p-5 float-right rounded-full hover:bg-gradient-to-r hover:from-green-700 hover:to-blue-700 text-white uppercase focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
}
