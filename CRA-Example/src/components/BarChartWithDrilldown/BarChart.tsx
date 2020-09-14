import React, { useState } from "react";
import { BarChart, ColumnChart } from "@k2/rv-viz";
import { getURL } from "../../constants";
import { BubbleChart } from "@k2/d3-viz";
import { DrilldownWrapper } from "./BarChart.style";
import BackButton from "../BackButton/BackButton";

type ChartProps = {
  onClick: (event: any) => void;
  tooltipProps: any;
};
const Chart = ({ onClick, tooltipProps }: ChartProps) => {
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
      tooltip={tooltipProps}
    />
  );
};
type DrilldownProps = {
  data: { y: string };
  onBackClick: () => void;
  tooltipProps: any;
  onClick: (data: { data: any }) => void;
};
const Drilldown = ({ onBackClick, tooltipProps, onClick }: DrilldownProps) => {
  return (
    <DrilldownWrapper>
      <BackButton onClick={onBackClick} label="Top 4 Best Sellers" />
      <BubbleChart
        title="Revenue By Region"
        url={getURL("revenue")}
        legends={false}
        label={({ data, radius }) => (
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => {
              onClick({ data });
            }}
          >
            <strong>{Math.round(data.value * 10) / 10}%</strong>
            {radius > 30 && <div>{data.name}</div>}
          </label>
        )}
        onClick={onClick}
        tooltip={tooltipProps}
      />
    </DrilldownWrapper>
  );
};
type SecondDrilldownProps = {
  tooltipProps: any;
  data: { name: string };
  onBackClick: () => void;
};
const SecondDrilldown = ({
  tooltipProps,
  data,
  onBackClick,
}: SecondDrilldownProps) => {
  return (
    <DrilldownWrapper>
      <BackButton label="Revenue By Region" onClick={onBackClick} />

      <ColumnChart
        url={getURL("revenue-per-quarter")}
        title={`${data.name} Revenue per Quarter`}
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
          dark: ["#7bb844"],
          light: ["#7bb844"],
        }}
        label={({ data }) => <div>{data.y}%</div>}
        tooltip={tooltipProps}
      />
    </DrilldownWrapper>
  );
};
type Props = {
  tooltipProps: any;
};
const ChartWithDrilldown = ({ tooltipProps }: Props) => {
  const [drilldown, setDrilldown] = useState<any>(0);
  const [data, setData] = useState<any>();
  return (
    <>
      {drilldown === 1 && (
        <Drilldown
          data={data}
          onBackClick={() => setDrilldown(0)}
          tooltipProps={tooltipProps}
          onClick={({ data }: any) => {
            setDrilldown(2);
            setData(data);
          }}
        />
      )}
      {drilldown === 0 && (
        <Chart
          onClick={({ data }) => {
            setDrilldown(1);
            setData(data);
          }}
          tooltipProps={tooltipProps}
        />
      )}
      {drilldown === 2 && (
        <SecondDrilldown
          tooltipProps={tooltipProps}
          data={data}
          onBackClick={() => setDrilldown(1)}
        />
      )}
    </>
  );
};
export default ChartWithDrilldown;
