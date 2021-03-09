import { PieChart } from "@k2/rv-viz";
import { Card } from "@k2/ui";
import { Col, Row } from "antd";
import React, { useState } from "react";
import { getURL } from "../../constants";
import { applyQueryParams } from "../../utils";
import BackButton from "../BackButton/BackButton";
import { PieCenterLabel } from "../PieCenterLabel";
import RegionRevenueTiles from "../RegionRevenueTiles";
import { PieChartDrilldownWrapperStyled, PieChartFilteredDivStyled } from "./pieChartFilter.style";

type ChartProps = {
  onBackClick: () => void;
  tooltipProps: any;
  region?: string;
  onPieChartClick: (data: { data: any }) => void;
};
const PieChartFilter = ({
  tooltipProps,
  region,
  onBackClick,
  onPieChartClick: onClick,
}: ChartProps) => {
  return (
    <PieChartFilteredDivStyled>
      <Card>
        <Row>
          <Col xs={{ span: 24 }} md={{ span: 12 }} style={{ height: "300px" }}>
            <PieChartDrilldownWrapperStyled>
              {region && (
                <BackButton
                  label="Top Revenue By Region"
                  onClick={onBackClick}
                />
              )}
              <PieChart
                url={getURL(applyQueryParams("top-regions", { region }))}
                title={
                  region ? `${region} Top Revenue` : "Top Revenue By Region"
                }
                classes={{
                  xyplot: "pieXYPlot",
                }}
                colors={{
                  dark: ["#e89e5d", "#30b1d9", "#b177bb", "#5579ae"],
                  light: ["#e89e5d", "#30b1d9", "#b177bb", "#5579ae"],
                }}
                legends={false}
                centerLabel={() => <PieCenterLabel />}
                label={({ data: { label, value } }) => (
                  <label style={{ fontSize: "13px", color: "#777777" }}>
                    {label}:<strong>{` ${value}%`}</strong>
                  </label>
                )}
                radial={{ innerRadius: 0.75, anglePadding: 0.9 }}
                tooltip={tooltipProps}
                onClick={onClick}
              />
            </PieChartDrilldownWrapperStyled>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} className="tiles-container">
            <RegionRevenueTiles
              url={getURL(applyQueryParams("top-regions", { region }))}
            />
          </Col>
        </Row>
      </Card>
    </PieChartFilteredDivStyled>
  );
};

export default PieChartFilter;
