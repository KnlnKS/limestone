import React from "react";
import styles from "./TextSection.module.css";

import { Button, Box } from "@chakra-ui/react";
import Image from "next/image";

function RightAlign({ title, text, imgSrc, imgAlt }) {
  return (
    <div className={styles.mainEntryRight}>
      <div className={styles.mainEntryImageRight}>
        <Image src={imgSrc} alt={imgAlt} width={"1592px"} height={"720px"} />
      </div>
      <div className={styles.mainEntryFormat}>
        <p className={styles.mainEntryTitleRight}>{title}</p>
        <p className={styles.mainEntryTextRight}>{text}</p>
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
