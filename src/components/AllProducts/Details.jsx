import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Button, Popover } from "flowbite-react";
import { IoMdArrowDropdown } from "react-icons/io";
import Aos from "aos";
import Details2 from "./Details2";
import useTitle from "../hooks/useTitle";
import { useBasket } from "../Basket/BasketContext";
import CoffeeAPI from "../Services/CoffeeAPI";
import DetailsSkeleton from "./Sceletons/DetailsSceleton";

function Details() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selected, setSelected] = useState("");
  const [selectedOption, setSelectedOption] = useState("onetime");
  const [delivery, setDelivery] = useState("Every 2 weeks");
  const [quantity, setQuantity] = useState(1);

  const { addToBasket } = useBasket();

  const api = new CoffeeAPI(); 

  useTitle(product ? `${product.title} | Coffee Shop` : "Gloria Jeans");

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    api.getProductBySlug(slug).then((found) => {
      setProduct(found);
      if (found && found.sizes?.length > 0) {
        setSelected(`${found.sizes[0].label} / ${found.sizes[0].types[0]}`);
      }
    });
  }, [slug]);

 if (!product) return <DetailsSkeleton />;

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const content = (
    <div className="flex flex-col divide-none ">
      {product.sizes?.map((size, idx) =>
        size.types.map((type, tIdx) => (
          <Button
              key={`${idx}-${tIdx}`}
              onClick={() => setSelected(`${size.label} / ${type}`)}
              className="w-[400px] 
               md:bg-[#f9f9f9] text-[#444] py-[0px] flowbite bg-[#f9f9f9] hover:bg-[#f9f9f9] rounded-[0px] justify-start text-[.9em]"
            >
              {size.label} / {type}
          </Button>
        ))
      )}
    </div>
  );

  const handleAddToCart = () => {
    const price =
      selectedOption === "onetime"
        ? product.purchase_options?.find(
            (opt) => opt.type === "Onetime Purchase"
          )?.price || product.price
        : product.purchase_options?.find(
            (opt) => opt.type === "Subscribe And Save"
          )?.discounted_price || product.price;

    const itemToAdd = {
      ...product,
      selected,
      selectedOption,
      quantity,
      totalPrice: price * quantity,
    };

    if (selectedOption === "subscribe") {
      itemToAdd.delivery = delivery;
    }

    addToBasket(itemToAdd);
  };

  const displayedPrice =
    selectedOption === "onetime"
      ? product.purchase_options?.find((opt) => opt.type === "Onetime Purchase")
          ?.price || product.price
      : product.purchase_options?.find(
          (opt) => opt.type === "Subscribe And Save"
        )?.discounted_price || product.price;

  return (
    <>
      <div
        className="py-[45px] px-[30px] md:max-w-[1100px] mx-auto flex items-center justify-center w-full"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row gap-[40px] w-full">
          <div
            className="flex justify-center md:justify-start w-full md:w-auto"
            data-aos="fade-right"
          >
            <img
              className="w-full md:w-[525px] md:h-[405px] object-cover"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div
            className="flex flex-col justify-between w-full max-w-[485px]"
            data-aos="fade-left"
          >
            <h3 className="font-bold uppercase font-Montserrat">
              {product.category}
            </h3>
            <h1 className="text-[1.9em] font-[800] font-Montserrat">
              {product.title}
            </h1>
            <p className="text-[#4f4f4fd8] text-[.9em] py-[20px] font-Montserrat">
              {product.description}
            </p>

            <div className="flex flex-col gap-3 max-w-[450px]">
              <h4 className="text-[1.1em] font-bold capitalize font-Montserrat">
                Purchase options
              </h4>
              {product.purchase_options?.map((option, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-md border font-Montserrat ${
                    (selectedOption === "onetime" &&
                      option.type === "Onetime Purchase") ||
                    (selectedOption === "subscribe" &&
                      option.type === "Subscribe And Save")
                      ? "border-[#f57f29] bg-[#fafafa93]"
                      : "border-gray-300 bg-[#f5f5f5]"
                  } cursor-pointer`}
                  onClick={() =>
                    setSelectedOption(
                      option.type === "Onetime Purchase"
                        ? "onetime"
                        : "subscribe"
                    )
                  }
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="purchase"
                        checked={
                          (selectedOption === "onetime" &&
                            option.type === "Onetime Purchase") ||
                          (selectedOption === "subscribe" &&
                            option.type === "Subscribe And Save")
                        }
                        onChange={() =>
                          setSelectedOption(
                            option.type === "Onetime Purchase"
                              ? "onetime"
                              : "subscribe"
                          )
                        }
                      />
                      <p>{option.type}</p>
                    </div>
                    {option.type === "Onetime Purchase" ? (
                      <p className="font-bold">${option.price}</p>
                    ) : (
                      <p className="font-bold">
                        <span className="line-through text-gray-400 font-normal">
                          ${option.original_price}
                        </span>{" "}
                        ${option.discounted_price}
                      </p>
                    )}
                  </div>
                  {selectedOption === "subscribe" &&
                    option.type === "Subscribe And Save" && (
                      <select
                        value={delivery}
                        onChange={(e) => setDelivery(e.target.value)}
                        className="mt-3 w-full border border-gray-300 rounded-md p-2"
                      >
                        <option value="Every 2 weeks">
                          Delivery every 2 weeks
                        </option>
                        <option value="Monthly">Delivery monthly</option>
                        <option value="Every 2 months">
                          Delivery every 2 months
                        </option>
                      </select>
                    )}
                </div>
              ))}
            </div>

            <div className="flex gap-[20px] py-[20px] items-center">
              <p className="text-[#585858] text-[.95em]">QTY</p>
              <div className="flex border-[2px] border-[#f2f2f297] bg-[#f9f9f9] px-[10px]">
                <div
                  className="flex justify-center items-center w-[40px] h-[40px] cursor-pointer"
                  onClick={decrement}
                >
                  <FaMinus />
                </div>
                <div className="flex justify-center items-center w-[40px] h-[40px] font-Montserrat text-[.9em]">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (!isNaN(val) && val >= 1) setQuantity(val);
                    }}
                    className="w-full h-full text-center bg-[#f9f9f9] outline-none"
                    min="1"
                  />
                </div>
                <div
                  className="flex justify-center items-center w-[40px] h-[40px] cursor-pointer"
                  onClick={increment}
                >
                  <FaPlus />
                </div>
              </div>
            </div>

            <div className="relative z-[9999]" data-aos="fade-up">
              <Popover
                content={product.sizes ? content : null}
                trigger="hover"
                placement="bottom-start"
              >
                <Button className="group max-w-[485px] w-full bg-[#f9f9f9] shsh text-[#444] py-[20px] md:py-[30px] hover:bg-[#f9f9f9] border-[1px] border-[#d4d4d46e] rounded-[0px] justify-between text-[.95em] font-Montserrat">
                  <span>{selected}</span>
                  <IoMdArrowDropdown className="text-[#444] text-[1.3em] transition-all duration-300 group-hover:text-[#f57f29] group-hover:rotate-180" />
                </Button>
              </Popover>
            </div>

            <button
              onClick={handleAddToCart}
              className="max-w-[485px] w-full bg-[#f57f29] mt-[40px] py-[15px] text-white text-[.9em] uppercase font-bold hover:text-[#f57f29] border-[2px] border-[#f57f29] hover:bg-white transition duration-750"
              data-aos="fade-up"
            >
              Add to cart | $ {displayedPrice}
            </button>
          </div>
        </div>
      </div>
      <Details2 />
    </>
  );
}

export default Details;
