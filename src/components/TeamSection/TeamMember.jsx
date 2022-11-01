import React from "react";
import { Text, Box, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";

import { Ellipsis, LinkedIn, Email } from "../icons";

function TeamMember({
  imgSrc,
  imgAlt,
  name,
  role,
  learnMoreURL,
  linkedInURL,
  emailURL,
}) {
  return (
    <>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={325}
        height={348}
        layout={"responsive"}
      />
      <Box mt={2} w={"100%"} h={"0.5em"} bg="#f79646"></Box>
      <Text fontWeight={600} fontSize={"xl"}>
        {name}
      </Text>
      <Text as={"i"} fontSize={"xl"}>
        {role}
      </Text>
      <Flex mt={2}>
        <Button as="a" href={learnMoreURL} bg="#ed7d31" color="white" size="sm">
          Learn More
        </Button>
        {learnMoreURL && (linkedInURL || emailURL) && (
          <Ellipsis color="#984807" boxSize={8} dotSize={30} />
        )}
        <a href={linkedInURL}>
          <LinkedIn width={26} height={26} />
        </a>
        {linkedInURL && emailURL && (
          <Ellipsis color="#984807" boxSize={8} dotSize={30} />
        )}
        <a href={emailURL}>
          <Email width={30} height={30} />
        </a>
      </Flex>
    </>
  );
}

export default TeamMember;
