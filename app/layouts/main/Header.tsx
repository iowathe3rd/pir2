import { Box, Button, Toolbar, Typography, useMediaQuery } from "@mui/material";
import logo from "~/assets/logo.png";
import Container from "~/components/common/Container";
import { useDrawerContext } from "~/context/DrawerContext";
import { theme } from "~/lib/mui";
import Menu from "./Menu";

export default function Header() {
  const { toggleDrawer } = useDrawerContext();
  const isUpXl = useMediaQuery<typeof theme>((theme) =>
    theme.breakpoints.up("xl"),
  );
  return (
    <Toolbar
      component="nav"
      sx={{
        backgroundColor: "white",
        height: "120px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: {
            xs: "15px",
            lg: "30px",
          },
        }}
      >
        <img src={logo} alt="logo" width={230} />
        <Box
          sx={{
            width: "full",
            marginX: "auto",
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={"20px"}
            component="span"
            lineHeight={"27px"}
            sx={{
              display: {
                xs: "none",
                lg: "block",
              },
              maxWidth: "550px",
            }}
          >
            Устройство плоских кровель с применением огнестойкого утеплителя
            нового полколения ПИР
          </Typography>
        </Box>
        {isUpXl ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "26px",
            }}
          >
            <Button size="large">
              <Typography fontWeight="500" fontSize="20px">
                +7 (705) 575-60-75
              </Typography>
            </Button>
            <Button size="large" color="primary" variant="contained">
              Заказать теплорасчет
            </Button>
          </Box>
        ) : (
          <Button color="primary" onClick={() => toggleDrawer()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
        )}
        <Menu />
      </Container>
    </Toolbar>
  );
}
