import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import { Coffee } from "lucide-react"; 

function CoffeeLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          return 0;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
     
      <div className="flex items-center space-x-2 mb-6">
        <Coffee
          size={42}
          className="text-[#f57f29] animate-bounce"
          strokeWidth={2.5}
        />
        <span className="text-2xl font-semibold text-[#f57f29] font-Montserrat">
          Brewing your coffee...
        </span>
      </div>

      <div className="w-2/3 md:w-1/3">
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: "8px",
            backgroundColor: "#ffe1cc",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#f57f29",
            },
          }}
        />
      </div>
    </div>
  );
}

export default CoffeeLoader;
