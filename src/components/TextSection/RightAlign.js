import React from "react";
import styles from "./TextSection.module.css";

import { Button, Box } from "@chakra-ui/react";
import Image from "next/image";

function RightAlign({ title, text, imgSrc, imgAlt }) {
  return (
    <div className={`${styles.alignWrapper} ${styles.bgRight}`}>
      <div className={`${styles.image} ${styles.imageAlignRight}`}>
        <Image src={imgSrc} alt={imgAlt} width={"1592px"} height={"720px"} />
      </div>
      <div className={styles.format}>
        <p className={`${styles.title} ${styles.textAlignRight}`}>{title}</p>
        <p className={`${styles.text} ${styles.textAlignRight}`}>{text}</p>
        <Box display="flex" justifyContent="end">
          <Button colorScheme="orange" size="sm">
            Learn More
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default RightAlign;
