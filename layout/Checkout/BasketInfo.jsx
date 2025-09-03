import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useBasket } from "../../src/components/Basket/BasketContext";


function BasketInfo() {
  const { basketItems } = useBasket();
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  const subtotal = basketItems.reduce(
    (acc, item) => acc + Number(item.totalPrice),
    0
  );

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [open, basketItems]);

  return (
    <div className="max-w-md w-full p-6 font-Montserrat ">
      <div className="hidden lg:block">
        {basketItems.map((item) => (
          <div
            key={item.slug + item.selected}
            className="flex items-center gap-3 mb-4"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 rounded"
              />
              <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {item.quantity}
              </span>
            </div>
            <div className="flex-1">
              <p className="font-[500] text-gray-900 text-[.8em]">
                {item.title.toUpperCase()}
              </p>
              {item.selected && (
                <p className="text-sm text-gray-500 text-[.7em]">
                  {item.selected}
                </p>
              )}
              {item.delivery && (
                <p className="text-sm text-gray-500 text-[.7em]">
                  Delivery: {item.delivery}
                </p>
              )}
            </div>
            <p className="text-gray-900 font-medium text-[.9em]">
              ${item.totalPrice.toFixed(2)}
            </p>
          </div>
        ))}

        {basketItems.length === 0 && (
          <p className="text-gray-500 text-sm">Basket is empty</p>
        )}

        <div className="flex gap-2 mb-4 mt-6">
          <input
            type="text"
            placeholder="Discount code"
            className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm outline-none"
          />
          <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded text-sm">
            Apply
          </button>
        </div>

        <div className="flex justify-between text-sm text-gray-700 mb-2">
          <span>Subtotal · {basketItems.length} items</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-700 mb-2">
          <span className="flex items-center gap-1">
            Shipping <span className="text-gray-400 cursor-pointer">?</span>
          </span>
          <span className="text-gray-500">Enter shipping address</span>
        </div>
        <div className="flex justify-between items-center border-b py-3 mt-3">
          <span className="font-semibold text-lg">Total</span>
          <span className="font-bold text-xl text-gray-900 text-[1.1em]">
            <span className="text-[#717070] text-[.6em] font-normal pr-[10px]">
              USD
            </span>
            ${subtotal.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="block lg:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center py-3 border-b border-[#b1b1b1] font-semibold"
        >
          <span className="text-[#ff6600]">Order Summary</span>
          <div className="flex items-center gap-2">
            <span>${subtotal.toFixed(2)}</span>
            <IoIosArrowDown
              className={`transition-transform duration-300 text-[#ff6600] ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </button>

        <div
          ref={contentRef}
          style={{ maxHeight: height }}
          className="overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="mt-4">
            {basketItems.map((item) => (
              <div
                key={item.slug + item.selected}
                className="flex items-center gap-3 mb-4"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 rounded"
                  />
                  <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-[500] text-gray-900 text-[.8em]">
                    {item.title.toUpperCase()}
                  </p>
                  {item.selected && (
                    <p className="text-sm text-gray-500 text-[.7em]">
                      {item.selected}
                    </p>
                  )}
                </div>
                <p className="text-gray-900 font-medium text-[.9em]">
                  ${item.totalPrice.toFixed(2)}
                </p>
              </div>
            ))}

            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <span>Subtotal · {basketItems.length} items</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <span className="flex items-center gap-1">
                Shipping <span className="text-gray-400 cursor-pointer">?</span>
              </span>
              <span className="text-gray-500">Enter shipping address</span>
            </div>
            <div className="flex justify-between items-center border-b py-3 mt-3">
              <span className="font-semibold text-lg">Total</span>
              <span className="font-bold text-xl text-gray-900 text-[1.1em]">
                <span className="text-[#717070] text-[.6em] font-normal pr-[10px]">
                  USD
                </span>
                ${subtotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketInfo;
