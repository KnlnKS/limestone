import React from "react";
import { Text, Grid, GridItem, Center } from "@chakra-ui/react";

import TeamMember from "./TeamMember";

function TeamSection({ title, members }) {
  return (
    <>
      <Text
        align={"center"}
        fontSize="2.6vw"
        fontWeight={"bold"}
        mt={12}
        color={"#493c31"}
      >
        {title}
      </Text>

      <Grid templateColumns={"repeat(3, 1fr)"} gap={12} my={12}>
        {members.map((member, index) => (
          <GridItem key={`${member.imgAlt}-${index}`}>
            <TeamMember {...member} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export default TeamSection;
