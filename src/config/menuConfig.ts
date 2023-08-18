import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";

export const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  {
    text: "Next 13 맛보기",
    href: "/basic",
    icon: FolderIcon,
    children: [
      { text: "홈", href: "/basic", icon: ArticleIcon },
      { text: "글생성", href: "/basic/create", icon: ArticleIcon },
    ],
  },
  { text: "Next 13 Docs", href: "/", icon: FolderIcon },
];
