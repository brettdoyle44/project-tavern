import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Layout from '../components/Layout';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      // background: '#f4f9fd',
      core: '#ffffff',
      default: '#ffffff',
    },
    fonts: {
      sans: "'Nunito Sans', sans-serif",
      mono: "'Nunito Sans'",
    },
  },
});

const darkTheme = createTheme({
  type: 'dark',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
