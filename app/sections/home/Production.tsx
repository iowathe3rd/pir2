import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Slide1 from "~/assets/slide1.jpg";
import Slide2 from "~/assets/slide2.jpg";
import Slide3 from "~/assets/slide3.jpg";
import TabItem from "~/components/common/TabItem";

import Product1MainText from "~/content/hero/product1.main.md";

export const productionData = [
  {
    id: "1",
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
    id: "2",
    tabTitle: "Бетон",
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
    Системы неэксплуатируемой (эксплуатируемой, балластной) кровли по ж.б основанию с гидроизоляционным ковром из полимерной ПВХ/ТПО мембраны и теплоизоляцией плитами из пенополиизоцианурата (PIR). В этом случае в качестве теплоизоляции и прочного основания под покрытие ПВХ/ТПО мембраной используется фольгированная с двух сторон PIR плита с L-образной кромкой торцов. Крепление PIR утеплителя и ПВХ/ТПО мембраны осуществляется механическим способом к бетонному основанию с использованием специализированного кровельного крепежа.
    Такой способ подходит для:
    Промышленных зданий, производственных цехов.
    Общественные, жилые здания и сооружения
    Здания старой постройки с крышей из ребристых плит с механиески прочной стяжкой`,
  },
  {
    id: "3",
    tabTitle: "П-образные плиты",
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
    Ремонт крыш зданий старой постройки по ребристым ж.б плитам П (…), КЖС с дефектными стяжкой и наплавленной битумной гидроизоляцией при невозможности механического крепления. В случае ремонта гидроизоляционного покрытия (и утеплительного слоя) старых крыш с основанием из П-образных плит идеально применить клеевую системы из флисовой ПВХ/ТПО мембраны без демонтажа старого гидроизоляционного ковра. Для создания расчетной адгезии необходимо использовать только ПИР-плиту, облицованную с двух сторон стеклотканью и специализированный полиуретановый клей. Применение полимерных мембран в клеевой системе без флисового слоя не допускается. В альтернативном варианте необходимо проводить демонтаж/монтаж наплавляемого покрытия и ц\п стяжки, что приводит к значительно более высоким затратам и дополнительным нагрузкам на плиты.`,
  },
];

const ProductionPanel = (data: (typeof productionData)[0]) => {
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: "20px",
            "& img": {
              width: "100%",
              height: "auto",
            },
          }}
        >
          <img src={data.img} alt={data.tabTitle} />
        </Box>
        <Box
          sx={{
            width: {
              xs: "100%",
              lg: "50%",
            },
            marginTop: "50px",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "27px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "27px",
            }}
          >
            {data.listdata.title}
          </Typography>
          <ul className="mt-0 list-decimal">
            {data.listdata.items.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: {
            xs: 0,
            lg: "1rem",
          },
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "27px",
          color: "#393939",
          "& ul": {
            margin: "0",
          },
          "& p": {
            marginBottom: "0",
          },

          paddingLeft: {
            xl: "84px",
          },
          paddingRight: {
            xl: "48px",
          },
          paddingBottom: {
            xl: "80px",
          },
        }}
      >
        <Product1MainText />
      </Box>
    </Stack>
  );
};

const ProductionSection = () => {
  const [value, setValue] = useState<"1" | "2" | "3">("1");
  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: "1" | "2" | "3",
  ) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "3px",
        marginTop: "-60px",
        background: "white",
        zIndex: 5,

        overflowX: "scroll",
      }}
      className="shadow"
    >
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            sx={{
              "& .MuiTabs-flexContainer": {
                justifyContent: "flex-end",
              },
              msOverflowY: "hidden",
            }}
          >
            {productionData.map((value, index) => {
              return (
                <TabItem key={index} label={value.tabTitle} value={value.id} />
              );
            })}
          </TabList>
        </Box>

        {productionData.map((value, index) => {
          return (
            <TabPanel key={index} value={value.id}>
              <ProductionPanel {...value} />
            </TabPanel>
          );
        })}
      </TabContext>
    </Box>
  );
};

export default ProductionSection;
