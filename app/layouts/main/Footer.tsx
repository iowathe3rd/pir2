import {
  Box,
  Button,
  Divider,
  Grid,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "@remix-run/react";
import React from "react";
import instagram from "~/assets/icons/instagram.svg";
import location from "~/assets/icons/location.png";
import mail from "~/assets/icons/mail.png";
import phone from "~/assets/icons/phone.svg";
import tiktok from "~/assets/icons/tiktok.svg";
import whatsapp from "~/assets/icons/whatsapp.svg";
import youtube from "~/assets/icons/youtube.svg";
import logo from "~/assets/logo.png";

import Container from "~/components/common/Container";

// Типизация для данных в футере
interface FooterLink {
  label: string;
  href?: string;
  target?: string;
}

interface FooterColumn {
  title: string;
  links: {
    icon?: React.ReactNode;
    link: FooterLink[] | FooterLink;
  }[];
}

// Данные для футера
const footerData: FooterColumn[] = [
  {
    title: "КОНТАКТЫ",
    links: [
      {
        icon: <img alt="phone" src={phone} />,
        link: [
          { label: "+7 (771) 741-18-22", href: "tel:+77717411822" },
          { label: "+7 (771) 741-18-44", href: "tel:+77717411844" },
        ],
      },
      {
        icon: <img alt="mail" src={mail} />,
        link: {
          label: "sales@abbex.kz",
          href: "mailto:sales@abbex.kz",
        },
      },
      {
        icon: <img alt="location" src={location} />,
        link: [
          {
            label: "г.Алматы, ул. Нурмакова 1А",
            href: "https://go.2gis.com/rhac4",
            target: "_blank",
          },
          {
            label: "г.Алматы, ул. Розыбакиева 72А",
            href: "https://go.2gis.com/8228i",
            target: "_blank",
          },
        ],
      },
    ],
  },
];

// Данные для иконок социальных сетей
const socialIcons = [
  {
    src: instagram,
    href: "https://www.instagram.com/proaqua.kz/",
    alt: "Instagram",
    title: "Instagram",
  },
  // { path: "/assets/icons/telegram.svg" },
  {
    src: tiktok,
    href: "https://www.tiktok.com/@abbex.kz",
    alt: "TicTok",
    title: "TikTok",
  },
  {
    src: whatsapp,
    href: "https://wa.me/+77717411822",
    alt: "Whatsapp",
    title: "Whatsapp",
  },
  {
    src: youtube,
    href: "https://www.youtube.com/@abbex2289",
    alt: "Youtube",
    title: "Youtube",
  },
];

// Компонент логотипа
const LogoComponent: React.FC = () => {
  return (
    <div className={"mb-7 flex flex-row items-center justify-center"}>
      <Box>
        <img src={logo} alt="Логотип" title="Логотип" />
      </Box>
    </div>
  );
};

// Компонент для отображения элемента списка ссылок
const LinkItem: React.FC<{ item: FooterLink }> = ({ item }) => {
  return item.href ? (
    <Link to={item.href} target={item.target}>
      <Typography variant="subtitle2" fontWeight="normal" color="#666666">
        {item.label}
      </Typography>
    </Link>
  ) : (
    <Typography variant="subtitle2" fontWeight="normal" color="#666666">
      {item.label}
    </Typography>
  );
};

// Компонент колонки футера
const FooterColumn: React.FC<FooterColumn> = (props) => {
  return (
    <React.Fragment>
      <Typography variant="subtitle1" color="primary" fontWeight="medium">
        {props.title}
      </Typography>
      <ul>
        {props.links.map((linkGroup, linkGroupIndex) => (
          <li key={`link-group-${linkGroupIndex}`} className="flex">
            {linkGroup.icon && (
              <Icon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {linkGroup.icon}
              </Icon>
            )}
            {Array.isArray(linkGroup.link) ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {linkGroup.link.map((item, itemIndex) => (
                  <LinkItem
                    key={`link-group-${linkGroupIndex}-item-${itemIndex}`}
                    item={item}
                  />
                ))}
              </Box>
            ) : (
              <LinkItem item={linkGroup.link} />
            )}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

function MetaInformation() {
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{
        color: "#666666",
      }}
    >
      <Grid item>
        <Typography variant="caption">
          Авторское право - &copy; {new Date().getFullYear()}, Proaqua. Все
          права защищены.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="caption">
          <Link to="/pravila-ispolzovaniya-cookie">Условия использования</Link>{" "}
          |{" "}
          <Link to="/politika-konfidencialnosti">
            Политика конфиденциальности
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      <Divider className="grow" />
      <div className="my-4 flex justify-between gap-2">
        {socialIcons.map((item, index) => (
          <Link to={item.href} title={item.title} key={`social-icon-${index}`}>
            <img
              src={item.src}
              className={"social-icon"}
              alt={item.alt}
              style={{
                height: "45px",
                width: "45px",
                borderRadius: "50%",
              }}
            />
          </Link>
        ))}
      </div>
      <Divider className="grow" />
    </div>
  );
}

// Компонент футера
const Footer: React.FC = () => {
  // const isUpMd = useMediaQuery<typeof theme>((theme) => theme.breakpoints.up("md"));

  return (
    <Box sx={{ backgroundColor: "#EEE" }}>
      <Container
        component="footer"
        className="p-3.5 pb-2.5 pt-7"
        sx={{
          paddingBottom: "10px",
          paddingTop: "30px",
        }}
      >
        <Stack gap={{ xl: 6 }} direction={{ sx: "column", xl: "row" }}>
          <Stack direction={"column"}>
            <LogoComponent />
          </Stack>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                lg: "row",
              },
              justifyContent: "space-between",
            }}
          >
            <Grid
              container
              columns={{ xs: 2, xl: 3 }}
              spacing={2}
              sx={{
                marginLeft: { xl: "auto" },
                width: {
                  xs: "100%",
                  lg: "40%",
                },
              }}
            >
              {footerData.map((value, index) => (
                <Grid
                  item
                  xs={index === 2 ? 2 : 1}
                  xl={1}
                  key={`footer-column-${index}`}
                >
                  <FooterColumn key={index} {...value} />
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                width: {
                  xs: "100%",
                  lg: "40%",
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "13px",
              }}
            >
              <Typography
                fontWeight={"400"}
                fontSize={"16px"}
                color={"#666666"}
              >
                ПОСТАВКА И МОНТАЖ УТЕПЛИТЕЛЯ ПИР
              </Typography>
              <Button color="primary" variant="contained" fullWidth>
                Заказать звонок
              </Button>
            </Box>
          </Box>
        </Stack>
        <SocialIcons />
        <MetaInformation />
      </Container>
    </Box>
  );
};

export default Footer;
