import { Box, Button, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Link } from "@remix-run/react";
import React from "react";
import { useDrawerContext } from "~/context/DrawerContext";
import { useTabs } from "~/context/TabContext";

const buttons = [
  { title: "Об утеплителе", href: "/o-uteplitele" },
  { title: "Каталог", href: "/katalog" },
  { title: "Контакты", href: "/kontakty" },
];

const phones = ["+7 (771) 741-18-77", "+7 (727) 328-80-81"];

const Menu: React.FC = () => {
  const { handleChangeTab } = useTabs();
  const { isDrawerOpen, toggleDrawer } = useDrawerContext();

  const handleAnchorClick = (value: number) => {
    handleChangeTab(value);
    toggleDrawer();
    scrollToElement();
  };

  const scrollToElement = () => {
    // Ищем элемент по id
    const element = document.getElementById("production-section");

    // Проверяем, что элемент существует
    if (element) {
      // Используем метод scrollIntoView для прокрутки к элементу
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const anchors = [
    { title: "Профнастил", onClick: () => handleAnchorClick(0) },
    { title: "Бетон", onClick: () => handleAnchorClick(1) },
    { title: "П-образные плиты", onClick: () => handleAnchorClick(2) },
  ];
  return (
    <Box
      sx={{
        position: "absolute",
        top: "120px",
        left: "0",
        display: isDrawerOpen ? "flex" : "none",
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center",
        zIndex: "6",
        color: "black",
      }}
    >
      <Box
        sx={{
          paddingY: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "1.75rem",
          alignItems: "center",
          fontWeight: "700",
        }}
      >
        {anchors.map((value) => {
          return (
            <React.Fragment
              key={value.title}
              // sx={{
              //   width: "100%",
              //   display: "flex",
              //   flexDirection: "column",
              //   alignItems: "center",
              // }}
            >
              <Button onClick={() => value.onClick()} key={value.title}>
                <Typography fontSize={"18px"} fontWeight={700} className="link">
                  {value.title}
                </Typography>
              </Button>
              <Box
                sx={{
                  width: "40%",
                  borderBottom: "2px solid #DEDEDE",
                }}
              />
            </React.Fragment>
          );
        })}
        {buttons.map((value) => {
          return (
            <React.Fragment key={value.title}>
              <Link to={value.href}>
                <Typography fontSize={"18px"} fontWeight={700} className="link">
                  {value.title}
                </Typography>
              </Link>
              <Box
                sx={{
                  width: "40%",
                  borderBottom: "2px solid #DEDEDE",
                }}
              />
            </React.Fragment>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Button
          color="primary"
          variant="contained"
          sx={{ borderRadius: "10px", marginBottom: "30px" }}
        >
          ОСТАВИТЬ ЗАЯВКУ
        </Button>
        {phones.map((value) => {
          return (
            <Link
              key={value}
              rel="nofollow"
              to={`tel:${value}`}
              className="text-lg font-bold text-black"
            >
              {value}
            </Link>
          );
        })}
        <Button>Получить обратный звонок</Button>
        <div className="mx-auto w-16 border border-[#DEDEDE]"></div>
      </Box>
    </Box>
  );
};

export default Menu;
