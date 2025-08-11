import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

function FooterAccordion({ footerData }) {
  const [open, setOpen] = useState(null);
  const paymentIndex = footerData.links.length;

  return (
    <div className="block md:hidden bg-[#231f20] bg-[url('https://www.gloriajeans.com/cdn/shop/t/42/assets/footer-cup-svg.svg?v=179731266760412349071692876113')] w-full bg-no-repeat bg-right-bottom">
      <div className="px-[10px] py-[20px] text-white">
        {/* Logo */}
        <div className="flex flex-col items-center pb-[15px]">
          <img
            className="w-[300px]"
            src="https://www.gloriajeans.com/cdn/shop/files/logo-footer_309x@2x.png?v=1652187271"
            alt="logoo"
          />
          <p
            className="text-[.9em]"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 100,
            }}
          >
            Est. 1979,Chicago, Illinois
          </p>
        </div>

        {/* Payment Methods Accordion */}
        <div
          className="flex justify-between border-b-[1px] border-[#544e4d] py-[15px] cursor-pointer select-none"
          onClick={() => setOpen(open === paymentIndex ? null : paymentIndex)}
        >
          <p className="font-bold text-[1.1em] tracking-[3px]">Payment Methods</p>
          <div className="relative w-[20px] h-[20px]">
            <FaPlus
              className={`absolute top-0 left-0 transition-opacity duration-700 ${open === paymentIndex ? "opacity-0" : "opacity-100"}`}
            />
            <FaMinus
              className={`absolute top-0 left-0 transition-opacity duration-700 ${open === paymentIndex ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        </div>

        <ul
          className="pt-[10px] flex flex-wrap overflow-hidden"
          style={{
            maxHeight: open === paymentIndex ? "500px" : "0px",
            opacity: open === paymentIndex ? 1 : 0,
            transition: "max-height .7s ease, opacity 1.7s ease",
          }}
        >
          {footerData.paymentMethods.map(({ id, title, svg }) => (
            <li key={id} title={title} aria-label={title} className="w-[38px] h-[24px]">
              {svg}
            </li>
          ))}
        </ul>

        {/* Links Accordion */}
        {footerData.links.map(({ title, links }, i) => (
          <div key={i}>
            <div
              className="flex justify-between border-b-[1px] border-[#544e4d] py-[15px] cursor-pointer select-none"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <p className="font-bold text-[1.1em] tracking-[3px]">{title}</p>
              <div className="relative w-[20px] h-[20px]">
                <FaPlus
                  className={`absolute top-0 left-0 transition-opacity duration-700 ${open === i ? "opacity-0" : "opacity-100"}`}
                />
                <FaMinus
                  className={`absolute top-0 left-0 transition-opacity duration-700 ${open === i ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            </div>

            <ul
              className="pl-[10px] pt-[10px] text-sm text-[#d3d2d2] leading-[2em] overflow-hidden"
              style={{
                maxHeight: open === i ? "1000px" : "0px",
                opacity: open === i ? 1 : 0,
                transition: "max-height .7s ease, opacity 1.7s ease",
              }}
            >
              {links.map(({ name, to }, j) => (
                <li key={j}>
                  <a href={to}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Icons */}
        <div className="flex justify-center border-b-[1px] border-[#544e4d] gap-[25px] py-[20px]">
          <GrFacebookOption className="cursor-pointer" size={25} />
          <FaInstagram className="cursor-pointer" size={25} />
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-center pt-[15px] text-[#d3d2d2] text-[.8em] items-center">
          <p>
            © 2021 Gloria Jean's Gourmet Coffees Corp. | Designed by Your Digital Media
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterAccordion;
