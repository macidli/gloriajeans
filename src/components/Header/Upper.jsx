import { useState, useEffect } from "react";
import { GoStarFill } from "react-icons/go";

function Upper() {
  const [countries, setCountries] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetch("../../../public/Data/CountriesData.json") // JSON faylın yolunu düzgün göstər
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error loading countries data:", err));
  }, []);

  const defaultCountry = countries[0];

  if (!defaultCountry) {
    return null; // Və ya loading göstərə bilərsən
  }

  return (
    <>
      <div className="hidden bg-black h-[46px] w-full md:flex justify-end items-center text-white relative z-[99999999999]">
        <div className="hidden lg:flex gap-[35px] pr-[20px] relative">
          <div className="flex gap-[10px] items-center justify-center cursor-pointer">
            <GoStarFill className="text-[#f57f29]" />
            <p className="text-[.75em] font-bold">LOYALTY PROGRAM</p>
          </div>

          <div
            className="flex gap-[10px] items-center justify-center cursor-pointer relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="rounded-full w-[18px] h-[18px] border-[1px] flex justify-center items-center overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={defaultCountry.flag}
                alt={`${defaultCountry.name} flag`}
              />
            </div>

            <span className="text-[.75em] font-bold uppercase">
              {defaultCountry.name}
            </span>

            {showDropdown && (
              <div className="absolute top-[10px] right-0 mt-2 bg-black font-Montserrat text-white p-4 w-[650px] max-h-[500px] grid grid-cols-3 rounded shadow-lg z-50 overflow-auto">
                {countries.map((country, index) => (
                  <a
                    key={index}
                    href={country.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:bg-white hover:text-black transition-all rounded p-2"
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-[20px] h-[20px]"
                    />
                    <span className="text-[.8em]">{country.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Upper;
