import { Skeleton, Box } from "@mui/material";

function OurStorySkeleton({ reverse = false, isLast = false, paragraphsCount = 3, image = true }) {
  return (
    <div className={`${isLast ? "bg-[#fff2e9]" : "bg-[#f8f8f8]"} py-[30px] md:py-[50px]`}>
      <div
        className={`
          flex gap-[10px]
          flex-col-reverse
          md:flex-row
          ${reverse ? "md:flex-row-reverse" : ""}
          py-0
          pl-0 lg:pl-[10px] xl:pl-[70px]
        `}
      >
        <div className="w-full md:w-[50%] flex flex-col justify-center items-start px-[30px] md:pl-[50px]">
          <Skeleton variant="text" animation="wave" height={50} width="60%" sx={{ mb: 2 }} />
          <Skeleton variant="rectangular" animation="wave" height={4} width={40} sx={{ mb: 4, bgcolor: "#f57f29" }} />
          
          <Box>
            {Array.from({ length: paragraphsCount }).map((_, i) => (
              <Skeleton
                key={i}
                variant="text"
                animation="wave"
                height={20}
                width={`${80 - i * 10}%`}
                sx={{ mb: 3 }}
              />
            ))}
          </Box>
        </div>

        {image && (
          <div className="w-full md:w-[50%] px-[10px] md:px-0 flex justify-center items-center">
            <Skeleton
              variant="rectangular"
              animation="wave"
              height={250}
              width="100%"
              sx={{ borderRadius: "10px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default OurStorySkeleton;
