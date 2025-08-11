import { HiBars3BottomRight } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoBasketOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Upper from "./Upper";
import SideLeftbar from "./SideLeftbar";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [openDesktopSearch, setOpenDesktopSearch] = useState(false);
  const [openMobileSearch, setOpenMobileSearch] = useState(false);

  const toggleSearch = (type) => {
    if (type === "desktop") {
      setOpenDesktopSearch(!openDesktopSearch);
      setOpenMobileSearch(false);
    } else {
      setOpenMobileSearch(!openMobileSearch);
      setOpenDesktopSearch(false);
    }
  };

  return (
    <>
      <Upper />
      <div className="bg-white sticky top-0 z-[99999]">
        <div className="max-w-[1376px] mx-auto px-[1em] flex h-[80px] justify-between items-center">
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
                <li>
                  <div className="w-[110px] h-[36px] border-2 text-[#f57f29] border-[#f57f29] flex justify-center items-center cursor-pointer hover:text-white hover:bg-[#f57f29] transition duration-400">
                    Shop
                  </div>
                </li>
              </menu>
            </div>
          </div>

          <Link to="/">
            <div className="flex justify-center items-center">
              <img
                className="w-[180px] ml-[70px] lg:w-[220px] cursor-pointer"
                src="/src/assets/img/logomain.avif"
                alt="logoo"
              />
            </div>
          </Link>

          <div className="flex items-center">
            <div className="hidden xl:flex pr-[30px] h-[40px] border-r-2 border-[#b3b3b36d]">
              <menu className="flex items-center gap-[30px] text-[.8em] font-[800] uppercase">
                <li>
                  <div className="flex items-center gap-[10px] hover:text-[#f57f29] transition duration-400 cursor-pointer">
                    <FaLocationDot size={20} className="text-[#f57f29]" />
                    Store Locator
                  </div>
                </li>
                <li className="hover:text-[#f57f29] transition duration-400 cursor-pointer">
                  Own a Franchise
                </li>
              </menu>
            </div>

            <div className="flex items-center gap-[10px] pl-[30px]">
              <div className="w-full relative">
                <div
                  onClick={() => toggleSearch("desktop")}
                  className="hidden md:block cursor-pointer hover:text-[#f57f29] transition duration-400"
                >
                  <IoIosSearch size={30} />
                </div>

                {openDesktopSearch && (
                  <div className="absolute top-[50px] right-[100px] translate-x-[50%] mt-2 w-[300px] h-[80px] bg-white shadow-md px-4 flex items-center transition-all duration-500 z-50">
                    <div className="flex items-center w-full h-[50px] border border-gray-300">
                      <input
                        type="text"
                        placeholder="Search for products..."
                        className="flex-grow h-full px-4 text-sm outline-none placeholder:text-[.85em] placeholder:text-[#1e1e1e] border-r border-gray-300"
                      />
                      <div className="h-full px-4 flex items-center justify-center text-[#1e1e1e] hover:text-[#f57f29] transition duration-300 cursor-pointer">
                        <IoIosSearch size={22} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <IoMdPerson
                  size={25}
                  className="cursor-pointer hover:text-[#f57f29] transition duration-400"
                />
              </div>

              <div>
                <IoBasketOutline
                  size={25}
                  className="cursor-pointer hover:text-[#f57f29] transition duration-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {openMobileSearch && (
        <div className="md:hidden w-full px-4 mt-2 mb-4">
          <div className="flex items-center w-full h-[50px] border border-gray-300 bg-white shadow-md px-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-grow h-full text-sm outline-none placeholder:text-[.85em] placeholder:text-[#1e1e1e] border-r border-gray-300 pr-2"
            />
            <div className="h-full px-4 flex items-center justify-center text-[#1e1e1e] hover:text-[#f57f29] transition duration-300 cursor-pointer">
              <IoIosSearch size={22} />
            </div>
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
