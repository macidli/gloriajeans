import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";
import FooterAccordion from "./FooterAccordion";
import { FooterData } from "./FooterData";

function Footer() {
  return (
    <footer className="bg-[#231f20] md:bg-[url('https://www.gloriajeans.com/cdn/shop/t/42/assets/footer-cup-svg.svg?v=179731266760412349071692876113')] md:bg-no-repeat md:bg-right-bottom">
      {/* Newsletter Section */}
      <section>
        <div className="bg-[#f57f29] w-full py-[60px] md:py-0 md:h-[160px] flex items-center">
          <div className="max-w-[1050px] w-full mx-auto px-6 sm:px-10 flex flex-col md:flex-row gap-8 xl:gap-[50px] items-center justify-between">
            <h1 className="text-white font-Montserrat font-bold text-[1em] sm:text-[1.2em] md:text-[1.1em] lg:text-[1.2em] xl:text-[1.6em] text-center md:text-left leading-snug">
              NEVER MISS A GOOD DEAL! <br />
              SIGN UP FOR OUR NEWSLETTER!
            </h1>

            <div className="flex items-center w-full sm:w-auto">
              <input
                type="email"
                className="bg-white w-full sm:w-[352px] h-[55px] outline-0 placeholder-black pl-[20px] pr-[10px] text-[.9em]"
                placeholder="Email Address"
              />
              <div className="bg-white h-[55px] w-[120px] flex justify-center items-center font-bold cursor-pointer border-l border-[#d9d9d9] pl-[20px]">
                <p>JOIN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Footer */}
      <div className="px-[15px]">
        <div className="max-w-[1050px] w-full mx-auto py-[60px] md:py-[80px] hidden md:flex justify-between">
          <div className="text-white">
            <div className="pb-[20px]">
              <img
                className="w-[220px] lg:w-[300px]"
                src="https://www.gloriajeans.com/cdn/shop/files/logo-footer_309x@2x.png?v=1652187271"
                alt="logoo"
              />
            </div>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 100 }}>
              Est. 1979,Chicago, Illinois
            </p>

            <div className="pt-[80px] pb-[20px]">
              <p className="font-bold uppercase tracking-[3px]">
                Payment Options
              </p>
            </div>

            <ul role="list" className="flex">
              {FooterData.paymentMethods.map(({ id, title, svg }) => (
                <li key={id} title={title} aria-label={title}>
                  {svg}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-[80px] pl-[20px]">
            {FooterData.links.map(({ title, links }, index) => (
              <div key={index} className="text-white">
                <h3 className="font-bold text-[1.2em] pb-[20px]">{title}</h3>
                <ul
                  className="leading-[2em]"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 100,
                  }}
                >
                  {links.map(({ name, to }, linkIndex) => (
                    <li className="cursor-pointer" key={linkIndex}>
                      <a href={to}>{name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Bottom Bar */}
        <div className="border-t-[1px] border-[#7a7979] hidden md:flex">
          <div className="w-full flex h-[90px] max-w-[1050px] mx-auto">
            <div className="flex items-center justify-end text-[#fff] pr-[40px] gap-[25px] border-r-[1px] w-[300px] border-[#7a7979]">
              <GrFacebookOption className="cursor-pointer" size={25} />
              <FaInstagram className="cursor-pointer" size={25} />
            </div>

            <div className="flex justify-end w-full">
              <p className="flex justify-end text-[#d3d2d2] text-[.8em] items-center">
                © 2021 Gloria Jean's Gourmet Coffees Corp. | Designed by Your Digital Media
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Footer */}
        <FooterAccordion footerData={FooterData} />
      </div>
    </footer>
  );
}

export default Footer;
