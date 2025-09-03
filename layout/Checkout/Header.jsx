import { IoBasketOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useBasket } from "../../src/components/Basket/BasketContext";

function Header() {
  const navigate = useNavigate();
  const { setIsOpen } = useBasket(); 

  const handleBasketClick = () => {
    navigate(-1); 
  };

  return (
    <div className="border-b border-[#e0e0e0]">
      <div className="mx-auto py-[20px] px-[20px] max-w-[540px] thousand:max-w-[1100px]">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="w-[280px] h-[60px] cursor-pointer">
                <img
                src="https://cdn.shopify.com/s/files/1/0453/5120/7077/files/logo_bde1e1c0-43e0-4f8d-8eeb-f43beaa31607_x320.png?v=1652187663"
                alt="kfwlfe"
                />
            </div>
          </Link>

          <div>
            <IoBasketOutline
              size={26}
              className="text-[#f57f29] hover:text-[#ba5710] transition-all duration-500 cursor-pointer ml-[20px]"
              onClick={handleBasketClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
