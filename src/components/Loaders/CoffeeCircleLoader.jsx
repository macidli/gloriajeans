import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Coffee } from "lucide-react";

function CoffeeCircleLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 10));
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex flex-col items-center mb-6">
        <Coffee
          size={60}
          className="text-[#f57f29] animate-bounce"
          strokeWidth={2.5}
        />
        <span className="mt-4 text-xl font-semibold text-[#f57f29] font-Montserrat">
          Your coffee is on the way...
        </span>
      </div>
      <div className="relative flex items-center justify-center">
        <CircularProgress
          variant="determinate"
          value={progress}
          size={120}
          thickness={4}
          sx={{
            color: "#f57f29",
            "& .MuiCircularProgress-circle": {
              strokeLinecap: "round",
            },
          }}
        />
        <span className="absolute text-lg font-medium text-[#f57f29]">
          {`${progress}%`}
        </span>
      </div>
    </div>
  );
}

export default CoffeeCircleLoader;
