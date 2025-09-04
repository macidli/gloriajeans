import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaCaretRight } from "react-icons/fa";
import CoffeeBeans from "../Main/pages/Home/CoffeeBeans";
import useTitle from "../hooks/useTitle";
import Sidebar from "./Sidebar";
import CoffeeAPI from "../Services/CoffeeAPI"; 
import { useBasket } from "../Basket/BasketContext"; 

function AllProducts() {
  useTitle("All Products");
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { addToBasket } = useBasket();
  const api = new CoffeeAPI();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    api.getAllProducts().then((data) => {
      setAllProducts(data);
      setProducts(data);
    });
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleFilter = (selectedCategories) => {
    if (selectedCategories.length === 0) {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
      setProducts(filtered);
    }
  };

  const handleAddToBasket = (product) => {
    const quantity = 1;
    const selected = product.sizes?.[0]?.label + " / " + product.sizes?.[0]?.types?.[0] || "";
    const selectedOption = "onetime"; 
    const totalPrice = product.price * quantity;

    addToBasket({ ...product, selected, selectedOption, quantity, totalPrice });
  };

  return (
    <>
      <div
        className="bg-center bg-cover relative"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent),
            url('https://www.gloriajeans.com/cdn/shop/files/Signature_Flavors_Shop_All_1.png?v=1661905437')
          `,
        }}
      >
        <div className="max-w-[1276px] mx-auto min-h-[250px] h-[250px] md:h-[280px] relative">
          <div
            className="max-w-[600px] flex h-full justify-center flex-col text-white pl-[20px] md:pl-[50px] relative z-10"
            data-aos="fade-down"
          >
            <h1 className="text-[1.6em] md:text-[1.7em] lg:text-[2.1em] font-bold pb-[5px] font-Montserrat">
              Shop our Signature Collection
            </h1>
            <hr className="w-[40px] border-t-2 border-[#f57f29] pb-[20px]" />
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-[-50px] right-[50px]">
          <CoffeeBeans
            src="https://www.gloriajeans.com/cdn/shop/t/42/assets/coffe-right-svg.svg?v=43759108114760129431692876101"
            className="w-[70px]"
            alt="coffeepiece"
            speed={170}
            range={15}
          />
        </div>
      </div>

      <div className="flex flex-col px-[30px] md:px-[50px]">
        <div className="flex justify-between py-[60px]">
          <h1 className="text-[1.3em] md:text-[2em] font-bold font-Montserrat">
            Shop All
          </h1>
          <div
            onClick={toggleSidebar}
            className="w-[100px] h-[30px] md:w-[145px] md:h-[50px] text-[.8em] md:text-[.9em] text-[#fff] bg-[#f57f29] uppercase font-bold flex justify-center items-center border-[2px] border-[#f57f29] cursor-pointer hover:text-[#f57f29] hover:bg-[#fff] transition duration-400"
          >
            Shop by <FaCaretRight size={21} className="ml-2" />
          </div>
        </div>
        <hr className="text-[#a3a3a3bd]" />
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onFilter={handleFilter}
      />


      <div className="grid gap-6 px-[15px] md:px-[80px] py-[30px] md:py-[60px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {products.map((product, index) => (
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
              <button
                onClick={() => handleAddToBasket(product)}
                className="absolute bottom-[30px] left-1/2 -translate-x-1/2 opacity-0 translate-y-4 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto transition-all duration-500 ease-in-out w-[165px] h-[40px] text-[.9em] text-[#f57f29] bg-[#fff] uppercase font-bold flex justify-center items-center cursor-pointer hover:text-[#fff] hover:bg-[#f57f29]"
              >
                Add to cart
              </button>
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

              <button
                onClick={() => handleAddToBasket(product)}
                className="w-[165px] lg:hidden h-[40px] mt-[20px] my-[20px] text-[.9em] text-[#fff] bg-[#f57f29] uppercase font-bold flex justify-center items-center cursor-pointer hover:text-[#f57f29] hover:bg-[#fff] transition duration-400"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllProducts;
