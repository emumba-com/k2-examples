import React, { useState, useEffect } from "react";
import { getURL } from "../../constants";

import { BubbleChart, SankeyChart } from "@k2/d3-viz";
import { ModalWrapper, ChartWrapper } from "./BubbleChart.style";

type ChartProps = {
  tooltipProps: any;
  onClick: (event: { data: any }) => void;
};

const Chart = ({ tooltipProps, onClick }: ChartProps) => {
  return (
    <ChartWrapper style={{ width: "100%", height: "100%" }}>
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
              cursor: "pointer",
              justifyContent: "center",
              width: "100%",
              height: "100%",
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
    </ChartWrapper>
  );
};
type DrilldownProps = {
  tooltipProps: any;
  onBackClick: () => void;
};
const Drilldown = ({ tooltipProps, onBackClick }: DrilldownProps) => {
  const [height, setHeight] = useState("");
  useEffect(() => {
    setTimeout(() => setHeight("65vh"), 500);
  }, []);
  return (
    <ModalWrapper
      visible
      title="Product Sales By Region"
      destroyOnClose
      onCancel={onBackClick}
      footer={null}
      centered
      width="70vw"
      bodyStyle={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height,
          maxHeight: height,
        }}
        className="modal-chart-wrapper"
      >
        <SankeyChart
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
      </div>
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
