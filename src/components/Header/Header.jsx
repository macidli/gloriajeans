import { HiBars3BottomRight } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoBasketOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import Upper from "./Upper";
import SideLeftbar from "./SideLeftbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Basket from "../Basket/Basket";
import { useBasket } from "../Basket/BasketContext";

function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [openDesktopSearch, setOpenDesktopSearch] = useState(false);
  const [openMobileSearch, setOpenMobileSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { basketItems } = useBasket();
  const navigate = useNavigate();

  const toggleSearch = (type) => {
    if (type === "desktop") {
      setOpenDesktopSearch(!openDesktopSearch);
      setOpenMobileSearch(false);
    } else {
      setOpenMobileSearch(!openMobileSearch);
      setOpenDesktopSearch(false);
    }
  };

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchValue)}`);
      setSearchValue("");
      setOpenDesktopSearch(false);
      setOpenMobileSearch(false);
    }
  };

  return (
    <>
      <Upper />
      <div className="bg-white sticky top-0 z-[200]">
        <div className="max-w-[1376px] mx-auto px-[1em] flex h-[80px] justify-between items-center relative">
          <div className="flex items-center gap-4 xl:gap-10">
            <div className="xl:hidden flex items-center gap-[10px]">
              <HiBars3BottomRight
                size={25}
                onClick={() => setSideBarOpen(true)}
                className="cursor-pointer"
              />
              <div className="md:hidden">
                <IoIosSearch
                  size={25}
                  className="cursor-pointer hover:text-[#f57f29] transition duration-400"
                  onClick={() => toggleSearch("mobile")}
                />
              </div>
            </div>

            <div className="hidden xl:flex">
              <menu className="flex gap-[50px] items-center text-[.8em] font-[800] uppercase">
                <Link to="/menu">
                  <li className="cursor-pointer hover:text-[#f57f29] transition duration-400">
                    Menu
                  </li>
                </Link>
                <Link to="/about">
                  <li className="cursor-pointer hover:text-[#f57f29] transition duration-400">
                    Our story
                  </li>
                </Link>
                <Link to="/shop">
                  <li>
                    <div className="w-[110px] h-[36px] border-2 text-[#f57f29] border-[#f57f29] flex justify-center items-center cursor-pointer hover:text-white hover:bg-[#f57f29] transition duration-400">
                      Shop
                    </div>
                  </li>
                </Link>
              </menu>
            </div>
          </div>

          <Link to="/">
            <div className="flex justify-center items-center">
              <img
                className="w-[180px] ml-[70px] lg:w-[220px] cursor-pointer"
                src="https://www.gloriajeans.com/cdn/shop/files/logo_bde1e1c0-43e0-4f8d-8eeb-f43beaa31607_336x@2x.png?v=1652187663"
                alt="logoo"
              />
            </div>
          </Link>

          <div className="flex items-center">
            <div className="hidden xl:flex pr-[30px] h-[40px] border-r-2 border-[#b3b3b36d]">
              <menu className="flex items-center gap-[30px] text-[.8em] font-[800] uppercase">
                <li>
                  <a href="https://www.gloriajeans.com/pages/store-locators">
                    <div className="flex items-center gap-[10px] hover:text-[#f57f29] transition duration-400 cursor-pointer">
                      <FaLocationDot size={20} className="text-[#f57f29]" />
                      Store Locator
                    </div>
                  </a>
                </li>
                <li className="hover:text-[#f57f29] transition duration-400 cursor-pointer">
                  <a
                    href="https://franchising.gloriajeans.com/"
                    target="_blank"
                  >
                    Own a Franchise
                  </a>
                </li>
              </menu>
            </div>

            <div className="flex items-center gap-[15px] pl-[30px] relative">
              <IoIosSearch
                size={30}
                className="hidden md:block cursor-pointer hover:text-[#f57f29] transition duration-400"
                onClick={() => toggleSearch("desktop")}
              />

              {openDesktopSearch && (
                <div className="hidden md:flex absolute top-[60px] right-[0px] z-[250]">
                  <div className="flex items-center w-[250px] h-[40px] border border-gray-300 bg-white shadow-md px-3 ">
                    <input
                      type="text"
                      placeholder="Search for products..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      className="flex-grow text-sm outline-none placeholder:text-[#555] font-Montserrat"
                    />
                    {searchValue && (
                      <HiMiniXMark
                        size={20}
                        className="cursor-pointer text-gray-500 hover:text-red-500 mr-2"
                        onClick={() => setSearchValue("")}
                      />
                    )}
                    <IoIosSearch
                      size={20}
                      className="cursor-pointer hover:text-[#f57f29]"
                      onClick={handleSearch}
                    />
                  </div>
                </div>
              )}

              <Link to="/login">
                <IoMdPerson
                  size={25}
                  className="cursor-pointer hover:text-[#f57f29] transition duration-400 ml-[10px]"
                />
              </Link>

              <div className="relative">
                <IoBasketOutline
                  size={25}
                  className="cursor-pointer hover:text-[#f57f29] transition duration-400"
                  onClick={() => setIsOpen(true)}
                />
                {basketItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#f57f29] flex justify-center items-center w-[12px] h-[12px] text-white text-[.7em] px-1 rounded-full">
                    {basketItems.length}
                  </span>
                )}
                <Basket isOpen={isOpen} onClose={() => setIsOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {openMobileSearch && (
        <div className="fixed top-18 left-0 w-full px-4 py-2 bg-white shadow-md z-[9999]">
          <div className="flex items-center w-full h-[40px] border border-gray-300 bg-white px-4">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-grow h-full text-sm outline-none placeholder:text-[.85em] placeholder:text-[#1e1e1e] pr-2 font-Montserrat"
            />
            {searchValue && (
              <HiMiniXMark
                size={22}
                className="cursor-pointer text-[#1900a5] hover:text-red-500 mr-2"
                onClick={() => setSearchValue("")}
              />
            )}
            <IoIosSearch
              size={22}
              className="cursor-pointer hover:text-[#f57f29]"
              onClick={handleSearch}
            />
          </div>
        </div>
      )}

      <SideLeftbar
        sideBarOpen={sideBarOpen}
        sideBarClose={() => setSideBarOpen(false)}
      />
    </>
  );
}

export default Header;
