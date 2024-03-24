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
import Footer from "./Footer";
import Header from "./Header";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const DrawerAppBar: React.FC<PropsWithChildren> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
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
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
    </Box>
  );
};

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <DrawerAppBar>{children}</DrawerAppBar>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
