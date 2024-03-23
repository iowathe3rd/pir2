import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Stack, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import Slide1 from "~/assets/slide1.jpg";
import Slide2 from "~/assets/slide2.jpg";
import Slide3 from "~/assets/slide3.jpg";
import TabItem from "~/components/common/TabItem";

export const productionData = [
  {
    tabTitle: "Профнастил",
    img: Slide1,
    listdata: {
      title: "Кровельный пирог состоит из:  ",
      items: [
        "Профналстил",
        "Пароизоляционный слой",
        "Минеральный утеплитель",
        "PIR Плита Pirrogroup",
        "ПВХ Мебмрана Fatrafol",
        "Полимерный тарельчатый крепеж",
      ],
    },
    description: `
    Системы неэксплуатируемой кровли по профилированному стальному листу с гидроизоляционным ковром из полимерных ПВХ/ТПО мембран и фольгированными с двух сторон теплоизоляционными PIR плитами. Крепление PIR утеплителя и ПВХ/ТПО мембраны осуществляется механическим способом к стальному основанию с использованием специализированного кровельного крепежа. В качестве слоя теплоизоляции и прочного основания под гидроизоляционное покрытие используется фольгированная с двух сторон PIR плита с L-образной кромкой торцов. В зданиях с повышенной пожарной опасностью целесообразно использовать двухслойное утепление, монтируя снизу негорючую минплиту, а сверху ПИР.
    Такой способ подходит для:
    Промышленных зданий, производственных цехов.
    Логистических комплексов
    Торгово-развлекательных цетров, спортивных сооружений`,
  },
  {
    tabTitle: "Профнастил",
    img: Slide2,
    listdata: {
      title: "Кровельный пирог состоит из:  ",
      items: [
        "Профналстил",
        "Пароизоляционный слой",
        "Минеральный утеплитель",
        "PIR Плита Pirrogroup",
        "ПВХ Мебмрана Fatrafol",
        "Полимерный тарельчатый крепеж",
      ],
    },
    description: `
    Системы неэксплуатируемой кровли по профилированному стальному листу с гидроизоляционным ковром из полимерных ПВХ/ТПО мембран и фольгированными с двух сторон теплоизоляционными PIR плитами. Крепление PIR утеплителя и ПВХ/ТПО мембраны осуществляется механическим способом к стальному основанию с использованием специализированного кровельного крепежа. В качестве слоя теплоизоляции и прочного основания под гидроизоляционное покрытие используется фольгированная с двух сторон PIR плита с L-образной кромкой торцов. В зданиях с повышенной пожарной опасностью целесообразно использовать двухслойное утепление, монтируя снизу негорючую минплиту, а сверху ПИР.
    Такой способ подходит для:
    Промышленных зданий, производственных цехов.
    Логистических комплексов
    Торгово-развлекательных цетров, спортивных сооружений`,
  },
  {
    tabTitle: "Профнастил",
    img: Slide3,
    listdata: {
      title: "Кровельный пирог состоит из:  ",
      items: [
        "Профналстил",
        "Пароизоляционный слой",
        "Минеральный утеплитель",
        "PIR Плита Pirrogroup",
        "ПВХ Мебмрана Fatrafol",
        "Полимерный тарельчатый крепеж",
      ],
    },
    description: `
    Системы неэксплуатируемой кровли по профилированному стальному листу с гидроизоляционным ковром из полимерных ПВХ/ТПО мембран и фольгированными с двух сторон теплоизоляционными PIR плитами. Крепление PIR утеплителя и ПВХ/ТПО мембраны осуществляется механическим способом к стальному основанию с использованием специализированного кровельного крепежа. В качестве слоя теплоизоляции и прочного основания под гидроизоляционное покрытие используется фольгированная с двух сторон PIR плита с L-образной кромкой торцов. В зданиях с повышенной пожарной опасностью целесообразно использовать двухслойное утепление, монтируя снизу негорючую минплиту, а сверху ПИР.
    Такой способ подходит для:
    Промышленных зданий, производственных цехов.
    Логистических комплексов
    Торгово-развлекательных цетров, спортивных сооружений`,
  },
];

const ProductionPanel = (data: (typeof productionData)[0]) => {
  return (
    <Stack>
      <Box
        sx={{
          minHeight: "300px",
          display: "flex",
          flexDirecton: {
            xs: "column",
            lg: "row",
          },
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${data.img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: {
              xs: "100%",
              lg: "50%",
            },
          }}
        />
        <Box
          sx={{
            width: {
              xs: "100%",
              lg: "50%",
            },
            marginTop: {
              xs: 0,
              lg: "15px",
            },
          }}
        >
          <Typography>{data.listdata.title}</Typography>
          <ul className="ml-10 list-decimal">
            {data.listdata.items.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </Box>
      </Box>
      <Typography
        sx={{
          marginTop: {
            xs: 0,
            lg: "1rem",
          },
        }}
      >
        {data.description}
      </Typography>
    </Stack>
  );
};

const ProductionSection = () => {
  const [value, setValue] = useState<string>("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="shadow-lg">
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            sx={{
              maringLeft: "auto",
            }}
          >
            {productionData.map((value, index) => {
              return (
                <TabItem key={index} label={value.tabTitle} value={index} />
              );
            })}
          </TabList>
        </Box>

        {productionData.map((value, index) => {
          return (
            <TabPanel key={index} value={String(index)}>
              <ProductionPanel {...value} />
            </TabPanel>
          );
        })}
      </TabContext>
    </Box>
  );
};

export default ProductionSection;
