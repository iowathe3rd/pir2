import { Box, Stack, Typography } from "@mui/material";
import Material from "~/assets/material.png";
import { SectionTitle } from "~/components/common/SectionTitle";

const AboutMaterial = () => {
  return (
    <Stack
      sx={{
        boxShadow: 3,
        borderRadius: "5px",
        paddingX: {
          xs: "20px",
          lg: "42px",
        },
        paddingY: {
          xs: "15px",
          lg: "20px",
        },
      }}
    >
      <SectionTitle title="О МАТЕРИАЛЕ" subtitle="Об Утеплителе" />
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          gap: "60px",
        }}
      >
        <img src={Material} alt={"material"} className="w-full lg:w-1/3" />
        <Typography
          fontWeight={400}
          fontSize={"18px"}
          color="#393939"
          sx={{
            textIndent: "20px",
          }}
        >
          Самое главное требование, предъявляемое к утеплителю - его
          теплоизолирующая способность на протяжении всего срока службы здания.
          PIR-плиты PIRRO обладают наименьшим показателем теплопроводности среди
          всех современных утеплителей: λ10=0,021* Вт/м·К. Следует отметить
          прямую зависимость между теплопроводностью утеплителя и требуемой его
          толщиной при заданном уровне тепловой защиты. По этим причинам
          требуемая толщина PIR-теплоизоляции значительно меньше требуемых
          толщин всех известных минеральных и пенополистирольных видов изоляции.
          Это означает, например, что при использовании древесины требуемая
          толщина – 333 мм, минеральной ваты – 93 мм, а при использовании
          PIR-плиты – всего 50 мм.
        </Typography>
      </Box>
    </Stack>
  );
};

export default AboutMaterial;
