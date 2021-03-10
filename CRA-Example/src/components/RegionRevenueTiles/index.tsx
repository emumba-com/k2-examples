import { LoadingAnimation } from "@k2/ui";
import { fetchPageData } from "@k2/utils";
import { Col, Row } from "antd";
import * as React from "react";
import { kFormatter } from "../../utils";
import ColoredTile from "../ColoredTile";
import { RegionRevenueTilesDivStyled } from "./regionRevenueTiles.style";

export interface RegionRevenueTilesProps {
  data: Array<{ label: string; value: number; color: string }>;
}
const colors = ["#e89e5d", "#30b1d9", "#b177bb", "#5579ae"];
const RegionRevenueTiles: React.SFC<RegionRevenueTilesProps> = ({
  data = [],
}) => {
  return (
    <RegionRevenueTilesDivStyled>
      <Row>
        {data.map((d, i) => (
          <Col className="cell" xs={{ span: 24 }} md={{ span: 12 }}>
            <ColoredTile
              title={d.label}
              value={d.value}
              className="cellWrapper"
              count={kFormatter(900000 * (1 / d.value))}
              color={colors[i]}
            />
          </Col>
        ))}
      </Row>
      ,
    </RegionRevenueTilesDivStyled>
  );
};
export default fetchPageData({
  propsValidator: props => {
    return props.data || props.url || new Error("data or url does not exist");
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
})(RegionRevenueTiles);
