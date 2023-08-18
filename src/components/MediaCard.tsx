"use client";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TransitionContext from "@/context/TransitionContext";
import { useContext } from "react";

/**
 * `MediaCard` 컴포넌트.
 *
 * 이미지와 텍스트, 그리고 더보기 버튼을 포함하는 카드 UI 컴포넌트입니다.
 *
 * @param {string} heading - 카드의 제목.
 * @param {string} text - 카드 내의 본문 텍스트.
 * @param {string} href - 더보기 버튼 클릭시 이동할 주소.
 */
const MediaCard = ({
  heading,
  text,
  href,
}: {
  heading: string;
  text: string;
  href: string;
}) => {
  const { chooseUrl } = useContext(TransitionContext);
  return (
    <Card>
      <Image
        alt="Random image"
        src="https://source.unsplash.com/random"
        width={640}
        height={480}
        style={{
          maxWidth: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => chooseUrl(href)}>
          더보기
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
