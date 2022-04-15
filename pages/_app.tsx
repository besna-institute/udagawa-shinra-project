import "../styles/globals.css";
import Layout from "../components/Layout";
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
      h1: {
        fontSize: "2rem",
      },
      h2: {
        fontSize: "1.5rem",
      },
    },
  },
  jaJP
);

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
