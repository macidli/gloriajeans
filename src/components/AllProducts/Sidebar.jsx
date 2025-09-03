import { useEffect, useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { HiXMark } from "react-icons/hi2";

function Sidebar({ isOpen, toggleSidebar, onFilter }) {
  const categories = ["Blended", "Decaffeinated", "Flavored", "Single Origin"];
  const [activeFilters, setActiveFilters] = useState(["Decaffeinated"]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  const applyFilter = (category) => {
    let updatedFilters = [];
    if (activeFilters.includes(category)) {
      updatedFilters = activeFilters.filter((f) => f !== category);
    } else {
      updatedFilters = [...activeFilters, category];
    }
    setActiveFilters(updatedFilters);
    onFilter(updatedFilters);
    toggleSidebar();          
  };

  const handleClearAll = () => {
    setActiveFilters([]);
    onFilter([]);
  };

  return (
    <div className={`
      fixed top-0 right-0 h-full bg-white shadow-lg z-[99999] 
      transform ${isOpen ? "translate-x-0" : "translate-x-full"}
      transition-transform duration-300 ease-in-out font-Montserrat
      w-full sm:w-full md:w-[700px] px-5 md:px-10
    `}>
    
      <div className="flex justify-between items-center border-b border-[#c7c7c7] py-5">
        <h2 className="text-[1.2em] md:text-[1.6em] font-bold">Shop by</h2>
        <button
          onClick={toggleSidebar}
          className="text-[#f57f29] font-bold text-xl cursor-pointer p-[5px] border-[1px] rounded-full"
        >
          <HiXMark />
        </button>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
   
        <div>
          <h3 className="uppercase font-bold text-[#333] mb-6">COFFEE TYPE</h3>
          <ul className="space-y-4">
            {categories.map((item, i) => (
              <li
                key={i}
                onClick={() => applyFilter(item)}
                className={`flex items-center cursor-pointer transition-all duration-500 border-b border-[#b6b6b6] border-dashed w-[200px] pb-[10px] text-[.85em] ${
                  activeFilters.includes(item) ? "text-[#f57f29]" : ""
                } hover:text-[#f57f29]`}
              >
                <GiCoffeeBeans className="mr-3 text-[#f57f29]" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>

      
        <div>
          <h3 className="uppercase font-bold text-[#333] mb-6">TYPE</h3>
          <ul className="space-y-4">
            <li
              onClick={() => applyFilter("Decaffeinated")}
              className={`flex items-center cursor-pointer transition-all duration-500 border-b border-[#b6b6b6] border-dashed w-[200px] pb-[10px] text-[1em] ${
                activeFilters.includes("Decaffeinated") ? "text-[#f57f29]" : ""
              } hover:text-[#f57f29]`}
            >
              <GiCoffeeBeans className="mr-3 text-[#f57f29]" size={20} />
              Decaffeinated
            </li>
          </ul>
        </div>
      </div>

 
      <div className="flex flex-col justify-start items-start esmall:flex-row esmall:items-center gap-4 py-6 absolute bottom-5 px-5 md:px-10">
        <button
          onClick={handleClearAll}
          className="text-gray-600 text-[.85em] esmall:text-[1em] hover:text-[#f57f29] order-1 esmall:order-2"
        >
          Clear all
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
