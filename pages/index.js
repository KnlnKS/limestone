import Head from "next/head";

import Homebanner from "../src/components/Homebanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Limestone Capital</title>
      </Head>
      <Homebanner />
    </>
  );
}
