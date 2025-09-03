import { FaMinus, FaPlus } from "react-icons/fa6";
import { Button, Popover } from "flowbite-react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useBasket } from "../../../Basket/BasketContext";


function StaticDetail() {
  const [selected, setSelected] = useState("12oz / WHOLE BEANS");
  const [quantity, setQuantity] = useState(1);
  const { addToBasket } = useBasket();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const content = (
    <div className="flex flex-col divide-none">
      <Button
        onClick={() => setSelected("12oz / WHOLE BEANS")}
        className="w-[400px] bg-[#fff] text-[#444] py-[0px] hover:bg-[#f9f9f9] rounded-[0px] justify-start text-[.9em]"
      >
        12oz / WHOLE BEANS
      </Button>
      <Button
        onClick={() => setSelected("12oz / GROUND")}
        className="w-[400px] bg-[#fff] text-[#444] py-[0px] hover:bg-[#f9f9f9] rounded-[0px] justify-start text-[.9em]"
      >
        12oz / GROUND
      </Button>
    </div>
  );

  const handleAddToCart = () => {
    const item = {
      id: 1,
      title: "BUTTER TOFFEE COFFEE",
      price: 16.5,
      selected,
      quantity,
      totalPrice: 16.5 * quantity,
      image: "https://www.gloriajeans.com/cdn/shop/products/BT.jpg?v=1662498555",
    };
    addToBasket(item);
  };

  return (
    <div
      className="py-[45px] max-w-[1100px] mx-auto flex items-center justify-center w-full"
      data-aos="fade-up"
    >
      <div className="flex flex-col md:flex-row gap-[40px] w-full">
        <div className="flex justify-center md:justify-start w-full md:w-auto" data-aos="fade-right">
          <img
            className="w-full md:w-[525px] md:h-[405px] object-cover"
            src="https://www.gloriajeans.com/cdn/shop/products/BT.jpg?v=1662498555"
            alt="Butter Toffee Coffee"
          />
        </div>

        <div className="flex flex-col justify-between w-full max-w-[485px]" data-aos="fade-left">
          <h3 className="font-bold font-Montserrat uppercase">Coffee</h3>
          <h1 className="text-[1.3em] md:text-[1.9em] font-[800] font-Montserrat">
            BUTTER TOFFEE COFFEE
          </h1>
          <p className="text-[#4f4f4fd8] font-Montserrat text-[.9em] py-[20px]">
            Our Butter Toffee flavored coffee has a creamy, rich caramel taste,
            with a warm and buttery toffee accent. The mellow candied aroma,
            balanced body and acidity of this 100% Arabica coffee makes for a
            full and satisfying cup. 100% Arabica coffee beans.
          </p>

          <div className="flex flex-col md:flex-row gap-[20px] border-b border-[#bdbdbd] pb-[20px] border-dashed">
            <div>
              <p className="text-[.9em] font-Montserrat"><b>Aroma</b> - <span className="text-[#4f4f4f]">Caramel Toffee</span></p>
              <p className="text-[.9em] font-Montserrat py-[.5em]"><b>Body</b> - <span className="text-[#4f4f4f]">Minimum</span></p>
              <p className="text-[.9em] font-Montserrat"><b>Finish</b> - <span className="text-[#4f4f4f]">Smooth</span></p>
            </div>
            <div>
              <p className="text-[.9em] font-Montserrat"><b>Flavor</b> - <span className="text-[#4f4f4f]">Creamy Caramel</span></p>
              <p className="text-[.9em] font-Montserrat"><b>Acidity</b> - <span className="text-[#4f4f4f]">Medium</span></p>
            </div>
          </div>

          <p className="py-[20px] text-[#313131dc] font-Montserrat text-[.95em]">
            * Does not contain nuts or dairy products.
          </p>

          <p className="text-[1.3em] font-bold font-Montserrat">$16.50</p>

          <div className="flex gap-[20px] py-[20px] items-center">
            <p className="text-[#585858] font-Montserrat text-[.95em]">QTY</p>
            <div className="flex border-[2px] border-[#f2f2f297] bg-[#f9f9f9] px-[10px]">
              <div className="flex justify-center items-center w-[40px] h-[40px] cursor-pointer" onClick={decrement}><FaMinus /></div>
              <div className="flex justify-center items-center w-[40px] h-[40px]">{quantity}</div>
              <div className="flex justify-center items-center w-[40px] h-[40px] cursor-pointer" onClick={increment}><FaPlus /></div>
            </div>
          </div>

          <div className="relative z-[9999]" data-aos="fade-up">
            <Popover content={content} trigger="hover" placement="bottom-start">
              <Button className="group max-w-[485px] w-full bg-[#f9f9f9] text-[#444] py-[20px] md:py-[30px] hover:bg-[#f9f9f9] border-[1px] border-[#d4d4d46e] rounded-[0px] justify-between text-[.95em] font-Montserrat focus:outline-none focus:ring-0 focus:ring-offset-0">
                <span>{selected}</span>
                <IoMdArrowDropdown className="text-[#444] text-[1.3em] transition-all duration-300 group-hover:text-[#f57f29] group-hover:rotate-180" />
              </Button>
            </Popover>
          </div>

          <button
            onClick={handleAddToCart}
            className="max-w-[485px] w-full bg-[#f57f29] mt-[40px] py-[15px] text-white text-[.9em] font-Montserrat uppercase font-bold hover:text-[#f57f29] border-[2px] border-[#f57f29] hover:bg-white transition duration-750"
            data-aos="fade-up"
          >
            Add to cart | $16.50
          </button>
        </div>
      </div>
    </div>
  );
}

export default StaticDetail;
