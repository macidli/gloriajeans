import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useBasket } from "../../../Basket/BasketContext";
import CoffeeAPI from "../../../Services/CoffeeAPI";

function DevidedParts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [visible, setVisible] = useState(true);
  const menuRef = useRef(null);

  const { addToBasket } = useBasket();
  const api = new CoffeeAPI();

  const menuItems = ["Flavored", "Single Origin", "Blended", "Decaffeinated"];

  const handleClick = (index) => {
    setVisible(false);
    setTimeout(() => {
      setActiveIndex(index);
      setVisible(true);

      const menu = menuRef.current;
      if (menu?.children[index]) {
        const activeItem = menu.children[index];
        setIndicatorStyle({
          width: `${activeItem.offsetWidth}px`,
          left: `${activeItem.offsetLeft}px`,
        });
      }
    }, 200);
  };

  useEffect(() => {
    const menu = menuRef.current;
    if (menu?.children[activeIndex]) {
      const activeItem = menu.children[activeIndex];
      setIndicatorStyle({
        width: `${activeItem.offsetWidth}px`,
        left: `${activeItem.offsetLeft}px`,
      });
    }
  }, [activeIndex]);

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    const fetchProducts = async () => {
      const data = await api.getAllProducts(); 
      setProductsData(data);
    };

    fetchProducts();
  }, []);

  if (productsData.length === 0) {
    return <div className="text-center py-10">Yüklənir...</div>;
  }

  const activeCategory = menuItems[activeIndex];
  const filteredProducts = productsData.filter((product) => {
    if (Array.isArray(product.category)) {
      return product.category.includes(activeCategory);
    }
    return product.category === activeCategory;
  });

  const handleAddToBasket = (product) => {
    const quantity = 1;
    const selected =
      product.sizes?.[0]?.label && product.sizes[0].types?.[0]
        ? `${product.sizes[0].label} / ${product.sizes[0].types[0]}`
        : "";
    const selectedOption = "onetime";
    const totalPrice = product.price * quantity;

    addToBasket({ ...product, selected, selectedOption, quantity, totalPrice });
  };

  return (
    <>
      <div className="pt-[100px] px-[20px] md:px-[60px]">
        <div className="relative">
          <ul
            ref={menuRef}
            className="relative flex overflow-x-auto justify-between uppercase font-bold font-Montserrat"
          >
            {menuItems.map((item, index) => (
              <li
                key={item}
                className={`cursor-pointer px-4 py-2 transition-colors duration-300 flex-shrink-0 ${
                  activeIndex === index ? "text-[#f57f29]" : "text-black"
                }`}
                onClick={() => handleClick(index)}
              >
                {item}
              </li>
            ))}

            <span
              className="absolute bottom-[-12px] h-[3px] bg-[#f57f29] transition-all duration-300"
              style={{
                ...indicatorStyle,
                opacity: visible ? 1 : 0,
              }}
            ></span>
          </ul>
        </div>

        <hr className="w-full border-t-[1px] border-[#848484d7] mt-[10px]" />
      </div>

      <section className="bg-white flex justify-center xl:bg-[url('https://www.gloriajeans.com/cdn/shop/t/42/assets/orange-cup-svg.svg?v=136309249489828729971692876171')] bg-[length:400px_auto] bg-no-repeat bg-end bg-right">
        <div className="max-w-[1300px] flex flex-col justify-center items-center pt-[10px] pb-[50px] w-full">
          <div className="pt-[30px] pb-[40px] w-full px-[20px] relative">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-10">
                Bu kateqoriyada məhsul yoxdur.
              </div>
            ) : (
              <Swiper
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                centeredSlides={true}
                breakpoints={{
                  0: { slidesPerView: 1.5, centeredSlides: false },
                  640: { slidesPerView: 2, centeredSlides: false },
                  768: { slidesPerView: 3, centeredSlides: false },
                }}
              >
                {filteredProducts.map((product) => (
                  <SwiperSlide key={product.slug}>
                    <div className="w-full max-w-[395px] flex flex-col items-center justify-center mx-auto group relative">
                      <Link
                        to={`/details/${product.slug}`}
                        className="w-full h-full"
                      >
                        <div className="w-full border-[3px] border-[#fff] shadow aspect-square flex items-center justify-center relative overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out lg:group-hover:scale-95"
                          />

                          <div
                            className="absolute bottom-[30px] left-1/2 -translate-x-1/2 opacity-0 translate-y-4 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto transition-all duration-500 ease-in-out w-[165px] h-[40px] text-[.9em] text-[#f57f29] bg-[#fff] uppercase font-bold flex justify-center items-center cursor-pointer hover:text-[#fff] hover:bg-[#f57f29]"
                            onClick={(e) => {
                              e.preventDefault();
                              handleAddToBasket(product);
                            }}
                          >
                            Add to cart
                          </div>
                        </div>
                      </Link>

                      <div className="flex flex-col lg:max-w-[385px] items-center justify-center bg-[#d3d2d295] h-[290px] lg:h-[190px] px-[15px]">
                        <h3 className="text-[1em] md:text-[1.1em] lg:text-[1.3em] font-Montserrat font-[800] py-[5px] text-center">
                          {product.title}
                        </h3>
                        <p className="text-[#4f4f4f] text-[.9em] pb-[45px] text-center">
                          {product.description.length > 50
                            ? product.description.slice(0, 49) + "..."
                            : product.description}
                        </p>
                        <p className="font-bold font-Montserrat text-[1.1em]">
                          $ {product.price.toFixed(2)}
                        </p>

                        <div
                          className="w-[165px] lg:hidden h-[40px] mt-[20px] text-[.9em] text-[#fff] bg-[#f57f29] uppercase font-bold flex justify-center items-center cursor-pointer hover:text-[#f57f29] hover:bg-[#fff] transition duration-400"
                          onClick={() => handleAddToBasket(product)}
                        >
                          Add to cart
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          <Link to="/all-products">
            <div className="w-[205px] h-[50px] text-[#f57f29] bg-[#fff] uppercase font-bold flex justify-center items-center border-[2px] border-[#f57f29] cursor-pointer hover:text-[#fff] hover:bg-[#f57f29] transition duration-400">
              Shop all
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default DevidedParts;
