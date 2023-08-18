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
import { Fragment, ReactNode, useContext, useState } from "react";
import { Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import TransitionHandler from "@/components/TransitionHandler";
import TransitionContext from "@/context/TransitionContext";
import { LINKS } from "@/config/menuConfig";

const DRAWER_WIDTH = 240;

const SideNavLayout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const { chooseUrl } = useContext(TransitionContext);

  const handleClickMenu = (key: string) => {
    setOpen((prev) => {
      return { ...prev, [key]: prev[key] ? !prev[key] : true };
    });
  };

  return (
    <>
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
          <TransitionHandler>{children}</TransitionHandler>
        </div>
      </Box>
    </>
  );
};

export default SideNavLayout;
