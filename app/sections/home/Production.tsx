import { Box, Stack, Tabs, Typography } from "@mui/material";
import React from "react";
import Slide1 from "~/assets/slide1.jpg";
import Slide2 from "~/assets/slide2.jpg";
import Slide3 from "~/assets/slide3.jpg";
import TabItem from "~/components/common/TabItem";

import Product1MainText from "~/content/hero/product1.main.md";
import Product2MainText from "~/content/hero/product2.main.md";
import Product3MainText from "~/content/hero/product3.main.md";

import { useTabs } from "~/context/TabContext";

export type productionTabProps = {
  id: string;
  index: number;
  tabTitle: string;
  img: string;
  listdata: {
    title: string;
    items: string[];
  };
  description: JSX.Element;
};
export const productionData: productionTabProps[] = [
  {
    id: "1",
    index: 0,
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
    description: <Product1MainText />,
  },
  {
    id: "2",
    index: 1,
    tabTitle: "Бетон",
    img: Slide2,
    listdata: {
      title: "Кровельный пирог состоит из:  ",
      items: [
        "Железо-бетонная плита ",
        "Пароизоляционный слой",
        "PIR Плита Фольга/Фольга",
        "ПВХ Мебмрана Fatrafol",
        "Полимерный тарельчатый крепеж",
      ],
    },
    description: <Product2MainText />,
  },
  {
    id: "3",
    index: 2,
    tabTitle: "П-образные плиты",
    img: Slide3,
    listdata: {
      title: "Кровельный пирог состоит из:  ",
      items: [
        "Железо-бетонная плита ",
        "Старое покрытие",
        "Специальный Adhesive клей для PIR плит",
        "PIR плита стеклохолст",
        "Специальный Adhesive Клей для ПВХ Мебмран",
        "Флисовая/Кэшированная ПВХ мембрана",
      ],
    },
    description: <Product3MainText />,
  },
];

const ProductionPanel = (data: productionTabProps & { value: 0 | 1 | 2 }) => {
  return (
    <Stack
      role="tabpanel"
      hidden={data.value != data.index}
      id={`production-tabpanel-${data.index}`}
      aria-labelledby={`production-tab-${data.index}`}
    >
      {data.value === data.index && (
        <React.Fragment>
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
                width: {
                  xs: "100%",
                  xl: "50%",
                },
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
                fontSize: "22px",
                lineHeight: "27px",
                padding: {
                  xs: "10px",
                  xl: "unset",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "inherit",
                  fontWeight: "400",
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
              lineHeight: "30px",
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

              padding: {
                xs: "10px",
                xl: "0px 48px 80px 84px",
              },
            }}
          >
            {data.description}
          </Box>
        </React.Fragment>
      )}
    </Stack>
  );
};

const ProductionSection = () => {
  const { activeTab, handleChangeTab } = useTabs();
  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: number, // Изменено тип на number
  ) => {
    handleChangeTab(newValue);
    window.location.hash = `tab-${newValue}`;
  };

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "3px",
        marginTop: "-60px",
        background: "white",
        zIndex: 5,
      }}
      className="shadow"
    >
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Production Tabs"
        sx={{
          "& .MuiTabs-flexContainer": {
            justifyContent: {
              xs: "flex-start",
              md: "flex-end",
            },
          },
          width: "100%",
        }}
      >
        {productionData.map((item) => (
          <TabItem
            label={item.tabTitle}
            key={item.id}
            id={`production-tab-${item.id}`}
            aria-controls={`production-tabpanel${item.id}`}
          />
        ))}
      </Tabs>

      {productionData.map((value) => {
        return (
          <ProductionPanel
            key={value.id}
            description={value.description}
            id={value.id}
            img={value.img}
            index={value.index}
            listdata={value.listdata}
            tabTitle={value.tabTitle}
            value={activeTab}
          />
        );
      })}
    </Box>
  );
};

export default ProductionSection;
