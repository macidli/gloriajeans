import { Skeleton } from "@mui/material";
import { Coffee, Star } from "lucide-react";

function CoffeeFeedbacksLoader() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-3 mb-6">
        <Coffee className="w-8 h-8 text-amber-600 animate-bounce" />
        <h2 className="text-2xl font-bold text-gray-800">Loading Feedbacks...</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl shadow-md p-5 border border-gray-200 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <Skeleton variant="circular" width={50} height={50} />
              <div className="flex-1">
                <Skeleton variant="text" width="60%" height={20} />
                <Skeleton variant="text" width="40%" height={16} />
              </div>
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 opacity-30 animate-pulse"
                  fill="currentColor"
                />
              ))}
            </div>


            <div className="space-y-2">
              <Skeleton variant="text" height={18} width="100%" />
              <Skeleton variant="text" height={18} width="90%" />
              <Skeleton variant="text" height={18} width="80%" />
            </div>

            <div className="flex justify-between items-center mt-4">
              <Skeleton variant="rectangular" width={80} height={30} className="rounded-md" />
              <Skeleton variant="rectangular" width={50} height={30} className="rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoffeeFeedbacksLoader;
