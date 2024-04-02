import instagram from "~/assets/icons/instagram.svg";
import tiktok from "~/assets/icons/tiktok.svg";
import whatsapp from "~/assets/icons/whatsapp.svg";
import youtube from "~/assets/icons/youtube.svg";

import location from "~/assets/icons/location.png";
import mail from "~/assets/icons/mail.png";
import phone from "~/assets/icons/phone.svg";
import { FooterColumn, SocialIcons } from "./layouts/main/Footer";

interface footerI {
  columns: FooterColumn[];
  socialIcons: SocialIcons[];
}
export const footer: footerI = {
  columns: [
    {
      title: "КОНТАКТЫ",
      links: [
        {
          icon: phone,
          link: [
            { label: "+7 (771) 741-18-22", href: "tel:+77717411822" },
            { label: "+7 (771) 741-18-44", href: "tel:+77717411844" },
          ],
        },
      ],
    },
    {
      title: "",
      links: [
        {
          icon: mail,
          link: {
            label: "sales@abbex.kz",
            href: "mailto:sales@abbex.kz",
          },
        },
        {
          icon: location,
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
  ],
  // Данные для иконок социальных сетей
  socialIcons: [
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
  ],
};
