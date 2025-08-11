import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Section({
  title = "",
  paragraphs = [],
  image = null,
  reverse = false,
  isLast = false,
}) {
  const displayTitle = title.toLowerCase();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  return (
    <div
      className={`${isLast ? "bg-[#fff2e9]" : "bg-[#f8f8f8]"} py-[30px] md:py-[50px]`}
    >
      <div
        className={`
          flex gap-[10px]
          flex-col-reverse
          md:flex-row
          ${reverse ? "md:flex-row-reverse" : ""}
          py-0
          pl-0 lg:pl-[10px] xl:pl-[70px]
        `}
      >
        <div className="w-full md:w-[50%] flex flex-col justify-center items-start text-black px-[30px] md:pl-[50px]">
          <div>
            <h1
              data-aos="fade-down"
              className="pt-[15px] md:pt-0 pb-[15px] md:pb-[25px] capitalize text-[1.5em] lg:text-[2.2em] xl:text-[2.4em] font-[800]"
            >
              {displayTitle}
            </h1>
            <hr className="w-[40px] border-t-2 border-[#f57f29] pb-[30px]" />
          </div>

          <div className="pr-[20px] text-[.85em] md:text-[.95em]">
            {paragraphs.map((para, index) => (
              <p
                key={index}
                data-aos="fade-down"
                data-aos-delay={50 * index} 
                className={`${
                  title === "Our Values"
                    ? "pb-[25px]"
                    : "pb-[30px] md:pb-[55px]"
                } font-Montserrat text-[#4f4f4f]  ${
                  para.includes("committed") ? "italic" : ""
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {image && (
          <div className="w-full md:w-[50%] px-[10px] md:px-0 flex justify-center items-center">
            <img
              src={image}
              alt={title || "image"}
              className="max-w-full h-auto"
              data-aos="fade-up"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;
