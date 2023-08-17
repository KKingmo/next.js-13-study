"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import TransitionHandler from "@/components/TransitionHandler";

const DRAWER_WIDTH = 240;

const LINKS = [
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

export default function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<any>({});
  const [url, setUrl] = useState<string>("/");

  const chooseUrl = (path: string) => {
    setUrl(path);
  };

  const handleClickMenu = (key: string) => {
    setOpen((prev: any) => {
      return { ...prev, [key]: prev[key] ? !prev[key] : true };
    });
  };

  return (
    <html>
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: "background.paper" }}>
              <DashboardIcon
                sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
              />
              <Typography variant="h6" noWrap component="div" color="black">
                Next 13 노트
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: DRAWER_WIDTH,
                boxSizing: "border-box",
                top: ["48px", "56px", "64px"],
                height: "auto",
                bottom: 0,
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Divider />
            <List>
              {LINKS.map(({ text, href, icon: Icon, children }) => {
                const ukey = `${text}${href}`;
                return children ? (
                  <Fragment key={ukey}>
                    <ListItemButton onClick={() => handleClickMenu(ukey)}>
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {open[ukey] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open[ukey]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {children?.map(
                          ({ text: cText, href: cHref, icon: CIcon }) => (
                            <ListItemButton
                              onClick={() => chooseUrl(cHref)}
                              sx={{ pl: 4 }}
                              key={cHref}
                            >
                              <ListItemIcon>
                                <CIcon />
                              </ListItemIcon>
                              <ListItemText primary={cText} />
                            </ListItemButton>
                          )
                        )}
                      </List>
                    </Collapse>
                  </Fragment>
                ) : (
                  <ListItem key={ukey} disablePadding>
                    <ListItemButton onClick={() => chooseUrl(href)}>
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Drawer>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              ml: `${DRAWER_WIDTH}px`,
              mt: ["48px", "56px", "64px"],
              p: 3,
            }}
          >
            <div className="content-container">
              <TransitionHandler url={url}>{children}</TransitionHandler>
            </div>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
