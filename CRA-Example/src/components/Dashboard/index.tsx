import React from "react";
import {
  ColumnChart,
  LineChart,
  PieChart,
  AreaChart,
  BarChart,
} from "@k2/rv-viz";
import { SankeyChart } from "@k2/d3-viz";
import { Card, GridLayout } from "@k2/ui";

import Header from "../Header";
import HighChartBulletGraph from "../HighChartBulletGraph";
import RevenueTrendTiles from "../RevenueTrendTiles";
import CustomAreaChart from "../CustomAreaChart";
import Tiles from "../Tiles";
import StaticLegends from "../StaticLegend";
import { PopulationPieCenterLabel } from "../PieCenterLabel";
import { BaseStyle } from "../../App.style";
import {
  kFormatter,
  getMonthYearFromDate,
  applyQueryParams,
} from "../../utils";
import {
  getURL,
  monthTickValues,
  shortMonthNames,
  yearTickValues,
} from "../../constants";
import { DashboardStyled, CardDividerDivStyled } from "./dashboard.style";
import BarChartWithDrilldown from "../BarChartWithDrilldown";
import { withTheme } from "styled-components";
import BubbleChartWithDrilldown from "../BubbleChartWithDrilldown/BubbleChart";
import PieChartFilter from "../PieChartFilter";
import TitleWithInfo from "../TitleWithInfo";

import SynchronizedCharts from "../SynchronizedCharts";

const Dashboard: React.SFC<any> = ({ theme }) => {
  const { mode } = theme;
  const [period, setPeriod] = React.useState(1);
  const [region, setRegion] = React.useState(null);
  const tooltipProps: any = {
    type: mode === "light" ? "light-default" : "dark",
  };
  return (
    <>
      <Header onSelectChange={setPeriod} />
      <DashboardStyled className="has-theme-provider" id="dashboard">
        <BaseStyle />

        <Tiles />
        <PieChartFilter
          tooltipProps={tooltipProps}
          onBackClick={() => {
            setRegion(null);
          }}
          region={region}
          onPieChartClick={e => {
            !region && setRegion(e.data.label);
          }}
        />
        <GridLayout
          rowHeight={300}
          noOfCols={{ xl: 5, lg: 3, md: 2, sm: 1 }}
          breakpoints={{ xl: 1900, lg: 1200, md: 996, sm: 768 }}
          style={{ position: "relative" }}
        >
          <CustomAreaChart period={period} region={region} key="1" />

          <Card key="2">
            <BubbleChartWithDrilldown
              region={region}
              tooltipProps={tooltipProps}
            />
          </Card>
          <Card key="3">
            <BarChartWithDrilldown
              region={region}
              tooltipProps={tooltipProps}
            />
          </Card>

          <Card key="4">
            <ColumnChart
              url={getURL("brand-engagement-single")}
              title="Brand Engagement Overview"
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
          </Card>

          <Card key="5">
            <BarChart
              url={getURL("brand-following")}
              title="Brand Following"
              barWidth={0.3}
              verticalGridLines={false}
              horizontalGridLines={false}
              xyPlot={{
                xDomain: [0, 120],
                margin: { left: 70, right: 30, top: 30, bottom: 30 },
                stackBy: "x",
              }}
              xAxis={{
                tickSizeOuter: 6,
                tickSizeInner: 0,
                tickTotal: 120,
                tickValues: [0, 20, 40, 60, 80, 100, 120],
                style: {
                  strokeWidth: 0.5,
                },
                tickFormat: (value: any) => `${value}M`,
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
              tooltip={{
                ...tooltipProps,
                formatter: ({ data }) => {
                  return <div>{`${data.y}: ${data.x - (data.x0 || 0)}M`}</div>;
                },
              }}
            />
          </Card>

          <Card key="6">
            <CardDividerDivStyled>
              <div className="section-1">
                <LineChart
                  url={getURL(
                    applyQueryParams("trend-best-sellers", { period }),
                  )}
                  title="Revenue Trend By Best Sellers"
                  xyPlot={{
                    yDomain: [0, 20000],
                    margin: { top: 30, bottom: 50 },
                  }}
                  horizontalGridLines={{
                    tickValues: [0, 10000, 20000],
                  }}
                  verticalGridLines={false}
                  xAxis={{
                    tickSizeOuter: 6,
                    tickSizeInner: 0,
                    tickPadding: 20,
                    hideLine: true,
                    tickValues: period > 1 ? yearTickValues : monthTickValues,
                    tickFormat: (time: number) => {
                      if (period > 1) {
                        return time;
                      }
                      const date = new Date(time);
                      const monthNames = shortMonthNames;
                      return `${monthNames[date.getMonth()]}`;
                    },
                  }}
                  yAxis={{
                    hideLine: true,
                    tickSizeOuter: 6,
                    tickSizeInner: 0,
                    style: {
                      fontSize: "12px",
                    },
                    tickTotal: 3,
                    tickValues: [0, 10000, 20000],
                    tickFormat: (value: number) => {
                      return `${value / 1000}K`;
                    },
                  }}
                  classes={{ crosshair: "crosshair-root" }}
                  crosshair={{
                    yFormatter: val => kFormatter(val),
                    xFormatter: val =>
                      period > 1
                        ? val.toString()
                        : getMonthYearFromDate(new Date(val)),
                  }}
                />
              </div>
              <div className="section-2">
                <RevenueTrendTiles />
              </div>
            </CardDividerDivStyled>
          </Card>

          <Card key="7">
            <HighChartBulletGraph />
          </Card>

          <Card key="8">
            <SankeyChart
              title={
                region ? `${region} Product Sales` : "Product Sales By Region"
              }
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
          </Card>

          <Card key="9">
            <PieChart
              url="https://countries-274616.ew.r.appspot.com/"
              title={
                <TitleWithInfo
                  title="Region's Population (via GraphQL)"
                  infoText="Data for this chart is being fetched from a GraphQL server for demonstration purposes."
                />
              }
              graphQLOptions={{
                query: `
                    query {
                      Europe: Country(filter: {subregion_in: [{ name_contains: "Europe"}]}) {
                        ... CountryPopulation
                      }
                      Americas: Country(filter: {subregion_in: [{ name_contains: "America"}]}) {
                        ... CountryPopulation
                      }
                      Africa: Country(filter: {subregion_in: [{ name_contains: "Africa"}]}) {
                        ... CountryPopulation
                      }
                      Others: Country(filter: {subregion_not_in: [{ region_in: [{ name: "Europe"}, { name: "Americas"}, { name: "Africa"}]}]}) {
                        ... CountryPopulation
                      } 
                    }
                    
                    fragment CountryPopulation on Country {
                      name
                      population
                    }
                  `,
              }}
              mapData={({ data }) => {
                const parsedData: any = Object.keys(data).map(region => {
                  const population = data[region].reduce(
                    (a, b) => a + b.population,
                    0,
                  );
                  return { label: region, population };
                });
                const totalPopulation = parsedData.reduce(
                  (a, b) => a + b.population,
                  0,
                );
                parsedData.forEach(region => {
                  region.value = (
                    (region.population / totalPopulation) *
                    100
                  ).toFixed(1);
                });
                return parsedData;
              }}
              colors={{
                dark: ["#5579ae", "#7793be", "#99aece", "#dde4ef"],
                light: ["#5579ae", "#7793be", "#99aece", "#dde4ef"],
              }}
              radial={{ innerRadius: 0.75, anglePadding: 0.9 }}
              centerLabel={PopulationPieCenterLabel}
              legends={false}
              label={({ data: { label, value } }) => (
                <label style={{ fontSize: "13px", color: "#777777" }}>
                  {label}:<strong>{` ${value}%`}</strong>
                </label>
              )}
              tooltip={tooltipProps}
            />
          </Card>

          <Card key="10">
            <BarChart
              url={getURL(applyQueryParams("brand-engagement", { region }))}
              title="Brand Engagement"
              barWidth={0.4}
              xyPlot={{
                margin: { left: 70, right: 30, top: 30, bottom: 30 },
                xDomain: [0, 100],
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
              horizontalGridLines={false}
              verticalGridLines={false}
              colors={{
                dark: ["#b177bb", "#30b1d9", "#e89e5d"],
                light: ["#b177bb", "#30b1d9", "#e89e5d"],
              }}
              tooltip={tooltipProps}
            />
          </Card>

          <Card key="11">
            <SynchronizedCharts />
          </Card>
          <Card key="13">
            <AreaChart
              url={getURL(applyQueryParams("sales-overview", { period }))}
              title="Sales Overview"
              xyPlot={{
                yDomain: [0, 20000],
                margin: { top: 30, bottom: 30 },
              }}
              yAxis={{
                hideLine: true,
                tickSizeOuter: 6,
                tickSizeInner: 0,
                style: {
                  fontSize: "12px",
                },
                tickTotal: 3,
                tickValues: [0, 10000, 20000],
                tickFormat: (value: number) => {
                  return `${value / 1000}K`;
                },
              }}
              horizontalGridLines={{ tickValues: [0, 10000, 20000] }}
              verticalGridLines={false}
              xAxis={{
                hideLine: true,
                tickSizeOuter: 6,
                tickSizeInner: 0,
                tickValues: period > 1 ? yearTickValues : monthTickValues,
                tickFormat: (time: number) => {
                  if (period > 1) {
                    return time;
                  }
                  const date = new Date(time);
                  const monthNames = shortMonthNames;
                  return `${monthNames[date.getMonth()]}`;
                },
              }}
              zone={{
                id: "MyZone",
                axis: "x",
                domain: [1546300800000, 1575158400000],
                legendComponent: StaticLegends(),
                range: [
                  {
                    color: {
                      name: "zone1",
                      startingColor: "#e7352b",
                      endingColor: "#ffffff",
                    },
                    end: 1556668800000,
                  },
                  {
                    color: {
                      name: "zone2",
                      startingColor: "#5579ae",
                      endingColor: "#ffffff",
                    },
                    end: 1572566400000,
                  },
                  {
                    color: {
                      name: "zone3",
                      startingColor: "#e7352b",
                      endingColor: "#ffffff",
                    },
                    end: 1575158400000,
                  },
                ],
              }}
              classes={{ crosshair: "crosshair-root" }}
              crosshair={{
                yFormatter: val => kFormatter(val),
                xFormatter: val =>
                  period > 1
                    ? val.toString()
                    : getMonthYearFromDate(new Date(val)),
              }}
            />
          </Card>

          <Card key="14">
            <ColumnChart
              url={getURL("brand-engagement-grouped")}
              title="Brand Engagement"
              barWidth={0.15}
              xyPlot={{
                yDomain: [0, 20000],
                margin: { top: 30, bottom: 30 },
              }}
              xAxis={{
                tickSizeOuter: 6,
                tickSizeInner: 0,
                style: {
                  strokeWidth: 0.5,
                },
              }}
              horizontalGridLines={{
                height: 10,
                tickValues: [0, 10000, 20000],
                innerHeight: 0.5,
                style: {
                  strokeWidth: 0.5,
                },
              }}
              verticalGridLines={false}
              yAxis={{
                hideLine: true,
                tickTotal: 3,
                tickSizeOuter: 6,
                tickSizeInner: 0,
                tickValues: [0, 10000, 20000],
                tickFormat: (value: number) => {
                  return `${value / 1000}K`;
                },
              }}
              colors={{
                dark: ["#5579ae", "#30b1d9"],
                light: ["#5579ae", "#30b1d9"],
              }}
              tooltip={tooltipProps}
            />
          </Card>
        </GridLayout>
      </DashboardStyled>
    </>
  );
};

export default withTheme<any>(Dashboard);
