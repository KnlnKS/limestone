import React from "react";
import styles from "./TextSection.module.css";

import { Button, Box } from "@chakra-ui/react";
import Image from "next/image";

function LeftAlign({ title, text, imgSrc, imgAlt }) {
  return (
    <div className={styles.alignWrapper}>
      <div className={styles.format}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
        <Box display="flex" justifyContent="start">
          <Button colorScheme="orange" size="sm">
            Learn More
          </Button>
        </Box>
      </div>
      <div className={styles.image}>
        <Image src={imgSrc} alt={imgAlt} width={"1592px"} height={"720px"} />
      </div>
    </div>
  );
}

export default LeftAlign;
