import {
  Box,
  Grid,
  Stack,
  Skeleton,
  Card,
  CardContent,
} from "@mui/material";

export default function ProductDetailSkeleton({ animation = "wave" }) {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1280, mx: "auto" }}>
      <Grid container spacing={4}>
 
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              bgcolor: "background.paper",
            }}
          >
            <Box sx={{ position: "relative", pt: "125%" }}>
              <Skeleton
                variant="rectangular"
                animation={animation}
                sx={{ position: "absolute", inset: 0 }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={3}>

            <Stack spacing={1}>
              <Skeleton width={120} height={20} />
              <Skeleton width="80%" height={40} />
              <Skeleton width="60%" height={40} />
            </Stack>

            <Stack spacing={1}>
              <Skeleton width="95%" height={18} />
              <Skeleton width="92%" height={18} />
              <Skeleton width="88%" height={18} />
              <Skeleton width="65%" height={18} />
            </Stack>


            <Stack spacing={1}>
              <Skeleton width={180} height={24} />
              <OptionCardSkeleton />
              <OptionCardSkeleton withStrikethrough />
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <QtySkeleton />
              <SelectSkeleton />
            </Stack>


            <Skeleton
              variant="rectangular"
              height={56}
              sx={{ borderRadius: 2 }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

function OptionCardSkeleton({ withStrikethrough = false }) {
  return (
    <Card variant="outlined" sx={{ borderRadius: 3 }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Skeleton variant="circular" width={20} height={20} />

          <Stack sx={{ flex: 1 }} spacing={1}>
            <Skeleton width="60%" height={20} />
          </Stack>

          <Stack alignItems="flex-end" spacing={0.5}>
            {withStrikethrough && (
              <Box sx={{ position: "relative" }}>
                <Skeleton width={52} height={18} />
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: "50%",
                    height: 2,
                    bgcolor: "text.disabled",
                    transform: "translateY(-50%)",
                  }}
                />
              </Box>
            )}
            <Skeleton width={46} height={22} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

function QtySkeleton() {
  return (
    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ minWidth: 220 }}>
      <Skeleton width={30} height={18} />
      <Skeleton variant="rectangular" width={44} height={44} sx={{ borderRadius: 2 }} />
      <Skeleton variant="rectangular" width={64} height={44} sx={{ borderRadius: 2 }} />
      <Skeleton variant="rectangular" width={44} height={44} sx={{ borderRadius: 2 }} />
    </Stack>
  );
}

function SelectSkeleton() {
  return (
    <Box sx={{ flex: 1, minWidth: 260 }}>
      <Skeleton variant="rectangular" height={56} sx={{ borderRadius: 2 }} />
    </Box>
  );
}
