import React from "react";
import { Text, Box, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";

import { Ellipsis, LinkedIn, Email } from "../icons";

function Pitch({
  imgSrc,
  imgAlt,
}) {
  return (
    <>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={390}
        height={270}
        layout={"responsive"}
      />
    </>
  );
}

export default Pitch;
