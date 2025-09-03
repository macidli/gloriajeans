import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";
import FooterAccordion from "./FooterAccordion";
import { FooterData } from "./FooterData";
import YellowBanner from "./YellowBanner";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#231f20] md:bg-[url('https://www.gloriajeans.com/cdn/shop/t/42/assets/footer-cup-svg.svg?v=179731266760412349071692876113')] md:bg-no-repeat md:bg-right-bottom">
  
      <section>
        <YellowBanner />
      </section>


      <div className="px-[15px]">
        <div className="max-w-[1050px] w-full mx-auto py-[60px] md:py-[80px] hidden md:flex justify-between">
          <div className="text-white">
            <div className="pb-[20px]">
             <Link to="/">
                 <img
                  className="w-[220px] lg:w-[300px]"
                  src="https://www.gloriajeans.com/cdn/shop/files/logo-footer_309x@2x.png?v=1652187271"
                  alt="logoo"
                />
             </Link>
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
                  {links.map(({ name, to, type }, linkIndex) => (
                    <li className="cursor-pointer" key={linkIndex}>
                      {type === "internal" ? (
                        <Link to={to}>{name}</Link> 
                      ) : (
                        <a
                          href={to}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

 
        <div className="border-t-[1px] border-[#7a7979] hidden md:flex">
          <div className="w-full flex h-[90px] max-w-[1050px] mx-auto">
            <div className="flex items-center justify-end text-[#fff] pr-[40px] gap-[25px] border-r-[1px] w-[300px] border-[#7a7979]">
              <a href="https://www.facebook.com/gloriajeanscoffeesusa" target="_blank">
                 <GrFacebookOption className="cursor-pointer" size={25} />
              </a>
              <a href="https://www.instagram.com/gloriajeanscoffeesusa/" target="_blank" > 
                <FaInstagram className="cursor-pointer" size={25} />
              </a>
            </div>

            <div className="flex justify-end w-full">
              <p className="flex justify-end text-[#d3d2d2] text-[.8em] items-center">
                © 2021 Gloria Jean's Gourmet Coffees Corp. | Designed by Your Digital Media
              </p>
            </div>
          </div>
        </div>


        <FooterAccordion footerData={FooterData} />
      </div>
    </footer>
  );
}

export default Footer;
