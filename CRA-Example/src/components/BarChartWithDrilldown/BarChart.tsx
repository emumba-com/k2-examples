import React, { useState } from "react";
import { BarChart } from "@k2/rv-viz";
import { getURL } from "../../constants";
import { BubbleChart } from "@k2/d3-viz";
import { DrilldownWrapper } from "./BarChart.style";
type Props = {
  onClick: (event: any) => void;
};
const Chart = ({ onClick }: Props) => {
  return (
    <BarChart
      url={getURL("best-sellers")}
      title="Top 4 Best Sellers"
      barWidth={0.5}
      legends={false}
      verticalGridLines={false}
      horizontalGridLines={false}
      xyPlot={{
        xDomain: [0, 100],
        margin: { left: 70, right: 30, top: 30, bottom: 30 },
      }}
      xAxis={{
        tickSizeOuter: 6,
        tickSizeInner: 0,
        tickTotal: 100,
        tickValues: [0, 20, 40, 60, 80, 100],
        style: {
          strokeWidth: 0.5,
        },
        tickFormat: (value: any) => `${value}%`,
      }}
      yAxis={{
        tickSize: 0,
        hideLine: true,
        style: { strokeWidth: 0.6, fontSize: "13px" },
      }}
      colors={{
        dark: ["#5579ae", "#5579ae", "#5579ae", "#5579ae", "#5579ae"],
        light: ["#5579ae", "#5579ae", "#5579ae", "#5579ae", "#5579ae"],
      }}
      label={({ data }) => <div>{data.x}%</div>}
      onClick={onClick}
    />
  );
};
type DrilldownProps = {
  data: { y: string };
  onBackClick: () => void;
};
const Drilldown = ({ data, onBackClick }: DrilldownProps) => {
  return (
    <DrilldownWrapper>
      <div className="back-button" onClick={onBackClick}>
        Back
      </div>
      <BubbleChart
        title={`${data.y} Revenue By Region`}
        url={getURL("revenue")}
        legends={false}
        label={({ data, radius }) => (
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <strong>{Math.round(data.value * 10) / 10}%</strong>
            {radius > 30 && <div>{data.name}</div>}
          </label>
        )}
      />
    </DrilldownWrapper>
  );
};
const ChartWithDrilldown = () => {
  const [drilldown, setDrilldown] = useState<any>(false);
  return drilldown ? (
    <Drilldown data={drilldown} onBackClick={() => setDrilldown(false)} />
  ) : (
    <Chart onClick={({ data }) => setDrilldown(data)} />
  );
};
export default ChartWithDrilldown;
