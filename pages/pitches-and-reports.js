import { Container, Box } from "@chakra-ui/react";
import Head from "next/head";

import PitchesSection from "../src/components/PitchesSection";

export default function Home() {
  const items = [
    {
      imgSrc: "/demo/cy1.png",
      imgAlt: "Emma",
    },
    {
      imgSrc: "/demo/cy2.png",
      imgAlt: "Devin",
    },
    {
      imgSrc: "/demo/cy3.png",
      imgAlt: "Arman",
    },
  ];
  return (
    <>
      <Head>
        <title>Limestone Capital - Pitches & Reports</title>
      </Head>
      <Container
        maxW={"100vw"}
        minHeight={"100vh"}
        height={"auto"}
        display={"flex"}
        flexDirection={"column"}
        backgroundColor={"#EAE0C7"}
      >
        <Box width={"100%"} px={"15vw"} alignItems={"center"}>
          <PitchesSection title={"Cash Yield"} items={items} />
          <PitchesSection title={"Consumers"} items={items} />
          <PitchesSection title={"TMT"} items={items} />
        </Box>
      </Container>
    </>
  );
}
