import React from "react";
import { Icon } from "@chakra-ui/react";

function Ellipsis({ color, boxSize, dotSize }) {
  return (
    <Icon viewBox="0 0 200 200" boxSize={boxSize}>
      <path
        fill={color}
        d={`M 100, 100 m -${dotSize}, 0 a ${dotSize},${dotSize} 0 1,0 ${
          dotSize * 2
        },0 a ${dotSize},${dotSize} 0 1,0 -${dotSize * 2},0`}
      />
    </Icon>
  );
}

export default Ellipsis;
