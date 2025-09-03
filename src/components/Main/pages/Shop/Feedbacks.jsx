import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Rating from "@mui/material/Rating";
import { GrPrevious, GrNext } from "react-icons/gr";
import Aos from "aos";
import "aos/dist/aos.css";
import CoffeeAPI from "../../../Services/CoffeeAPI";

function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [value] = useState(5);
  const api = new CoffeeAPI();

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const data = await api.getAllFeedbacks(); 
      setFeedbacks(data);
    };

    fetchFeedbacks();


    Aos.init({ duration: 1000, once: true });
  }, []);

  if (feedbacks.length === 0) {
    return <div className="text-center py-10">Yüklənir...</div>;
  }

  return (
    <div className="bg-[#fff2e9] flex flex-col items-center py-16">

      <div className="flex flex-col items-center gap-4 mb-12" data-aos="fade-up">
        <h1 className="font-Montserrat font-[800] px-[10px] text-[1.5em] md:text-[2.3em] text-center">
          What people say about us
        </h1>
        <hr className="w-[40px] border-t-[2px] border-[#f57f29]" />
      </div>


      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          900: { slidesPerView: 2 },
          1290: { slidesPerView: 3 },
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation]}
        className="w-full max-w-[1400px]"
      >
        <div className="flex justify-center gap-6 flex-wrap">
          {feedbacks.map((fb, index) => (
            <SwiperSlide key={index} className="!flex justify-center">
              <div
                className="bg-white w-[90%] max-w-[400px] p-6 shadow-md flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <Rating
                      className="mt-[10px]"
                      name="read-only"
                      value={value}
                      readOnly
                    />
                    <p className="mt-2 font-Montserrat font-bold text-[1em] md:text-[1.4em] text-[#4f4f4f]">
                      {fb.name}
                    </p>
                  </div>
                  <img
                    src={fb.img}
                    alt={fb.name}
                    className="w-[60px] h-[60px] rounded-full object-cover"
                  />
                </div>
                <div className="mt-4 flex flex-col flex-grow">
                  <h2 className="font-bold text-[1em] md:text-[1.7em] font-Montserrat">
                    {fb.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-[#454545] font-Montserrat text-[.9em] md:text-[1em]">
                    {fb.text}
                  </p>
                  <hr className="my-[40px] text-[#8e8e8e8f]" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <div className="flex items-center gap-6 mt-6" data-aos="fade-up">
        <button
          className="custom-prev h-[50px] w-[50px] rounded-full flex items-center justify-center shadow-md transition disabled:opacity-40 disabled:cursor-not-allowed bg-white hover:bg-[#f0f0f0]"
          disabled
        >
          <GrPrevious size={25} className="text-[#f57f29]" />
        </button>

        <div className="h-[30px] w-[1px] bg-gray-300"></div>

        <button className="custom-next h-[50px] w-[50px] rounded-full flex items-center justify-center shadow-md transition disabled:opacity-40 disabled:cursor-not-allowed bg-white hover:bg-[#f0f0f0]">
          <GrNext size={25} className="text-[#f57f29]" />
        </button>
      </div>
    </div>
  );
}

export default Feedbacks;
