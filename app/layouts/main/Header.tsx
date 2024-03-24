import { Box, Button, Toolbar, Typography } from "@mui/material";
import logo from "~/assets/logo.png";
import Container from "~/components/common/Container";
export default function Header() {
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
        <Typography
          variant="h6"
          component="span"
          lineHeight={"27px"}
          sx={{
            display: {
              xs: "none",
              lg: "block",
            },
            maxWidth: "600px",
          }}
        >
          Устройство плоских кровель с применением огнестойкого утеплителя
          нового полколения ПИР
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexGrow: "1",
            gap: {
              xs: "10px",
              lg: "26px",
            },
          }}
        >
          <Button size="large">+7 (705) 575-60-75</Button>
          <Button size="large" color="primary" variant="contained">
            Заказать теплорасчет
          </Button>
        </Box>
      </Container>
    </Toolbar>
  );
}
