import Head from "next/head";

import Homebanner from "../src/components/Homebanner";
import TextSection from "../src/components/TextSection";

import homePageContent from "../src/data/homePageContent";

const Align = ({ content }) =>
  content.map(({ title, text, imgSrc, imgAlt }, index) => {
    const Align = TextSection[index % 2 === 0 ? "LeftAlign" : "RightAlign"];
    return <Align key={index} title={title} text={text} imgSrc={imgSrc} imgAlt={imgAlt} />;
  });

export default function Home() {
  return (
    <>
      <Head>
        <title>Limestone Capital</title>
      </Head>
      <Homebanner />
      <Align content={homePageContent} />
    </>
  );
}
