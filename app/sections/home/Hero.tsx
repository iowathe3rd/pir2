import { Box, Button, Stack, Typography } from "@mui/material";
import HeroImage from "~/assets/hero.png";
import Hero2Image from "~/assets/hero2.png";
import SectionContainer from "~/components/common/SectionContainer";

export default function Hero() {
  return (
    <Box
      sx={{
        height: "650px",
        width: "100%",
        background: `url(${HeroImage})`,
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        display: "flex",
        alignItems: "center",
        zIndex: "1",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          background: "rgba(0,0,0,0.3)",
          borderRadius: "0px 50px 50px 0px",
          width: {
            xs: "96vw",
            md: "50vw",
          },
          height: "200px",
          top: { xs: "150px", xl: "unset" },
        }}
      />
      <SectionContainer
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
          top: { xs: "-70px", xl: "unset" },
          width: {
            xs: "100vw",
            lg: "50vw",
          },
        }}
      >
        <Stack
          sx={{
            paddingRight: "20px",
            color: "#FFFFFF",
            width: {
              xs: "96vw",
              lg: "50vw",
            },
          }}
          gap={2}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "26px",
                xl: "36px",
              },
              lineHeight: {
                xs: "35.1px",
                xl: "48.6px",
              },
              fontWeight: {
                xs: 700,
                xl: 900,
              },
            }}
          >
            ПОСТАВКА И МОНТАЖ УТЕПЛИТЕЛЯ ПИР
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "16px",
                xl: "20px",
              },
              lineHeight: {
                xs: "21.6px",
                xl: "27px",
              },
              fontWeight: 400,
              width: { xl: "60%" },
            }}
          >
            Тепло/Гидроизоляция плоских кровель
          </Typography>
        </Stack>

        <Button
          color="primary"
          variant="contained"
          sx={{
            position: "absolute",
            bottom: "100px",
            width: "380px",
            height: "90px",
            borderRadius: "23px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "21px",
              textTransform: "uppercase",
            }}
          >
            перейти в каталог
          </Typography>
        </Button>
      </SectionContainer>
      <Box
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
          backgroundImage: `url(${Hero2Image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "50vw",
          height: "100vh",
        }}
      />
    </Box>
  );
}
