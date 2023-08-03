type ReadProps = {
  params: {
    id: string;
  };
};

import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Read(props: ReadProps) {
  const { params } = props;

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>Read</h2>
        <Typography variant="body1" gutterBottom>
          parameter: {params.id}
        </Typography>
      </Box>
    </Container>
  );
}
