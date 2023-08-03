import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
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
          <AlertTitle>반갑습니다 👋</AlertTitle>
          Next.js App Router와 Material UI v5붙였습니다.
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

      <Drawer
        sx={{
          width: 320,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 320,
            boxSizing: "border-box",
            top: ["48px", "56px", "64px"],
            height: "auto",
            bottom: 0,
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <List sx={{ px: 2 }}>
          <ListItem disablePadding>
            <Typography variant="overline" sx={{ fontWeight: 500 }}>
              Next 13 버전 파먹기
            </Typography>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
