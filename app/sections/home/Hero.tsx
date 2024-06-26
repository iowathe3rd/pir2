import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import HeroImage from "~/assets/hero.png";
import Hero2Image from "~/assets/hero2.png";

export default function Hero() {
  return (
    <Box
      sx={{
        height: {
          xl: "650px",
          xs: "550px",
        },
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
            xs: "90vw",
            md: "50vw",
          },
          height: {
            xl: "220px",
            lg: "200px",
            md: "220px",
            xs: "240px",
          },
          top: "80px",
        }}
      />
      <Container
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          {/* Текстовая часть */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                position: "absolute",
                top: "80px",
                color: "#FFFFFF",
                padding: "32px 0px 32px 0px",
              }}
              gap={2}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "36px",
                  },
                  lineHeight: {
                    xs: "35.1px",
                    xl: "48.6px",
                  },
                  fontWeight: {
                    xs: 900,
                  },
                  width: "100%",
                  whiteSpace: "pre-line",
                }}
              >
                {"ПОСТАВКА И МОНТАЖ\nУТЕПЛИТЕЛЯ ПИР"}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    // xl: "20px",
                  },
                  lineHeight: {
                    xs: "21.6px",
                    xl: "27px",
                  },
                  fontWeight: 400,
                  width: { xl: "90%" },
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
                bottom: {
                  xl: "200px",
                  xs: "100px",
                },
                width: {
                  md: "380px",
                  xs: "80vw",
                },
                height: {
                  xl: "90px",
                  xs: "80px",
                },
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
          </Grid>

          {/* Изображение справа */}
          <Grid item xs={0} md={6}>
            <Box
              sx={{
                backgroundImage: `url(${Hero2Image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
