import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";
import { Layout } from "../components/Layout";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { jaJP } from "@mui/material/locale";

const theme = createTheme(
  {
    typography: {
      fontFamily: [
        "Noto Sans JP",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
    },
  },
  jaJP
);
theme.components = {
  ...theme.components,
  MuiCssBaseline: {
    styleOverrides: {
      h1: {
        ...theme.typography.h4,
      },
      h2: {
        ...theme.typography.h5,
      },
      h3: {
        ...theme.typography.h6,
      },
      h4: {
        ...theme.typography.h6,
      },
      h5: {
        ...theme.typography.h6,
      },
      h6: {
        ...theme.typography.h6,
      },
      p: {
        ...theme.typography.body1,
      },
    },
  },
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
