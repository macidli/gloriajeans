import React, { useEffect, useState } from "react";
import CoffeeBeans from "../CoffeeBeans";
import OfferingCard from "./OfferingsCard";

function Offerings() {
  const [offeringsData, setOfferingsData] = useState(null);

  useEffect(() => {
    fetch('../../../../../../public/Data/OfferingsData.json') // JSON faylın serverdəki yeri
      .then(res => res.json())
      .then(data => setOfferingsData(data))
      .catch(err => console.error("Offerings data yüklənmədi:", err));
  }, []);

  if (!offeringsData) {
    return <div>Yüklənir...</div>;
  }

  return (
    <section className="w-full py-20 bg-white px-4 md:px-10 lg:px-20 relative">
      <div className="hidden md:block absolute top-[40px] left-[80px]">
        <CoffeeBeans
          src="https://www.gloriajeans.com/cdn/shop/t/42/assets/coffe-left.svg?v=26889544799482199421692876101"
          className="w-[90px]"
          alt="coffeepiece"
          speed={170}
          range={15}
        />
      </div>

      <div className="flex flex-col items-center capitalize gap-2 mb-10">
        <h1 className="text-[1.5em] md:text-[1.8em] lg:text-[2.1em] xl:text-[2.4em] font-Montserrat font-extrabold">
          Our Offerings
        </h1>
        <hr className="w-12 border-t-4 border-[#f57f29]" />
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6">
        {offeringsData.map(
          ({ title, description, imageUrl, buttonText }, index) => (
            <OfferingCard
              key={index}
              title={title}
              description={description}
              imageUrl={imageUrl}
              buttonText={buttonText}
            />
          )
        )}

        <div className="hidden lg:block w-full lg:w-[32%] aspect-[579/684]"></div>
      </div>
    </section>
  );
}

export default Offerings;
