import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PostControl from "@/components/PostControl";

type ReadProps = {
  params: {
    id: string;
  };
};

/**
 * `Read` 페이지.
 *
 * 주어진 `id`에 해당하는 topic을 가져와 화면에 표시합니다.
 *
 * @param {ReadProps} props - `id` 값을 포함한 객체를 갖는 `params` 속성을 포함하는 props.
 */
export default async function Read(props: ReadProps) {
  const { params } = props;
  const resp = await fetch(`${process.env.API_URL}/topics/${params.id}`, {
    cache: "no-cache",
  });
  const topics = await resp.json();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <PostControl />
        <h2>{topics.title}</h2>
        {topics.body}
      </Box>
    </Container>
  );
}
