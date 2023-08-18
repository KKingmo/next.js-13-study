import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import MediaCard from "@/components/MediaCard";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box>
        <Alert severity="info" sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Next 13 학습노트</AlertTitle>
          강의 문서보고 배운거 여따가 써먹으면서 기록해놓습니다.
        </Alert>

        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid xs={6}>
            <MediaCard heading="가나다라마바사" text="1q2w3e4r!@#" />
          </Grid>
          <Grid xs={6}>
            <MediaCard heading="abcdefg" text="1q2w3e4r!@#" />
          </Grid>
          <Grid xs={6}>
            <MediaCard heading="1234567" text="1q2w3e4r!@#" />
          </Grid>
          <Grid xs={6}>
            <MediaCard heading="한놈이두식이석삼이너구리" text="1q2w3e4r!@#" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
