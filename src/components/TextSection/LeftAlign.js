import React from "react";
import styles from "./TextSection.module.css";

import { Button, Box } from "@chakra-ui/react";
import Image from "next/image";

function LeftAlign({ title, text, imgSrc, imgAlt }) {
  console.log(imgSrc);
  return (
    <div className={styles.mainEntryLeft}>
      <div className={styles.mainEntryFormat}>
        <p className={styles.mainEntryTitleLeft}>{title}</p>
        <p className={styles.mainEntryTextLeft}>{text}</p>
        <Box display="flex" justifyContent="start">
          <Button colorScheme="orange" size="sm">
            Learn More
          </Button>
        </Box>
      </div>
      <div className={styles.mainEntryImageLeft}>
        <Image src={imgSrc} alt={imgAlt} width={"1592px"} height={"720px"} />
      </div>
    </div>
  );
}

export default LeftAlign;
