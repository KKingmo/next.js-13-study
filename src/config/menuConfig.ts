import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";

export const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  {
    text: "생활코딩 강의",
    href: "/",
    icon: FolderIcon,
    children: [
      { text: "HTML", href: "/read/1", icon: ArticleIcon },
      { text: "CSS", href: "/read/2", icon: ArticleIcon },
      { text: "Create", href: "/create", icon: ArticleIcon },
      { text: "Update", href: "/update", icon: ArticleIcon },
      { text: "Delete", href: "/delete", icon: ArticleIcon },
    ],
  },
  { text: "Next 13 Docs", href: "/", icon: FolderIcon },
];
