import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import { useBasket } from "./BasketContext";
import EmptyBasket from "./EmtyBasket";
import LinearProgress from "@mui/joy/LinearProgress";
import Stack from "@mui/joy/Stack";
import { Link } from "react-router-dom";

export default function Basket({ isOpen, onClose }) {
  const { basketItems, removeFromBasket, increaseQuantity, decreaseQuantity } =
    useBasket();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const subtotal = basketItems.reduce(
    (acc, item) => acc + Number(item.totalPrice),
    0
  );
  const freeShippingLimit = 70;
  const progress = Math.min((subtotal / freeShippingLimit) * 100, 100);


  const basketContent = (
    <div
      className={`fixed top-0 right-0 h-full w-[872px] max-w-full bg-white shadow-2xl transform transition-transform duration-300 z-[9999999999] flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >

      <div className="px-[20px] md:px-[60px] pt-[30px] flex justify-between items-center p-4 border-b border-[#c0c0c084]">
        <h2 className="text-[1.6em] font-[500] font-Montserrat">My Order</h2>
        <button onClick={onClose}>
          <IoClose size={30} className="hover:text-gray-500" />
        </button>
      </div>


      <div className="pt-[40px] pb-[20px] px-[20px] md:px-[60px]">
        <div className="flex items-center justify-center gap-2 mb-3">
          <TbTruckDelivery size={25} />
          {subtotal < freeShippingLimit ? (
            <span className="font-Montserrat">
              Spend{" "}
              <span className="text-[#f57f29]">
                ${(freeShippingLimit - subtotal).toFixed(2)}
              </span>{" "}
              more to get <b>free shipping!</b>
            </span>
          ) : (
            <span className="font-Montserrat">
              You’ve qualified for <b>free shipping!</b>
            </span>
          )}
        </div>

        <Stack spacing={1} sx={{ width: "100%" }}>
          <LinearProgress
            determinate
            value={progress}
            sx={{
              "--LinearProgress-radius": "0px",
              "--LinearProgress-thickness": "6px",
              bgcolor: "#e0e0e0",
              color: "#f57f29",
            }}
          />
        </Stack>
      </div>


      <div className="flex-1 overflow-y-auto px-[20px] md:px-[60px]">
        {basketItems.length === 0 ? (
          <EmptyBasket />
        ) : (
          basketItems.map((item) => (
            <div
              key={item.slug + item.selected}
              className="flex py-[30px] gap-[20px] flex-wrap md:flex-nowrap items-center md:items-start "
            >

              <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
                <img
                  className="min-w-[100px] w-[120px] md:w-[140px]"
                  src={item.image}
                  alt={item.title}
                />
              </div>

      
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="font-Montserrat font-[700] text-[1.1em] md:text-[1.4em]">
                    {item.title}
                  </h3>
                  <IoTrashOutline
                    size={22}
                    className="cursor-pointer hover:text-red-500 transition"
                    onClick={() =>
                      removeFromBasket(
                        item.slug,
                        item.selected,
                        item.selectedOption,
                        item.delivery
                      )
                    }
                  />
                </div>

                <p className="text-[.85em] py-[5px] font-bold font-Montserrat">
                  {item.title.toUpperCase()}:
                </p>
                <p className="text-[.85em] py-[2px] font-normal font-Montserrat">
                  {item.selected}
                </p>

                {item.delivery && (
                  <p className="text-[.85em] py-[5px] font-bold font-Montserrat">
                    Delivery:{" "}
                    <span className="font-normal">{item.delivery}</span>
                  </p>
                )}

                <div className="flex py-[5px] items-center justify-between">
                  <div className="flex">
                    <button
                      onClick={() =>
                        decreaseQuantity(
                          item.slug,
                          item.selected,
                          item.selectedOption,
                          item.delivery
                        )
                      }
                      className="flex justify-center items-center w-[40px] h-[40px]"
                    >
                      <FaMinus />
                    </button>
                    <div className="flex justify-center items-center w-[40px] h-[40px]">
                      {item.quantity}
                    </div>
                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.slug,
                          item.selected,
                          item.selectedOption,
                          item.delivery
                        )
                      }
                      className="flex justify-center items-center w-[40px] h-[40px]"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  <div className="font-Montserrat text-[1.3em]">
                    ${item.totalPrice.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>


      {basketItems.length > 0 && (
        <div className="sticky bottom-0 bg-white px-[20px] md:px-[60px] pb-[20px] pt-[10px] z-[4000]">
          <div className="flex justify-between py-[15px] border-b-[1px] border-[#b2b2b275]">
            <p className="font-Montserrat">Subtotal</p>
            <p className="font-Montserrat">${subtotal.toFixed(2)} USD</p>
          </div>
          <div className="flex justify-between py-[15px]">
            <p className="font-Montserrat text-[1.1em]">Estimated Total</p>
            <p className="font-Montserrat text-[1.1em]">
              ${subtotal.toFixed(2)} USD
            </p>
          </div>
          <Link to="/checkout">
             <div className="flex justify-center items-center border-2 text-[.9em] border-[#f57f29] text-[#f57f29] w-full h-[45px] hover:text-[#fff] hover:bg-[#f57f29] font-Montserrat font-bold transition-all duration-500 cursor-pointer">
               CHECKOUT
              </div>
          </Link>
        </div>
      )}
    </div>
  );

  return createPortal(basketContent, document.body);
}
