import { Box, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import Almaty from "~/assets/almaty.jpeg";
import Location from "~/assets/location.svg";
import { SectionTitle } from "~/components/common/SectionTitle";
import { theme } from "~/lib/mui";

const ContactUs: React.FC = () => {
  const isUpLg = useMediaQuery<typeof theme>((theme) =>
    theme.breakpoints.up("lg"),
  );
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const scriptSrc =
  //       "https:api-maps.yandex.ru/v3/?apikey=9a70cddc-5c9f-4484-84ee-eaea17bf4622&lang=ru_RU";

  //     loadScript(scriptSrc).then(() => {
  //       // Здесь ваш код, который работает с API Яндекс.Карт
  //       // Например, инициализация карты:
  //       window.ymaps.ready.then(() => {
  //         // HTML-элемент.
  //         const map = new window.ymaps.YMap(
  //           document.getElementById("first_map"),
  //           {
  //             location: {
  //               center: [37.588144, 55.733842],
  //               zoom: 10,
  //             },
  //           },
  //         );
  //       });
  //     });
  //   }
  // }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        marginY: "35px",
        padding: 0,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", lg: "30%" },
        }}
      >
        <Stack spacing={"1.5rem"}>
          <SectionTitle title="КАК С НАМИ СВЯЗАТЬСЯ" subtitle="Контакты" />
          <Stack spacing={"15px"}>
            <Typography fontSize={"18px"}>
              Пн-Пт: с 8.00 до 17.00 Cб-Вс: выходной
            </Typography>
            <Stack>
              <Link>
                <Typography fontSize={"34px"} fontWeight={"700"}>
                  +7 (771) 741-18-22
                </Typography>
              </Link>
              <Link>
                <Typography fontSize={"34px"} fontWeight={"700"}>
                  +7 (771) 741-18-44
                </Typography>
              </Link>
              <Link>
                <Typography fontSize={"34px"} fontWeight={"700"}>
                  sales@abbex.kz
                </Typography>
              </Link>
            </Stack>
            <Stack>
              <Typography variant={"h5"} fontWeight={"bolder"}>
                г. Алматы, ул. Нурмакова 1А
              </Typography>
              <Typography variant={"h5"} fontWeight={"bolder"}>
                г. Алматы, ул. Розыбакиева 72А
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Link
        sx={{
          width: { xs: "100%", lg: "70%" },
          marginTop: isUpLg ? "0" : "15px",
        }}
        href={
          "https://yandex.com/maps/?um=constructor%3A7aa4d9cee6f0a57d43073908f79b5448555fb739eedc7387ca758eb3b793ebeb&amp;source=constructorStatic"
        }
        target="_blank"
      >
        <Box
          sx={{
            width: "100%",
            height: "360px",
            borderRadius: "15px",
            position: "relative",
          }}
          id={"footer-map"}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
            alt="almaty map"
            src={Almaty}
          />
          <img
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
            alt="location mark"
            src={Location}
          />
        </Box>
      </Link>
    </Box>
  );
};

export default ContactUs;
