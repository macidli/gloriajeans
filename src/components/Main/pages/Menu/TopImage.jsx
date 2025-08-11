import CoffeeBeans from "../Home/CoffeeBeans";

function TopImage() {
  return (
    <div
      className=" bg-center bg-cover relative"
      style={{
        backgroundImage: `
                    linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent),
                    url('https://www.gloriajeans.com/cdn/shop/files/Menu_Page_1.png?v=1661899309')
                    `,
      }}
    >
      <div className="max-w-[1276px] mx-auto   min-h-[250px] h-[250px] md:h-[360px] relative">
        <div className="max-w-[500px] flex h-full justify-center flex-col text-white pl-[20px] md:pl-[50px] relative z-10">
          <div>
            <h1 className="text-[1.6em] md:text-[1.9em] lg:text-[2.1em] font-bold pb-[5px] font-Montserrat">
              Our Menu
            </h1>
            <hr className="w-[40px] border-t-2 border-[#f57f29] pb-[20px]" />
          </div>
          <div className="pr-[20px] pt-[10px]">
            <p className="pb-[15px] font-bold font-Montserrat">
              We take pride in <br /> handcrafting your favorite beverages since
              1979.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-[30px] left-[50px]">
        <CoffeeBeans
          src="https://www.gloriajeans.com/cdn/shop/t/42/assets/coffee_inner_banner_svg.svg?v=76813248326909496531692876104"
          className="w-[70px]"
          alt="coffeepiece"
          speed={170}
          range={15}
        />
      </div>
      <div className="hidden lg:block absolute bottom-[-40px] left-[700px]">
        <CoffeeBeans
          src="https://www.gloriajeans.com/cdn/shop/t/42/assets/coffee_btm_inner_banner_svg.svg?v=146389455693398026561692876103"
          className="w-[85px]"
          alt="coffeepiece"
          speed={170}
          range={15}
        />
      </div>
    </div>
  );
}
export default TopImage;
