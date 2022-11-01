import Head from "next/head";

import TeamSection from "../src/components/TeamSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Limestone Capital - Team</title>
      </Head>
      <TeamSection title={"Executives"} />
    </>
  );
}
