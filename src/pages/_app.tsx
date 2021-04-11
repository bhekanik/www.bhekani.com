import { AppProps } from "next/app";
import { AppLayout } from "../layout/AppLayout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

export default MyApp;
