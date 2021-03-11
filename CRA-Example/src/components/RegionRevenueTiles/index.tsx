import { fetchPageData, LoadingIcon } from "@k2/utils";
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
          <Col
            key={`region-revenue-${i}`}
            className="cell"
            xs={{ span: 24 }}
            md={{ span: 12 }}
          >
            <ColoredTile
              title={d.label}
              value={d.value}
              className="cellWrapper"
              count={kFormatter(900000 * (d.value / 100))}
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
    blank: <div></div>,
    loading: <LoadingIcon size={40} />,
  },
})(RegionRevenueTiles);
