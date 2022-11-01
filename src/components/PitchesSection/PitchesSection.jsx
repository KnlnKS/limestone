import React from "react";
import { Text, Grid, GridItem } from "@chakra-ui/react";

import Pitch from "./Pitch";

function PitchesSection({ title, items }) {
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
        {items.map((member, index) => (
          <GridItem key={`${member.imgAlt}-${index}`}>
            <Pitch {...member} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export default PitchesSection;
