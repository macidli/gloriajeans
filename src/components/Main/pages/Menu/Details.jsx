import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

export default function Details({ product, onClose }) {
  if (!product) return null;

  const guide = product.nutritional_guide;
  const [selectedSize, setSelectedSize] = useState("Small");
  const [adjustedGuide, setAdjustedGuide] = useState(guide);

  // Multiplier
  const sizeMultiplier = {
    Small: 1,
    Regular: 1.5,
    Large: 2,
  };

  useEffect(() => {
    if (!guide) return;

    const newGuide = Object.fromEntries(
      Object.entries(guide).map(([key, value]) => {
        if (key === "note") return [key, value]; // note dəyişmir
        if (typeof value === "number") return [key, Math.round(value * sizeMultiplier[selectedSize])];
        if (typeof value === "string" && value.endsWith("g")) {
          const num = parseInt(value);
          return [key, Math.round(num * sizeMultiplier[selectedSize]) + "g"];
        }
        return [key, value];
      })
    );

    setAdjustedGuide(newGuide);
  }, [selectedSize, guide]);

  return (
    <div className="fixed inset-0 z-[999999999999999999] flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white w-full max-w-[1200px] pb-[30px] pt-[20px] shadow-lg overflow-y-auto max-h-[90vh] px-[30px]">
        {/* Başlıq */}
        <div className="flex justify-between items-center pl-0 p-4 border-b font-Montserrat border-[#aaa]">
          <h1 className="text-2xl font-bold">{product.name || "Madagascar Vanilla Caramel"}</h1>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Kontent */}
        <div className="flex flex-col md:flex-row gap-8 p-6">
          {/* Sol tərəf */}
          <div className="w-full lg:w-1/3">
            <p className="mb-2 font-mediu font-Montserrat">Select Size</p>
            <select
              className="border p-2 w-full text-[#787878]"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {product.sizes?.map((size, idx) => (
                <option key={idx}>{size}</option>
              ))}
            </select>

            <div className="flex h-[70%] items-center justify-center">
              <img
                src={
                  product.image ||
                  "https://www.gloriajeans.com/cdn/shop/articles/Product_Menu_Image_226x226_Madagascar_Vanilla_Caramel.png?v=1657614826"
                }
                alt={product.name || "Drink"}
                className="mt-[20px]"
                style={{ width: "226px", height: "226px", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Sağ tərəf */}
          <div className="w-full lg:w-2/3 font-Montserrat">
            <h3 className="text-[1em] md:text-[1.5em] text-[#787878] font-bold mb-4 pb-[10px]">
              Nutritional Guide
            </h3>
            <table className="w-full border-b border-[#aaa]">
              <tbody>
                {adjustedGuide &&
                  Object.entries(adjustedGuide)
                    .filter(([key]) => key !== "note")
                    .map(([key, value]) => {
                      const isIndented = [
                        "saturated_fat",
                        "trans_fat",
                        "fiber",
                        "sugar",
                        "protein",
                      ].includes(key);

                      return (
                        <tr
                          key={key}
                          className="flex justify-between border-t border-[#aaa] py-3 text-[0.8em] md:text-[1.1em]"
                        >
                          <td
                            className={`capitalize ${
                              isIndented ? "pl-2 text-gray-500" : "text-black font-bold"
                            }`}
                          >
                            {key.replace(/_/g, " ")}
                          </td>
                          <td className="text-gray-500">{value}</td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>

            <p className="w-full text-right text-gray-500 mt-4 text-[0.45em] sm:text-[0.7em] md:text-[1em]">
              {adjustedGuide?.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
