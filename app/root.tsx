import { ThemeProvider, Typography } from "@mui/material";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { HeadersFunction, LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import * as React from "react";
import { default as Layout } from "./layouts/main/MainLayout";
import { theme } from "./lib/mui";
import Styles from "./tailwind.css?url";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "./components/common/Button";
import Modal from "./components/common/Modal";
import { loadMapScript } from "./lib/ymaps";
interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: Styles },
];

export const headers: HeadersFunction = () => ({
  "X-Robots-Tag": "noindex",
});

const DocumentWithoutEmotion = ({ children, title }: DocumentProps) => {
  React.useEffect(() => {
    loadMapScript();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <meta
          name="emotion-insertion-point"
          content="emotion-insertion-point"
        />

        <script
          async
          src="https://api-maps.yandex.ru/v3/?apikey=9a70cddc-5c9f-4484-84ee-eaea17bf4622&lang=ru_RU"
        ></script>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Layout>
            {children}
            <Modal />
          </Layout>
        </ThemeProvider>
        <ScrollRestoration />

        <Scripts />
      </body>
    </html>
  );
};
export default function App() {
  return (
    <DocumentWithoutEmotion>
      <Outlet />
    </DocumentWithoutEmotion>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <DocumentWithoutEmotion title="Error!">
      <main className="grid h-[60vh] min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <Typography color="primary" variant="subtitle1">
            {isRouteErrorResponse(error) && error.status}
          </Typography>
          <Typography variant="h2" fontWeight={800}>
            {isRouteErrorResponse(error) && `${error.statusText}`}
          </Typography>
          <Typography fontSize={"20px"}>Что то пошло не так!</Typography>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              variant="contained"
              color="primary"
              LinkComponent={Link}
              href="/"
              sx={{
                borderRadius: "15px",
              }}
            >
              На главную
            </Button>
          </div>
        </div>
      </main>
    </DocumentWithoutEmotion>
  );
}
