"use client";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TransitionContext from "@/context/TransitionContext";
import { FormEvent, useContext } from "react";

const Create = () => {
  const { chooseUrl } = useContext(TransitionContext);
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const target = e.currentTarget;
            // 수정하기
            const title = (target.title as any).value;
            const body = target.body.value;
            const options = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ title, body }),
            };
            fetch(`http://localhost:9999/topics`, options)
              .then((res) => res.json())
              .then((result) => {
                console.log(result);
                const lastid = result.id;
                chooseUrl(`/basic/read/${lastid}`);
              });
          }}
        >
          <p>
            <input type="text" name="title" placeholder="title" />
          </p>
          <p>
            <textarea name="body" placeholder="body"></textarea>
          </p>
          <p>
            <input type="submit" value="create" />
          </p>
        </form>
      </Box>
    </Container>
  );
};
export default Create;
