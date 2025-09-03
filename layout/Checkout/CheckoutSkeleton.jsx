import { Skeleton } from "@mui/material";

function CheckoutSkeleton() {
  return (
    <div className="mx-auto py-[20px] px-[20px] max-w-[540px] thousand:max-w-[1100px]">
      <div className="flex flex-col thousand:flex-row gap-6">

        <div className="w-[95%] thousand:w-[50%] order-1 thousand:order-2">
          <div className="p-6  rounded-lg space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton
                  variant="rectangular"
                  width={56}
                  height={56}
                  className="rounded"
                />
                <div className="flex-1 space-y-2">
                  <Skeleton variant="text" width="70%" height={20} />
                  <Skeleton variant="text" width="40%" height={16} />
                </div>
                <Skeleton variant="text" width={50} height={20} />
              </div>
            ))}

            <Skeleton variant="rectangular" height={40} className="rounded" />
            <Skeleton variant="text" width="60%" height={20} />
            <Skeleton variant="text" width="40%" height={20} />
            <Skeleton variant="rectangular" height={50} className="rounded" />
          </div>
        </div>

        <div className="w-[95%] thousand:w-[60%] order-2 thousand:order-1">
          <div className="space-y-4">
            <Skeleton variant="text" width="40%" height={28} />
            <Skeleton variant="rectangular" height={45} className="rounded" />

            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                height={45}
                className="rounded"
              />
            ))}

            <div className="flex gap-3">
              <Skeleton
                variant="rectangular"
                width="30%"
                height={45}
                className="rounded"
              />
              <Skeleton
                variant="rectangular"
                width="30%"
                height={45}
                className="rounded"
              />
              <Skeleton
                variant="rectangular"
                width="30%"
                height={45}
                className="rounded"
              />
            </div>

            <Skeleton variant="rectangular" height={45} className="rounded" />
            <Skeleton variant="rectangular" height={55} className="rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSkeleton;
