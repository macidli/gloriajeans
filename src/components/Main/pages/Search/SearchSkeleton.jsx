function SearchSkeleton({ itemsCount = 3 }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid gap-6 px-[15px] md:px-[80px] py-[30px] md:py-[60px] grid-flow-col auto-cols-max justify-center">
        {Array.from({ length: itemsCount }).map((_, index) => (
          <div
            key={index}
            className="w-full max-w-[300px] flex flex-col items-center justify-center"
          >
            <div className="w-full border-[3px] border-[#fff] shadow aspect-square flex items-center justify-center relative overflow-hidden bg-[#e0e0e0] animate-pulse" />

            <div className="flex flex-col items-center justify-center bg-[#d3d2d244] h-[200px] px-[15px] w-[95%] mt-3">
              <div className="w-[70%] h-[25px] bg-gray-300 rounded mb-3 animate-pulse" />
              <div className="w-[90%] h-[50px] bg-gray-300 rounded mb-3 animate-pulse" />
              <div className="w-[50%] h-[25px] bg-gray-300 rounded mb-3 animate-pulse" />
              <div className="w-[165px] h-[40px] bg-gray-300 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchSkeleton;
