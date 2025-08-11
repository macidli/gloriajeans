import React from "react";

const OfferingCard = ({ title, description, imageUrl, buttonText }) => (
  <div
    className="group cursor-pointer overflow-hidden transition-all duration-700 w-full sm:w-[48%] lg:w-[32%] aspect-[579/684] relative"
    style={{ transition: "background-size 0.7s ease-in-out" }}
  >
    <div
      className="absolute inset-0 bg-black/40 bg-cover bg-center bg-blend-overlay
                 group-hover:bg-[length:105%] transition-all duration-700
                 transform group-hover:scale-105"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>


    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="relative z-10 h-full"
    >
      <div
        className="flex flex-col justify-end h-full p-6 text-white bg-gradient-to-t from-black/60 to-transparent
                 transition-all duration-700
                 group-hover:opacity-0 group-hover:translate-y-4"
      >
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <hr className="w-14 border-t-2 border-[#f57f29] mb-5" />
        <p className="text-sm mb-6 font-Montserrat">{description}</p>
        <div
          className="w-[225px] h-[50px] bg-[#f57f29] uppercase font-bold flex justify-center items-center text-white hover:text-[#f57f29] hover:bg-white transition duration-300 cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {buttonText}
        </div>
      </div>
    </div>
  </div>
);

export default OfferingCard;

