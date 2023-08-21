import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";

export const PATH = {
  home: { href: "/" },
  basic: {
    href: "/basic",
    create: { href: "/basic/create" },
    update: { href: "/basic/update" },
    read: { href: "/basic/read" },
  },
};

export const LINKS = [
  { text: "Home", href: PATH.home.href, icon: HomeIcon },
  {
    text: "Next 13 맛보기",
    href: PATH.basic.href,
    icon: FolderIcon,
    children: [
      { text: "홈", href: PATH.basic.href, icon: ArticleIcon },
      {
        text: "글생성",
        href: PATH.basic.create.href,
        icon: ArticleIcon,
      },
    ],
  },
  { text: "Next 13 Docs", href: PATH.home.href, icon: FolderIcon },
];
