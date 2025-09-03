// MainMenuSkeleton.jsx
import React from "react";
import { Grid, CardContent, Skeleton, Box } from "@mui/material";

function MainMenuSkeleton() {
  return (
    <div className="flex min-h-screen px-[20px] md:px-[60px] pt-[30px] md:pt-[80px] pb-[30px] relative">
      {/* SideMenu skeleton */}
      <Box className="hidden md:flex flex-col w-[200px] xl:w-[250px] mr-[20px]">
        {Array.from({ length: 11 }).map((_, i) => (
          <Skeleton
            key={i}
            variant="text"
            animation="wave"
            height={30}
            sx={{ marginBottom: 1 }}
          />
        ))}
      </Box>

      {/* Main content skeleton */}
      <div className="flex-1 flex flex-col pl-0 md:pl-[30px] w-full">
        {Array.from({ length: 2 }).map((_, mcIndex) => (
          <div key={mcIndex} style={{ marginBottom: "40px" }}>
            {/* Banner skeleton */}
            <Skeleton
              variant="rectangular"
              animation="wave"
              height={300}
              width="100%"
              sx={{ borderRadius: "10px", marginBottom: "20px" }}
            />

            {/* Məhsul skeleton-ları */}
            <Grid container spacing={2}>
              {Array.from({ length: 4 }).map((_, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <CardContent>
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      height={180}
                      sx={{ borderRadius: "10px", marginBottom: "10px" }}
                    />
                    <Skeleton animation="wave" height={30} width="80%" />
                    <Skeleton
                      animation="wave"
                      height={20}
                      width="60%"
                      sx={{ marginBottom: "10px" }}
                    />
                    <Skeleton animation="wave" height={40} width="40%" />
                  </CardContent>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainMenuSkeleton;
