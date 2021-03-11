import React from "react";
import { ColumnChart } from "@k2/rv-viz";
import { Icon } from "antd";

import { CardStyled } from "./switchChartView.style";
import { getURL } from "../../constants";
import BrandEngagementTiles from "../BrandEngagementTiles";

type SwitchViewChartProps = {
  tooltipProps: any;
};

const BrandEngagementSwitchView: React.SFC<SwitchViewChartProps> = ({
  tooltipProps,
}) => {
  const [viewSwitched, setViewSwitched] = React.useState(false);
  const switchView = () => {
    setViewSwitched(!viewSwitched);
  };
  return (
    <CardStyled
      classes={{
        title: "card-title",
        actions: "card-actions",
        body: "card-body",
      }}
      title="Brand Engagement Overview"
      actions={<Icon type="swap" onClick={switchView} />}
    >
      {!viewSwitched ? (
        <ColumnChart
          url={getURL("brand-engagement-single")}
          barWidth={0.15}
          xyPlot={{
            margin: { left: 25, top: 30, bottom: 30 },
            yDomain: [0, 35],
            stackBy: "y",
          }}
          legends={false}
          verticalGridLines={false}
          horizontalGridLines={false}
          xAxis={{
            tickSizeOuter: 6,
            tickSizeInner: 0,
            style: {
              strokeWidth: 0.5,
            },
          }}
          yAxis={false}
          colors={{
            dark: ["#7bb844", "#7bb844", "#7bb844", "#7bb844", "#7bb844"],
            light: ["#7bb844", "#7bb844", "#7bb844", "#7bb844", "#7bb844"],
          }}
          label={({ data }) => <div>{data.y}%</div>}
          tooltip={tooltipProps}
        />
      ) : (
        <BrandEngagementTiles url={getURL("brand-engagement-overview")} />
      )}
    </CardStyled>
  );
};

export default BrandEngagementSwitchView;
