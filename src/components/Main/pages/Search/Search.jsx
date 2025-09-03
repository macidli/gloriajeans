import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useBasket } from "../../../Basket/BasketContext";
import CoffeeBeans from "../Home/CoffeeBeans";
import CoffeeAPI from "../../../Services/CoffeeAPI";
import SearchSkeleton from "./SearchSkeleton";

export default function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query")?.toLowerCase() || "";

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const { addToBasket } = useBasket();
  const coffeeAPI = new CoffeeAPI();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    const fetchProducts = async () => {
      const data = await coffeeAPI.getAllProducts();
      setProducts(data);

      const term = searchTerm.trim().toLowerCase();
      const results = data.filter((p) =>
        p.title.toLowerCase().includes(term)
      );
      setFiltered(results);
    };

    fetchProducts();
  }, [searchTerm]);

  const handleAddToBasket = (product) => {
    const quantity = 1;
    const selected =
      product.sizes?.[0]?.label + " / " + product.sizes?.[0]?.types?.[0] || "";
    const selectedOption = "onetime";
    const totalPrice = product.price * quantity;

    addToBasket({ ...product, selected, selectedOption, quantity, totalPrice });
  };

  if (!products.length) return <SearchSkeleton itemsCount={8} />;

  return (
    <main>

      <div
        className="bg-center bg-cover h-[300px] relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://www.gloriajeans.com/cdn/shop/files/inner-banner-image.jpg?v=1652446771')",
        }}
      >
        <div className="max-w-[1200px] mx-auto flex h-full justify-center flex-col text-white pl-[20px] md:pl-[50px] relative z-10">
          <h1 className="text-[1.3em] md:text-[1.5em] lg:text-[2em] font-bold pb-[5px] font-Montserrat">
            Search Results
          </h1>
          <hr className="w-[40px] border-t-2 border-[#f57f29] pb-[20px]" />
        </div>

        <CoffeeBeans
          src="https://www.gloriajeans.com/cdn/shop/t/42/assets/coffee_inner_banner_svg.svg?v=76813248326909496531692876104"
          className="w-[50px] md:w-[70px] top-[30px] left-[100px] absolute hidden md:block"
          alt="coffeepiece"
          speed={170}
          range={15}
        />
        <CoffeeBeans
          src="https://www.gloriajeans.com/cdn/shop/t/42/assets/coffee_btm_inner_banner_svg.svg?v=146389455693398026561692876103"
          className="w-[50px] md:w-[70px] bottom-0 left-[200px] md:left-[700px] absolute hidden md:block"
          alt="coffeepiece"
          speed={170}
          range={15}
        />
      </div>


      <div className="bg-white px-[20px] md:px-[60px]">
        <div className="bg-white pt-[50px] md:pt-[100px]">
          <p className="font-[800] text-xl md:text-2xl lg:text-[2.2em] pb-[20px] md:pb-[40px] border-b border-[#e5e5e5] font-Montserrat">
            Search results for: "{searchTerm}"
          </p>
        </div>

        <div className="pb-[50px] md:pb-[100px]">
          {filtered.length === 0 ? (
            <p className="text-lg md:text-2xl lg:text-[2.4em] text-center pt-[20px] md:pt-[40px] font-Montserrat">
              No Products Found.
            </p>
          ) : (
            <div
              className="grid gap-6 px-[15px] md:px-[80px] py-[30px] md:py-[60px]
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center"
            >
              {filtered.map((product, index) => (
                <div
                  key={index}
                  className="w-full max-w-[300px] flex flex-col items-center justify-center group relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-full border-[3px] border-[#fff] shadow aspect-square flex items-center justify-center relative overflow-hidden">
                    <Link to={`/details/${product.slug}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out lg:group-hover:scale-95"
                      />
                    </Link>
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

                  <div className="flex flex-col items-center justify-center bg-[#d3d2d244] h-[200px] px-[15px] w-[95%]">
                    <h3 className="text-[1em] md:text-[1.1em] lg:text-[1.3em] font-Montserrat font-[800] py-[5px] text-center">
                      {product.title}
                    </h3>
                    <p className="text-[#4f4f4f] text-[.9em] pb-[20px] text-center line-clamp-2">
                      {product.description}
                    </p>
                    <p className="font-bold font-Montserrat text-[1.1em]">
                      $ {product.price}
                    </p>

                    <div
                      onClick={() => handleAddToBasket(product)}
                      className="w-[165px] lg:hidden h-[40px] mt-[20px] my-[20px] text-[.9em] text-[#fff] bg-[#f57f29] uppercase font-bold flex justify-center items-center cursor-pointer hover:text-[#f57f29] hover:bg-[#fff] transition duration-400"
                    >
                      Add to cart
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
