function Details2Skeleton({ itemsCount = 3 }) {
  return (
    <div className="py-[50px] w-full px-[30px] sm:px-[20px] relative">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {Array.from({ length: itemsCount }).map((_, index) => (
          <div
            key={index}
            className="w-full max-w-[395px] flex flex-col items-center justify-center mx-auto group relative"
          >
            <div className="w-full border-[3px] border-[#fff] shadow aspect-square flex items-center justify-center relative overflow-hidden bg-gray-300 animate-pulse" />

            <div className="flex flex-col lg:max-w-[385px] items-center justify-center bg-[#d3d2d295] h-[290px] lg:h-[190px] px-[15px] mt-3 w-full">
              <div className="w-[70%] h-[25px] bg-gray-300 rounded mb-3 animate-pulse" />
              <div className="w-[90%] h-[45px] bg-gray-300 rounded mb-3 animate-pulse" />
              <div className="w-[50%] h-[25px] bg-gray-300 rounded mb-3 animate-pulse" />
              <div className="w-[165px] h-[40px] bg-gray-300 rounded animate-pulse mt-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details2Skeleton;
