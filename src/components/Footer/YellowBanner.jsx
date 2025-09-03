function YellowBanner() {
  return (
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
  )
}

export default YellowBanner