import { withEmotionCache } from "@emotion/react";
import {
  ThemeProvider,
  unstable_useEnhancedEffect as useEnhancedEffect,
} from "@mui/material";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { HeadersFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import * as React from "react";
import ClientStyleContext from "./context/ClientStyleContext";
import { default as Layout } from "./layouts/main/MainLayout";
import { theme } from "./lib/mui";
import Styles from "./tailwind.css?url";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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

const Document = withEmotionCache(
  ({ children, title }: DocumentProps, emotionCache) => {
    const clientStyleData = React.useContext(ClientStyleContext);

    // Only executed on client
    useEnhancedEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        emotionCache.sheet._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData.reset();
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
        </head>
        <body>
          <ThemeProvider theme={theme}>
            <Layout>{children}</Layout>
          </ThemeProvider>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    );
  },
);

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document title="Error!">
      <div>
        <h1>There was an error</h1>
        <p>{String(error)}</p>
        <hr />
        <p>
          Hey, developer, you should replace this with what you want your users
          to see.
        </p>
      </div>
      s
    </Document>
  );
}
