import { useState, useEffect } from "react";
import { PiCirclesFourFill } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";

function BottomMenu() {
  const [menuData, setMenuData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const toId = (str) => str.toLowerCase().replace(/\s+/g, "-");
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    fetch("../../../../../public/Data/")
      .then((res) => res.json())
      .then((data) => {
        setMenuData(data);
        // İlk subCategory üçün default aktiv id təyin etmək:
        if (data.length && data[0].subCategories.length) {
          setActiveId(toId(data[0].subCategories[0].name));
        }
      })
      .catch((err) => {
        console.error("Menu data yüklənmədi:", err);
      });
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };

  if (!menuData) {
    return <div>Yüklənir...</div>;
  }

  return (
    <>
      <div className="bottom-0 sticky md:hidden z-[9999999]">
        <div
          className="bg-[#f57f29] h-[50px] w-full flex justify-center items-center shadow-2xl shadow-black cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="flex justify-center items-center gap-1">
            <p className="font-Montserrat font-bold text-[1.2em] text-white">
              Menu
            </p>
            <PiCirclesFourFill className="text-white" />
          </div>
        </div>
      </div>

      <div
        className={`
          fixed bottom-0 left-0 w-full bg-white border-t border-[#e0e0e0] shadow-lg md:hidden
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-y-0" : "translate-y-full"}
          h-[100vh] overflow-auto z-[999999999999999]
        `}
      >
        <div className="w-full flex justify-end pt-[30px] pr-[30px]">
          <LiaTimesSolid
            size={21}
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="flex flex-col pl-4 pr-4 pb-4">
          {menuData.map((mainCat, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-Montserrat font-bold text-[1.1em] pt-[10px]">
                {mainCat.mainCategory}
              </h3>
              <menu
                className={`font-Montserrat text-[.85em] leading-[2em] py-[10px] ${
                  index === 0 ? "border-b border-[#e0e0e0]" : ""
                }`}
              >
                {mainCat.subCategories.map((subCat, subIndex) => {
                  const id = toId(subCat.name);
                  const isActive = activeId === id;
                  return (
                    <li
                      key={subIndex}
                      className={`cursor-pointer transition-colors duration-700 ${
                        isActive ? "text-[#f57f29]" : "hover:text-[#f57f29]"
                      }`}
                      onClick={() => scrollToSection(id)}
                      style={{ padding: "4px 10px", fontWeight: "400" }}
                    >
                      {subCat.name}
                    </li>
                  );
                })}
              </menu>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BottomMenu;
