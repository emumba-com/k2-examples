import React, { useState, useEffect } from "react";
import { getURL } from "../../constants";

import { BubbleChart, SankeyChart } from "@k2/d3-viz";
import { ModalWrapper, ChartWrapper } from "./BubbleChart.style";
import { applyQueryParams } from "../../utils";

type ChartProps = {
  tooltipProps: any;
  onClick: (event: { data: any }) => void;
  region?: string;
};

const Chart = ({ tooltipProps, onClick, region }: ChartProps) => {
  return (
    <ChartWrapper style={{ width: "100%", height: "100%" }}>
      <BubbleChart
        title="Top Revenue By Region"
        url={getURL(applyQueryParams("top-revenue", { region }))}
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
  region?: string;
  onBackClick: () => void;
};
const Drilldown = ({ tooltipProps, region, onBackClick }: DrilldownProps) => {
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
          url={getURL(applyQueryParams("product-sales", { region }))}
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
  region?: string;
};
const BubbleChartWithDrilldown = ({ tooltipProps, region }: Props) => {
  const [drilldown, setDrilldown] = useState(undefined);
  return (
    <>
      <Chart
        tooltipProps={tooltipProps}
        onClick={({ data }) => {
          setDrilldown(data);
        }}
        region={region}
      />
      {drilldown && (
        <Drilldown
          tooltipProps={tooltipProps}
          onBackClick={() => setDrilldown(undefined)}
          region={region}
        />
      )}
    </>
  );
};

export default BubbleChartWithDrilldown;
