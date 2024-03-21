import { Container, Link, Typography } from "@mui/material";
import Logo from "../../assets/logo.jpeg";
import React from "react";
import Button from "~/components/common/Button";

const Header: React.FC = () => {
  return (
    <Container
      component={"header"}
      sx={{
        height: "120px",
        display: "flex",
        alignItems: "center",
        background: "white",
      }}
    >
      <Link>
        <img src={Logo} alt="abbex" />
      </Link>
      <Typography variant="h6" fontWeight={700}>
        Устройство плоских кровель с применением огнестойкого утеплителя нового
        полколения ПИР
      </Typography>
      <div className="flex lg:gap-[26px]">
        <Button variant="text">+7 (705) 575-60-75</Button>
        <Button variant="contained" color="primary">
          Заказать теплорасчет
        </Button>
      </div>
    </Container>
  );
};

export default Header;
