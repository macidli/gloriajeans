import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SideMenu from "./SideMenu";
import BottomMenu from "./BottomMenu";

function MainMenu() {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    fetch("..//../../../../public/Data/MenuData.json")
      .then((res) => res.json())
      .then((data) => {
        setMenuData(data);
      })
      .catch((err) => {
        console.error("Menu data yüklənmədi:", err);
      });
  }, []);

  const toId = (str) => str.toLowerCase().replace(/\s+/g, "-");

  if (!menuData) {
    return <div>Yüklənir...</div>;
  }

  return (
    <>
      <div className="min-h-screen px-[20px] md:px-[60px] pt-[30px] md:pt-[80px] pb-[30px] flex">
        <SideMenu />
        <div className="flex-1">
          <div className="flex flex-col pl-0 md:pl-[30px] w-full">
            {menuData.map((mainCategory) => (
              <div key={mainCategory.mainCategory}>
                {mainCategory.subCategories.map((subCat) => {
                  const id = toId(subCat.name);
                  return (
                    <section
                      key={subCat.name}
                      id={id}
                      className="mb-12 pt-[80px] scroll-mt-[80px]"
                      data-aos="fade-up"
                    >
                      <div className="pt-[10px] md:pt-[30px]">
                        <img
                          src={subCat.bannerImage}
                          alt={subCat.name}
                          className="w-full object-cover max-h-[300px]"
                          data-aos="zoom-in"
                          data-aos-delay="100"
                        />
                      </div>

                      <div className="grid grid-cols-12 gap-6 pt-[20px] md:pt-[40px]">
                        {subCat.products.map((product, i) => (
                          <div
                            key={i}
                            className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 cursor-pointer"
                            data-aos="fade-up"
                            data-aos-delay={`${i * 100}`}
                          >
                            <div className="flex flex-col">
                              <div className="border-[2px] border-[#ededed67] p-[20px] flex justify-center items-center">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="max-w-full max-h-[180px]"
                                />
                              </div>
                              <div className="bg-[#f8f8f8] min-h-[245px] px-[10px] py-[15px]">
                                <h3 className="font-bold font-Montserrat text-[1.1em] text-center">
                                  {product.name}
                                </h3>
                                <p className="text-[#4f4f4f] text-[.85em] text-center py-[10px] font-Montserrat min-h-[100px]">
                                  {product.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomMenu />
    </>
  );
}

export default MainMenu;
