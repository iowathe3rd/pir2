import {
  Box,
  Button,
  Divider,
  Grid,
  Icon,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "@remix-run/react";
import React from "react";
import Container from "~/components/common/Container";
import Logo from "~/components/common/Logo";

import { footer as data } from "~/data";

// Типизация для данных в футере
export interface FooterLink {
  label: string;
  href?: string;
  target?: string;
}

export interface FooterColumn {
  title: string;
  links: {
    icon?: string;
    link: FooterLink[] | FooterLink;
  }[];
}

export interface SocialIcons {
  src: string;
  href: string;
  alt: string;
  title: string;
}

// Компонент для отображения элемента списка ссылок
const LinkItem: React.FC<{ item: FooterLink }> = ({ item }) => {
  return item.href ? (
    <Link to={item.href} target={item.target}>
      <MuiLink
        fontSize="16px"
        fontWeight="400"
        color="#666666"
        underline="none"
      >
        {item.label}
      </MuiLink>
    </Link>
  ) : (
    <MuiLink
      variant="subtitle2"
      fontWeight="normal"
      color="#666666"
      underline="none"
    >
      {item.label}
    </MuiLink>
  );
};

// Компонент колонки футера
const FooterColumn: React.FC<FooterColumn> = (props) => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Typography color="primary" fontSize="18px" fontWeight="500">
        {props.title}
      </Typography>
      <ul className="my-2 list-none p-0">
        {props.links.map((linkGroup, linkGroupIndex) => (
          <li key={`link-group-${linkGroupIndex}`} className="m-0 flex">
            {linkGroup.icon && (
              <Icon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={linkGroup.icon} alt={"title"} />
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
    </Stack>
  );
};

function MetaInformation() {
  return (
    <Grid
      container
      justifyContent="space-between"
      // alignItems={"center"}
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
      <div className="mb-4 mt-2 flex justify-between gap-2">
        {data.socialIcons.map((item, index) => (
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
        <Stack direction={{ sx: "column" }}>
          <Stack direction={"column"}>
            <Logo />
          </Stack>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column-reverse",
                md: "row",
                xl: "row",
              },
              gap: {
                xs: "25px",
                xl: "0",
              },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid
              container
              spacing={"32px"}
              sx={{
                width: {
                  xs: "100%",
                  lg: "40%",
                },
                justifyContent: {
                  xs: "flex-start",
                  xl: "center",
                },
              }}
            >
              {data.columns.map((value, index) => (
                <Grid item xs="auto" key={`footer-column-${index}`}>
                  <FooterColumn key={index} {...value} />
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                width: {
                  xs: "100%",
                  lg: "30%",
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
