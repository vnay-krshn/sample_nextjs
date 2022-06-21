import Head from "next/head";
import { Box, styled } from "@mui/system";
import theme from "../src/theme";
import styles from "../styles/Home.module.css";

const TitleStyle = styled(Box)({
  color: theme.palette.primary.orange,
  fontWeight: theme.typography.fontWeight.bold,
  fontSize: theme.typography.fontsize.large,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TitleStyle component="span">
          Welcome to Next.js! integrated with Material-UI!
        </TitleStyle>
        <p className={styles.description}>
          Get started by editing
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
