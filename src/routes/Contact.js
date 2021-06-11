import React, { useRef } from "react";
import Header from "../Components/Header/Header";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const contactForm = useRef(null);

  function sendEmail(e) {
    toast.info("Sending details...", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    e.preventDefault();
    const formData = new FormData(e.target);
    let form = {};
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
      if (key === "phone" && value.length === 0)
        form[key] = "Did not fill phone number";
      else form[key] = value;
    }
    const data = {
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id: process.env.REACT_APP_TEMPLATE_ID,
      user_id: process.env.REACT_APP_USER_ID,
      template_params: {
        to_name: "Mr. Asish Baron Adhikari",
        ...form,
      },
    };
    console.log(JSON.stringify(data));
    axios
      .post(
        "https://api.emailjs.com/api/v1.0/email/send",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        contactForm.current.reset();
        if (response.status === 200)
          toast.success("Sent successfully! We'll get back to you soon.");
        else toast.error("Failed to send message! Please try again.");
      })
      .catch((error) => {
        contactForm.current.reset();
        toast.error("Failed to send message! Please try again.");
      });
  }

  return (
    <div>
      <Header
        headerText="Contact us"
        subHeaderText="Fill the form & we'll get back to you"
        gradient={true}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <form
          ref={contactForm}
          className="contact-form flex flex-col gap-2 gap-y-4 justify-center content-center p-16  z-30 bg-gray-300 rounded-xl p-10 shadow-2xl md:mx-80"
          onSubmit={sendEmail}
        >
          <label className="text-xl font-light">Name *</label>
          <input
            className="focus:outline-none focus:ring  rounded-md p-2"
            type="text"
            name="from_name"
            required
          />
          <label className="text-xl font-light">Email *</label>
          <input
            className="focus:outline-none focus:ring  rounded-md p-2"
            type="email"
            name="from_email"
            required
          />
          <label className="text-xl font-light">Mobile number</label>
          <input
            className="focus:outline-none focus:ring  rounded-md p-2"
            type="phone"
            name="phone"
          />
          <label className="text-xl font-light">Message *</label>
          <textarea
            className="focus:outline-none focus:ring  rounded-md p-2"
            name="message"
            required
          />
          <span className="text-sm text-gray-500 font-thin">
            * fields are required
          </span>
          <input
            className="cursor-pointer transform transition duration-200 ease-in-out hover:scale-105 bg-gradient-to-r from-green-400 to-blue-500 p-5 float-right rounded-full hover:bg-gradient-to-r hover:from-green-700 hover:to-blue-700 text-white uppercase focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
}
