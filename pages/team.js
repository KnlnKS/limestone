import { Container, Box } from "@chakra-ui/react";
import Head from "next/head";

import TeamSection from "../src/components/TeamSection";

export default function Home() {
  const members = [
    {
      imgSrc: "/Emma.png",
      imgAlt: "Emma",
      name: "Emma Andison",
      role: "Chief Executive Officer",
      learnMoreURL: "https://www.linkedin.com/in/emma-andison-0b0b3b1b/",
      linkedInURL: "https://www.linkedin.com/in/emma-andison-0b0b3b1b/",
      emailURL: "mailto:emma@andison.com",
    },
    {
      imgSrc: "/Devin.png",
      imgAlt: "Devin",
      name: "Devin Meng",
      role: "Chief Investment Officer",
      learnMoreURL: "https://www.linkedin.com/in/emma-andison-0b0b3b1b/",
      linkedInURL: "https://www.linkedin.com/in/emma-andison-0b0b3b1b/",
      emailURL: "mailto:emma@andison.com",
    },
    {
      imgSrc: "/Arman.png",
      imgAlt: "Arman",
      name: "Arman Turna",
      role: "Chief Strategy Officer",
      learnMoreURL: "https://www.linkedin.com/in/emma-andison-0b0b3b1b/",
      linkedInURL: "https://www.linkedin.com/in/emma-andison-0b0b3b1b/",
      emailURL: "mailto:emma@andison.com",
    },
  ];
  return (
    <>
      <Head>
        <title>Limestone Capital - Team</title>
      </Head>
      <Container
        maxW={"100vw"}
        minHeight={"100vh"}
        height={"auto"}
        display={"flex"}
        flexDirection={"column"}
        backgroundColor={"#EAE0C7"}
      >
        <Box
          width={"100%"}
          px={"15vw"}
          alignItems={"center"}
        >
          <TeamSection title={"Executives"} members={members} />
          <TeamSection title={"Cash Yield"} members={members} />
          <TeamSection title={"TMT"} members={members} />
          <TeamSection title={"Consumers"} members={members} />
        </Box>
      </Container>
    </>
  );
}
