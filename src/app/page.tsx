import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default async function Home() {
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
      </Box>
    </Box>
  );
}
