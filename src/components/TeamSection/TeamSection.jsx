import React from "react";
import { Text, Grid, GridItem, Center } from "@chakra-ui/react";

import TeamMember from "./TeamMember";

function TeamSection({ title, members }) {
  const data = [
    {
      imgSrc: "/Emma.png",
      imgAlt: "Emma",
      name: "Emma Andison",
      role: "Chief Executive Officer",
      learnMoreURL: "https://www.linkedin.com/in/emma-andison-0b0b3b1b/",
      linkedInURL: "https://www.linkedin.com/in/emma-andison-0b0b3b1b/",
      emailURL: "mailto:emma@andison.com",
    },
  ];
  return (
    <>
      <Text align={"center"} fontSize={"4xl"} mt={12}>
        {title}
      </Text>
      <Center>
        <Grid templateColumns={"repeat(3, 1fr)"} gap={12} my={12}>
          {data.map((member, index) => (
            <GridItem key={`${member.imgAlt}-${index}`}>
              <TeamMember {...member} />
            </GridItem>
          ))}
        </Grid>
      </Center>
    </>
  );
}

export default TeamSection;
