import { Link, Typography } from "@mui/material";
import Logo from "../../assets/logo.png";
import React from "react";
import Button from "~/components/common/Button";
import Container from "~/components/common/Container";

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
      <Link className="lg:w-1/3">
        <img src={Logo} alt="abbex" />
      </Link>
      <Typography variant="h6" fontWeight={700} className="lg:w-full">
        Устройство плоских кровель с применением огнестойкого утеплителя нового
        полколения ПИР
      </Typography>
      <div className="flex lg:gap-[26px] lg:w-1/3">
        <Button rounded='lg' size="large" variant="text">+7 (705) 575-60-75</Button>
        <Button rounded='lg' size="large" variant="contained" color="primary">
          Заказать теплорасчет
        </Button>
      </div>
    </Container>
  );
};

export default Header;
