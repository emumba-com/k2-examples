import React from "react";
import { fetchPageData } from "@k2/utils";
import { LoadingAnimation } from "@k2/ui";

import { ArrowDown, ArrowUp } from "./svgs";
import { TileStyled } from "./tile.style";

interface TileProps {
  tileTitle: string;
  backgroundColor?: string;
  background?: string;
  boxShadow?: boolean;
  valueColor?: string;
  titleColor?: string;
  statusColor?: string;
  tile?: string;
  data: {
    value: number;
    status?: string;
    percentage?: string;
  };
}

const Tile = (props: TileProps) => {
  const {
    tileTitle,
    backgroundColor = "white",
    boxShadow = true,
    valueColor = "white",
    titleColor = "white",
    statusColor = "white",
    background,
    data: { value, percentage, status },
  } = props;
  const icon =
    status === "up" ? (
      <ArrowUp color={statusColor} />
    ) : (
      <ArrowDown color={statusColor} />
    );

  return (
    <TileStyled
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      valueColor={valueColor}
      titleColor={titleColor}
      statusColor={statusColor}
      background={background}
    >
      <div className="value-wrapper">
        <h2 className="value">{value}</h2>
        {status && (
          <span className="status">
            <span className="status-icon">{icon}</span>
            <h4 className="percent">{percentage}</h4>
          </span>
        )}
      </div>
      <div className="title">{tileTitle}</div>
    </TileStyled>
  );
};

export default fetchPageData({
  propsValidator: props => {
    return props.data || props.url || new Error("data or url is not exist");
  },
  blankStateValidator: data => !data || data.length === 0,
  dataValidator: data => {
    return true;
  },
  paged: false,
  defaultComponentStates: {
    blank: <div>loading</div>,
    loading: (
      <LoadingAnimation>
        {<div style={{ minHeight: "80px" }}>loading</div>}
      </LoadingAnimation>
    ),
  },
  // @ts-ignore
})(Tile);
