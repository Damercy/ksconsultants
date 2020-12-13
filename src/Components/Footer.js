import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-600 p-10 relative">
      <div className="flex flex-wrap flex-row justify-between text-center">
        <div>
          <h3 className="text-4xl text-center sm:text-2xl p-5 font-bold  text-white">
            FOLLOW US ONLINE
          </h3>
          <div className="space-x-5 text-center">
            <a href="https://www.facebook.com/ksc1985/">
              <i className="fab fa-facebook fa-2x text-white hover:text-blue-600 cursor-pointer"></i>
            </a>
            <i className="fab fa-linkedin fa-2x text-white hover:text-blue-400 cursor-pointer"></i>
          </div>
        </div>
        <div>
          <h3 className="text-4xl mt-10 sm:mt-0 text-center sm:text-2xl p-5 font-bold  text-white">
            CONTACT US
          </h3>
          <div className="text-white ">
            <i className="fas fa-phone mr-2 animate-pulse"></i>
            <a href="tel:+919434791588">
              <span>
                (+91) 9434791588 | 7584866575 | 7047149591 | 8514862713
              </span>
            </a>
            <br />
            <i className="fas fa-at mr-2 animate-pulse"></i>
            <a href="mailto:ksconsultant1985@gmail.com">
              <span>ksconsultant1985@gmail.com</span>
            </a>

          </div>
          <p className=" text-gray-300 text-center text-lg mt-10">
            &copy; K.S. Consultant
          </p>
        </div>
        <div className="hidden sm:block">
          <h3 className="text-2xl font-bold  text-white">QUICK LINKS</h3>
          <ul className="flex flex-col text-center mt-2 text-gray-500 ">
            <Link to="/">
              <li className="hover:text-white">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-white">Who we are</li>
            </Link>
            <Link to="/services">
              <li className="hover:text-white">Our services</li>
            </Link>
            <Link to="/profile">
              <li className="hover:text-white">Our experts</li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-white">Contact us</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
