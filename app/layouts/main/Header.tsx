import { Button, Toolbar, Typography } from "@mui/material";
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
          gap: "15px",
        }}
      >
        <img src={logo} alt="logo" width={200} />
        <Typography
          variant="h6"
          component="span"
          lineHeight={"27px"}
          className="w-2/4"
          sx={{
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          Устройство плоских кровель с применением огнестойкого утеплителя
          нового полколения ПИР
        </Typography>
        <div className="flex grow items-center">
          <Button>+7 (705) 575-60-75</Button>
          <Button color="primary" variant="contained">
            Заказать теплорасчет
          </Button>
        </div>
      </Container>
    </Toolbar>
  );
}
