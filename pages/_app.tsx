import "../styles/globals.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { jaJP } from "@mui/material/locale";

const theme = createTheme(
  {
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        h1, h2, p {
          margin: 1rem 0 0 0;
        }
        h1:first-child, h2:first-child, p:first-child {
          margin: 0;
        }
        h1 {
          font-size: 2rem;
        }
        h2 {
          font-size: 1.5rem;
        }
        p {
          font-size: 1rem;
        }
        iframe {
          aspect-ratio: 16 / 9;
          border: none;
          width: 100%;
        }
      `,
      },
    },
    typography: {
      fontFamily: [
        "Noto Sans JP",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      h1: {
        fontSize: "33px",
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
