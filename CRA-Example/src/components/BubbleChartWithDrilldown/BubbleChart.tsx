import React, { useState } from "react";
import { getURL } from "../../constants";
import { BubbleChart, SankeyChart } from "@k2/d3-viz";
import { ModalWrapper } from "./BubbleChart.style";

type ChartProps = {
  tooltipProps: any;
  onClick: (event: { data: any }) => void;
};

const Chart = ({ tooltipProps, onClick }: ChartProps) => {
  return (
    <BubbleChart
      title="Top Revenue By Region"
      url={getURL("top-revenue")}
      legends={false}
      label={({ data, radius }) => (
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={() => onClick({ data })}
        >
          <strong>{Math.round(data.value * 10) / 10}%</strong>
          {radius > 30 && <div>{data.name}</div>}
        </label>
      )}
      tooltip={tooltipProps}
      onClick={onClick}
    />
  );
};
type DrilldownProps = {
  tooltipProps: any;
  onBackClick: () => void;
};
const Drilldown = ({ tooltipProps, onBackClick }: DrilldownProps) => {
  return (
    <ModalWrapper
      visible
      title="Product Sales By Region"
      destroyOnClose
      onCancel={onBackClick}
      footer={null}
    >
      <SankeyChart
        height={400}
        width={400}
        url={getURL("product-sales")}
        nodeProps={{
          width: 10,
          shape: "rect",
        }}
        linkProps={{
          mode: "default",
        }}
        tooltip={tooltipProps}
      />
    </ModalWrapper>
  );
};
type Props = {
  tooltipProps: any;
};
const BubbleChartWithDrilldown = ({ tooltipProps }: Props) => {
  const [drilldown, setDrilldown] = useState(undefined);
  return (
    <>
      <Chart
        tooltipProps={tooltipProps}
        onClick={({ data }) => {
          setDrilldown(data);
        }}
      />
      {drilldown && (
        <Drilldown
          tooltipProps={tooltipProps}
          onBackClick={() => setDrilldown(undefined)}
        />
      )}
    </>
  );
};

export default BubbleChartWithDrilldown;
