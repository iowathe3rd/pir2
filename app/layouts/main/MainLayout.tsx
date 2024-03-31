import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { PropsWithChildren } from "react";
import { DrawerProvider } from "~/context/DrawerContext";
import Footer from "./Footer";
import Header from "./Header";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const DrawerAppBar: React.FC<PropsWithChildren> = ({ children }) => {
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <nav>
        <Header />
      </nav>
      <nav>
        <Drawer
          variant="temporary"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {children}
      <Footer />
    </Box>
  );
};

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <DrawerProvider>
      <DrawerAppBar>{children}</DrawerAppBar>
    </DrawerProvider>
  );
};

export default MainLayout;
