import React, { useState } from "react";

import { images } from "../../../constants";

const GlowButton = () => {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    if (!pressed) {
      setPressed(true);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-8 py-3 rounded-lg w-full bg-primary text-white font-bold md:w-fit md:whitespace-nowrap"
      style={{
        backgroundColor: pressed ? "#4CAF50" : "", // green when pressed, else default
        transition: "background-color 0.3s ease",
        cursor: pressed ? "default" : "pointer",
      }}
      disabled={pressed}
    >
      {pressed ? "Sealed" : "Embrace"}
    </button>
  );
};

const CTA = () => {
  return (
    <>
      <svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0D2436"
        />
      </svg>

      <section className="relative bg-dark-hard px-5">
        <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center">
          <div className="col-span-12 lg:col-span-6">
            <h5 className="text-white font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
              Smart Postify – Discover thoughts that matter, lessons that last, and posts that make you pause.
            </h5>
            {/* <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
              <input
                type="text"
                className="px-4 py-3 rounded-lg w-full placeholder:text-dark-light"
                placeholder="Your Email"
              />
            </div> */}
            <p className="text-dark-light text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
              <span className="font-bold italic text-[#B3BAC5] md:not-italic md:font-normal md:text-dark-light">
                Let’s pledge to read 
              </span>{" "}
              a page each day, igniting curiosity and empowering our journey of growth.
            </p><br/>
            <GlowButton />
          </div>
          <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last">
            <div className="w-3/4 mx-auto relative">
              <div className="w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%]" />
              <div className="w-1/2 h-1/2 bg-white rounded-lg opacity-[.06] absolute -bottom-[10%] -left-[8%]" />
              <div className="w-full rounded-xl bg-white p-3 z-[1] relative">
                <img
                  src={images.CtaImage}
                  alt="title"
                  className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                />
                <div className="p-5">
                  <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                    Small steps, big growth
                  </h2>
                  <p className="text-dark-light mt-3 text-sm md:text-lg">
                    Each small step builds momentum toward lasting success and real change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
