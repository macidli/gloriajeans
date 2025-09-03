import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import CoffeeBeans from "../Main/pages/Home/CoffeeBeans";

function Recover() {
  useTitle("Recover Password");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const emailFromQuery = queryParams.get("email") || "";

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setEmail(emailFromQuery);
  }, [emailFromQuery]);

  const handleRecover = (e) => {
    e.preventDefault();
    alert(`Recovery link sent to ${email}`);
  };

  return (
    <>
  
      <main>
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center items-center py-[60px] md:py-[100px] relative">
            <div className="max-w-[400px] w-full px-4">
              <div>
                <h1 className="pb-[15px] text-[1.5em] md:text-[2em] lg:text-[2.4em] font-bold font-Montserrat">
                  Recover
                </h1>
                <hr className="w-[40px] border-t-2 border-[#f57f29] pb-[25px]" />
              </div>

              <div className="pr-[20px]">
                <p className="pb-[20px] font-Montserrat text-[.85em] md:text-[1em]">
                  Enter your email:
                </p>
                <form
                  onSubmit={handleRecover}
                  className="flex flex-col gap-[10px]"
                >
                  <label htmlFor="email" className="block mb-1 font-Montserrat">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="max-w-[350px] h-[50px] border border-[#b3b3b3] px-[10px] focus:outline-none focus:border-[#f57f29]"
                    required
                  />
                  <button
                    type="submit"
                    className="max-w-[350px] h-[50px] mt-[20px] bg-[#f57f29] text-white hover:text-[#f57f29] border-[2px] border-[#f57f29] hover:bg-white font-bold uppercase transition duration-750"
                  >
                    Recover
                  </button>
                  <p
                    onClick={() => navigate("/login")}
                    className="font-Montserrat text-center underline underline-offset-3 max-w-[350px] cursor-pointer hover:text-[#f57f29] duration-750"
                  >
                    Back to Login
                  </p>
                </form>
              </div>

              <div className="hidden md:block absolute top-[40px] left-[80px]">
                <CoffeeBeans
                  src="https://www.gloriajeans.com/cdn/shop/t/42/assets/coffee_inner_banner_svg.svg?v=76813248326909496531692876104"
                  className="w-[60px]"
                  alt="coffeepiece"
                  speed={170}
                  range={15}
                />
              </div>
            </div>
          </div>

 
          <div
            className="hidden md:block w-1/2 bg-center bg-cover relative"
            style={{
              backgroundImage:
                "url('https://www.gloriajeans.com/cdn/shop/files/login-bg_1_1300x.png?v=1653050230')",
            }}
          >
            <div className="hidden md:block absolute bottom-[40px] left-[-40px]">
              <CoffeeBeans
                src="https://www.gloriajeans.com/cdn/shop/t/42/assets/coffee_btm_inner_banner_svg.svg?v=146389455693398026561692876103"
                className="w-[90px]"
                alt="coffeepiece"
                speed={170}
                range={15}
              />
            </div>
          </div>
        </div>
      </main>

    </>
  );
}

export default Recover;
