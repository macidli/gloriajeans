import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from "react";
import "swiper/css";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeLayout() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    fetch("../../../../../../public/Data/DataSwiper.json")  // JSON faylın yolunu düzgün göstər
      .then((res) => res.json())
      .then((data) => setSliderData(data))
      .catch((err) => console.error("Slider data yüklənmədi:", err));
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    setActiveIndex(swiper.activeIndex);

    swiper.on("slideChange", () => {
      setActiveIndex(swiper.activeIndex);
    });
  }, [sliderData]);  // sliderData yüklənəndən sonra

  if (sliderData.length === 0) {
    return <div>Yüklənir...</div>;  // Yüklənmə göstəricisi
  }

  return (
    <div className="w-full relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={0}
        slidesPerView={1}
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="h-[700px] bg-cover bg-center flex items-center justify-start"
              style={{
                backgroundImage: `linear-gradient(${item.gradient}), url('${item.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="w-[500px] text-white pl-[20px] md:pl-[50px]"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div>
                  <h1
                    className={`${item.titleStyle} pb-[5px]`}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <hr className="w-[40px] border-t-2 border-[#f57f29] pb-[20px]" />
                </div>
                <div className="pr-[20px]">
                  {item.paragraphs.map((p, index) => (
                    <p
                      key={index}
                      className={`pb-[15px] font-Montserrat ${
                        index === item.paragraphs.length - 1 ? "italic" : ""
                      }`}
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}
                </div>
                <div className="w-[205px] h-[50px] text-[#fff] bg-[#f57f29] uppercase font-bold flex justify-center items-center cursor-pointer hover:text-[#f57f29] hover:bg-[#fff] transition duration-400">
                  {item.buttonText}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 right-0 flex overflow-hidden shadow-lg z-50">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={`w-[80px] h-[70px] flex items-center justify-center transition duration-300 ${
            activeIndex === 0 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <IoMdArrowBack size={24} className="text-[#f57f29]" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`w-[80px] h-[70px] flex items-center justify-center transition duration-300 ${
            activeIndex === sliderData.length - 1 ? "bg-orange-100" : "bg-white"
          }`}
        >
          <IoMdArrowForward size={24} className="text-[#f57f29]" />
        </button>
      </div>
    </div>
  );
}

export default HomeLayout;
