import React from "react";
import Image from "next/image";

function LinkedIn({ width, height }) {
  return (
    <Image src="/icons/LinkedIn.svg" alt={"LinkedIn"} width={width} height={height} />
  );
}

export default LinkedIn;
