import React, { useEffect, useState } from "react";

function SideMenu() {
  const toId = (str) => str.toLowerCase().replace(/\s+/g, "-");
  const [activeId, setActiveId] = useState(toId("Cookie Chillers"));
  const [barStyle, setBarStyle] = useState({ top: 0, height: 0, opacity: 1 });
  const [menuData, setMenuData] = useState(null);

  // MenuData JSON-u fetch edirik
  useEffect(() => {
    fetch("../../../../../public/Data/MenuData.json")
      .then((res) => res.json())
      .then((data) => setMenuData(data))
      .catch((err) => {
        console.error("Menu data yüklənmədi:", err);
      });
  }, []);

  const updateBarPosition = (id) => {
    const el = document.getElementById(`menuitem-${id}`);
    if (el) {
      const topRelative = el.offsetTop;
      const height = el.offsetHeight;
      setBarStyle({ top: topRelative, height, opacity: 0 });
      setTimeout(() => {
        setBarStyle((prev) => ({ ...prev, opacity: 1 }));
      }, 1000);
    }
  };

  useEffect(() => {
    updateBarPosition(activeId);
  }, [activeId]);

  useEffect(() => {
    const handleScroll = () => {
      if (!menuData) return;

      let currentActiveId = activeId;

      for (const mainCat of menuData) {
        for (const subCat of mainCat.subCategories) {
          const id = toId(subCat.name);
          const elem = document.getElementById(id);
          if (elem) {
            const rect = elem.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              currentActiveId = id;
              break;
            }
          }
        }
      }
      if (currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeId, menuData]);

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
    <div className="sticky top-30 h-screen md:flex flex-col hidden w-[200px] xl:w-[250px] border-r border-[#e0e0e0] ">
      <div
        className="absolute right-0 w-[2px] bg-[#f57f29] rounded transition-all duration-500 ease-in-out"
        style={{
          top: barStyle.top,
          height: barStyle.height,
          opacity: barStyle.opacity,
          transition: "top 0.5s ease, height 0.5s ease, opacity 0.3s ease",
        }}
      />
      {menuData.map((mainCat, index) => (
        <div key={index} className="flex flex-col">
          <h3 className="font-Montserrat font-bold text-[1.1em] pt-[20px]">
            {mainCat.mainCategory}
          </h3>
          <menu
            className={`font-Montserrat text-[.85em] xl:text-[.95em] leading-[2em] py-[20px] ${
              index === 0 ? "border-b border-[#e0e0e0]" : ""
            }`}
          >
            {mainCat.subCategories.map((subCat, subIndex) => {
              const id = toId(subCat.name);
              const isActive = activeId === id;
              return (
                <li
                  key={subIndex}
                  id={`menuitem-${id}`}
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
  );
}

export default SideMenu;
