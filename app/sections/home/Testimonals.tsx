import { Box, Grid } from "@mui/material";
import Testimonal1Icon from "~/assets/icons/testimonal1.svg";
import Testimonal2Icon from "~/assets/icons/testimonal2.svg";
import Testimonal3Icon from "~/assets/icons/testimonal3.svg";
import Testimonal4Icon from "~/assets/icons/testimonal4.svg";
import Testimonal5Icon from "~/assets/icons/testimonal5.svg";
import Testimonal6Icon from "~/assets/icons/testimonal6.svg";
import QuickInfoCard from "~/components/common/QuickInfoCard";

const testimonials = [
  {
    iconPath: Testimonal1Icon,
    title: "Рекордно низкая теплопроводночсть",
  },
  {
    iconPath: Testimonal2Icon,
    title: "Пожаробезопасность",
  },
  {
    iconPath: Testimonal3Icon,
    title: "Влагостойкость",
  },
  {
    iconPath: Testimonal4Icon,
    title: "Высокая прочность",
  },
  {
    iconPath: Testimonal5Icon,
    title: "Долговечность",
  },
  {
    iconPath: Testimonal6Icon,
    title: "Экологичность",
  },
];

export default function Testimonials() {
  return (
    <Box
      sx={{
        width: "fit-content",
        borderRadius: "20px",
        marginX: "auto",
        padding: {
          xs: 1,
          xl: 2,
        },
      }}
      className="shadow"
    >
      <Grid
        spacing={{ xs: 1, xl: 2 }}
        container
        columns={{ xs: 2, lg: 6, xl: 12 }}
        sx={{
          padding: {
            xs: "10px",
            xl: "15px",
          },
          width: "100%",
          placeContent: "space-between",
        }}
      >
        {testimonials.map((value, index) => (
          <Grid item key={`testimonials-${index}`} xs={1} xl={"auto"}>
            <QuickInfoCard key={index} title={value.title}>
              <img
                src={value.iconPath}
                alt={value.title}
                className={"w-auto"}
              />
            </QuickInfoCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
