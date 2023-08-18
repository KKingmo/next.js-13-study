import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

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
  const resp = await fetch(`http://localhost:9999/topics/${params.id}`);
  const topics = await resp.json();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>{topics.title}</h2>
        {topics.body}
      </Box>
    </Container>
  );
}
