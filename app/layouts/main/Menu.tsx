import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import logo from "~/assets/logo.png";

import { Link } from "@remix-run/react";
import React from "react";
import FeedBackModalContent from "~/components/modals/FeedBack";
import { useDrawerContext } from "~/context/DrawerContext";
import { useModal } from "~/context/ModalContext";
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
  const { openModal } = useModal();

  const scrollToElement = (id: number) => {
    // Используем setTimeout для обеспечения задержки перед прокруткой
    setTimeout(() => {
      // Ищем элемент по id
      const element = document.getElementById(`production-tabpanel-${id}`);

      // Проверяем, что элемент существует
      if (element) {
        // Используем метод scrollIntoView для прокрутки к элементу
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Примерное время ожидания в миллисекундах
  };

  const handleAnchorClick = (value: number) => {
    handleChangeTab(value);
    scrollToElement(value);
    toggleDrawer();
  };

  const anchors = [
    { title: "Профнастил", onClick: () => handleAnchorClick(0) },
    { title: "Бетон", onClick: () => handleAnchorClick(1) },
    { title: "П-образные плиты", onClick: () => handleAnchorClick(2) },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
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
      <Toolbar
        sx={{
          backgroundColor: "white",
          height: "120px",
          width: "100%",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: {
              xs: "15px",
              lg: "30px",
            },
          }}
        >
          <img src={logo} alt="logo" width={230} />
          <Button color="primary" onClick={() => toggleDrawer()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
        </Container>
      </Toolbar>
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
          onClick={() => openModal(<FeedBackModalContent />)}
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
        <Button onClick={() => openModal(<FeedBackModalContent />)}>
          Получить обратный звонок
        </Button>
        <div className="mx-auto w-16 border border-[#DEDEDE]"></div>
      </Box>
    </Box>
  );
};

export default Menu;
