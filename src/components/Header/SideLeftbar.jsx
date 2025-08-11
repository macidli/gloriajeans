import { IoCloseOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SideLeftbar({ sideBarOpen, sideBarClose }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-white z-[999999] transition-transform duration-700 transform ${
        sideBarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className={`flex justitify-start pl-[10px] pb-[15px]`}>
        <IoCloseOutline
          onClick={sideBarClose}
          size={35}
          className=" text-[#103240]"
        />
      </div>
      <menu className="flex flex-col px-[15px]">
        <Link to="/menu">
           <li className="border-b-[1px] border-[#d9d9d9] py-[15px] font-[800]">
               <div>Menu</div>
          </li>
        </Link>
        <Link to="/about">
          <li className="border-b-[1px] border-[#d9d9d9] py-[15px] font-[800]">
             <div>Our Story</div>
         </li>
        </Link>
        <li className="border-b-[1px] border-[#d9d9d9] py-[15px] font-[800] text-[#f57f29]">
          <div>Shop</div>
        </li>
        <li className="  border-b-[1px] border-[#d9d9d9] py-[15px] font-[800]">
          <div className="flex gap-[5px]">
            <span>
              <FaLocationDot size={20} className="text-[#f57f29]" />
            </span>{" "}
            Store Locator
          </div>
        </li>
        <li className="border-b-[1px] border-[#d9d9d9] py-[15px] font-[800]">
          <div>Own a Franchise</div>
        </li>
      </menu>
    </div>
  );
}

export default SideLeftbar;
