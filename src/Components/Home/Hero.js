import React from "react";

export default function Hero() {
  const imageLink =
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  return (
    <section className="pt-5 sm:pt-16">
      <div
        class="bg-cover bg-center bg-no-repeat h-96 bg-opacity-100"
        style={{
          backgroundImage: `url(${imageLink})`,
        }}
      >
        <h1 class="text-4xl text-opacity-90 sm:text-6xl float-right p-10 my-8 text-white font-sans uppercase tracking-widest">
          Safety
          <br />
          reimagined
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-6xl">
            .
          </span>
        </h1>
        <div className="text-center">
          <a
            href="/contact"
            className="transform transition duration-200 ease-in-out hover:scale-110 bg-gradient-to-r from-green-400 to-blue-500 p-5 float-right my-60 -mx-72 rounded-full hover:bg-gradient-to-r hover:from-green-700 hover:to-blue-700 text-white uppercase focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Get a free consultation
          </a>
        </div>
      </div>
    </section>
  );
}
