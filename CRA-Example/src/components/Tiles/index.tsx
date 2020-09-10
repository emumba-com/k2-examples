import React from "react";
import { withTheme } from "styled-components";

import Tile from "../Tile";
import { getURL } from "../../constants";
import { TilesWrapper } from "../Tile/tile.style";

const Tiles: React.SFC = ({ theme }: any) => {
  const { mode } = theme;
  const isDarkMode = mode === "dark";
  return (
    <TilesWrapper>
      <Tile
        tileTitle="Total Sales"
        background={
          isDarkMode
            ? "linear-gradient(to left, #99c275 100%, #7db24c 0%, #7db24c 0%)"
            : "linear-gradient(to right, #7BB843 , #b3e585 40%)"
        }
        url={getURL("total-sales")}
      />
      <Tile
        tileTitle="Total Revenue Generated"
        background={
          isDarkMode
            ? "linear-gradient(to left, #89c3d5 99%, #2fa2c6)"
            : "linear-gradient(to right, #30b1d9 , #7ac9e1 40%)"
        }
        url={getURL("total-revenue")}
      />
      <Tile
        tileTitle="Social Media Engagement (Per Post)"
        background={
          isDarkMode
            ? "linear-gradient(to left, #99c275 100%, #7db24c 0%, #7db24c 0%)"
            : "linear-gradient(to right, #7BB843 , #b3e585 40%)"
        }
        url={getURL("social-media-engagement")}
      />
      <Tile
        tileTitle="Annual Orders"
        background={
          isDarkMode
            ? "linear-gradient(to left, #89c3d5 99%, #2fa2c6)"
            : "linear-gradient(to right, #30b1d9 , #7ac9e1 40%)"
        }
        url={getURL("annual-orders")}
      />
      <Tile
        tileTitle="Pending Orders"
        background={
          isDarkMode
            ? "linear-gradient(to left, #d18774 99%, #b7573f)"
            : "linear-gradient(to right, #e77356 , #f3957d 40%)"
        }
        url={getURL("pending-orders")}
      />
    </TilesWrapper>
  );
};

export default withTheme<any>(Tiles);
