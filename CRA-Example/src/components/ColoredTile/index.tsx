import React from "react";
import { fetchPageData } from "@k2/utils";
import { LoadingAnimation } from "@k2/ui";
import { ColorTileStyled } from "./coloredTile.style";
import { convertHexToRGBA } from "../../utils";

interface TileProps {
  color: string;
  backgroundOpacity?: number;
  title: string;
  count: number | string;
  value: number | string;
  className?:string;
}

const ColouredTile = ({
  color,
  backgroundOpacity = 0.04,
  title,
  count,
  value,
  className
}: TileProps) => {
  return (
    <ColorTileStyled
      borderColor={color}
      className={className}
      backgroundColor={convertHexToRGBA(color, backgroundOpacity)}
    >
      <div className="title-wrapper">
        {title} ({value})%
      </div>
      <div className="count-wrapper">{count}</div>
    </ColorTileStyled>
  );
};

export default ColouredTile;
