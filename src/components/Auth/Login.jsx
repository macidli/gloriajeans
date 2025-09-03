import { Link } from "react-router-dom";
import { useState } from "react";

import useTitle from "../hooks/useTitle";

function Login() {
  useTitle("Account");
  const [email, setEmail] = useState("");

  return (
    <>

      <main>
        <div className="w-full flex flex-col md:flex-row">
        
          <div className="w-full md:w-1/2 flex justify-center items-center py-[60px] md:py-[100px]">
            <div className="max-w-[400px] w-full px-4">
              <div>
                <h1 className="pb-[15px] text-[1.5em] md:text-[2em] lg:text-[2.4em] font-bold font-Montserrat">
                  Login to your <br /> Account
                </h1>
                <hr className="w-[40px] border-t-2 border-[#f57f29] pb-[25px]" />
              </div>

              <div className="pr-[20px]">
                <p className="pb-[40px] font-Montserrat">
                  Welcome back! Let's get brewing!
                </p>
                <form className="flex flex-col gap-[10px]">
                  <label htmlFor="email" className="block mb-1 font-Montserrat">
                    Email Address <span className="text-red-700">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="max-w-[350px] h-[50px] border border-[#b3b3b3] px-[10px] focus:outline-none focus:border-[#f57f29]"
                  />
                  <label htmlFor="password" className="block mb-1 font-Montserrat">
                    Password <span className="text-red-700">*</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="max-w-[350px] h-[50px] border border-[#b3b3b3] px-[10px] focus:outline-none focus:border-[#f57f29]"
                  />
                  <Link
                    to={`/recover?email=${encodeURIComponent(email)}`}
                    className="font-Montserrat text-end max-w-[350px] hover:text-[#f57f29] duration-750"
                  >
                    Forgot your password?
                  </Link>
                  <button className="max-w-[350px] h-[50px] mt-[20px] bg-[#f57f29] text-white font-bold uppercase hover:bg-[#e66c00] transition duration-300">
                    Login
                  </button>
                  <p className="font-Montserrat text-center max-w-[350px]">
                    Don't have an account?
                    <Link to='/signin'>
                      <span className="underline underline-offset-3 pl-[0.5em] text-[#f57f29] hover:text-[#000] duration-750">
                        Sign up!
                      </span>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>

     
          <div
            className="hidden md:block w-1/2 bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://www.gloriajeans.com/cdn/shop/files/login-bg_1_1300x.png?v=1653050230')",
            }}
          ></div>
        </div>
      </main>
  
    </>
  );
}

export default Login;
