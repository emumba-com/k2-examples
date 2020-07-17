import React from "react";

import Tile from "../Tile";
import { getURL } from "../../constants";
import { TilesWrapper } from "../Tile/tile.style";

const Tiles: React.SFC = () => {
  return (
    <TilesWrapper>
      <Tile
        tileTitle="Total Sales"
        valueBackground="linear-gradient(to right, #7BB843 , #b3e585 40%)"
        titleBackground="linear-gradient(to right,#7BB843 ,#b3e585)"
        url={getURL("total-sales")}
      />
      <Tile
        tileTitle="Total Revenue Generated"
        valueBackground="linear-gradient(to right, #30b1d9 , #7ac9e1 40%)"
        titleBackground="linear-gradient(to right,#30b1d9 ,#7ac9e1)"
        url={getURL("total-revenue")}
      />
      <Tile
        tileTitle="Social Media Engagement (Per Post)"
        valueBackground="linear-gradient(to right, #7BB843 , #b3e585 40%)"
        titleBackground="linear-gradient(to right,#7BB843 ,#b3e585)"
        url={getURL("social-media-engagement")}
      />
      <Tile
        tileTitle="Annual Orders"
        valueBackground="linear-gradient(to right, #30b1d9 , #7ac9e1 40%)"
        titleBackground="linear-gradient(to right,#30b1d9 ,#7ac9e1)"
        url={getURL("annual-orders")}
      />
      <Tile
        tileTitle="Pending Orders"
        valueBackground="linear-gradient(to right, #e77356 , #f3957d 40%)"
        titleBackground="linear-gradient(to right,#e77356 ,#f3957d)"
        url={getURL("pending-orders")}
      />
    </TilesWrapper>
  );
};

export default Tiles;
