import React from "react";
import { ThemeContext } from "styled-components";

import ContentHeader from "../ContentHeader";
import { TilesWrapper } from "../Tile/tile.style";
import Tile from "../Tile";
import { getURL } from "../../constants";
const RevenueTrendTiles: React.SFC = () => {
  const {
    mode,
    backgroundColors: { card: cardBackgroundColor },
    textColors: { heading: headingColor, success: successColor },
  } = React.useContext(ThemeContext);
  const valueColor = mode === "dark" ? headingColor : "black";
  return (
    <>
      <ContentHeader style={{ marginBottom: "0" }}>Total Revenue</ContentHeader>
      <TilesWrapper columns={3}>
        <Tile
          tileTitle="Blazer Total Revenue"
          statusColor={successColor}
          valueColor={valueColor}
          titleColor={headingColor}
          boxShadow={false}
          backgroundColor={cardBackgroundColor}
          url={getURL("blazer-revenue")}
        />
        <Tile
          tileTitle="Air Max Total Revenue"
          statusColor={successColor}
          valueColor={valueColor}
          titleColor={headingColor}
          boxShadow={false}
          backgroundColor={cardBackgroundColor}
          url={getURL("airmax-revenue")}
        />
        <Tile
          tileTitle="Jordan Total Revenue"
          statusColor={successColor}
          valueColor={valueColor}
          titleColor={headingColor}
          boxShadow={false}
          backgroundColor={cardBackgroundColor}
          url={getURL("jordan-revenue")}
        />
      </TilesWrapper>
    </>
  );
};

export default RevenueTrendTiles;
