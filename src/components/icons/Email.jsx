import React from "react";
import Image from "next/image";

function Email({ width, height }) {
  return (
    <Image src="/icons/Mail.svg" alt={"Email"} width={width} height={height} />
  );
}

export default Email;
