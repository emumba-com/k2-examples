import { PieChart } from "@k2/rv-viz";
import { Card } from "@k2/ui";
import { Col, Row } from "antd";
import React from "react";
import { getURL } from "../../constants";
import { applyQueryParams } from "../../utils";
import BackButton from "../BackButton/BackButton";
import { PieCenterLabel } from "../PieCenterLabel";
import RegionRevenueTiles from "../RegionRevenueTiles";
import TitleWithInfo from "../TitleWithInfo";
import {
  PieChartDrilldownWrapperStyled,
  PieChartFilteredDivStyled,
} from "./pieChartFilter.style";

type PieChartFilterProps = {
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
}: PieChartFilterProps) => {
  let totalRevenue=900000;
  let regionRevenue=0;
  const ref = React.useRef(null);
  let regionsData=null;
  if (ref.current) {
    regionsData = ref.current.data;
  }
  if(region&&regionsData){
    const selectedRegion=regionsData.find(r=>r.label===region);
    if(selectedRegion){
      const regionPercentage=selectedRegion.value||1;
      regionRevenue=(totalRevenue * (regionPercentage / 100))
    }
  }
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
                ref={ref}
                title={
                  <TitleWithInfo
                    title={
                      region ? `${region} Top Revenue` : "Top Revenue By Region"
                    }
                    infoText="Click on a slice to set the region filter to the Dashboard"
                  />
                }
                classes={{
                  xyplot: "pieXYPlot",
                }}
                colors={{
                  dark: ["#e89e5d", "#30b1d9", "#b177bb", "#5579ae"],
                  light: ["#e89e5d", "#30b1d9", "#b177bb", "#5579ae"],
                }}
                legends={false}
                centerLabel={() => <PieCenterLabel value={regionRevenue||totalRevenue}  />}
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
