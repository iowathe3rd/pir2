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
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "flex",
            },
            justifyContent: "flex-end",
            alignItems: "center",
            gap: {
              xs: "10px",
              lg: "26px",
            },
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
      </Container>
    </Toolbar>
  );
}
