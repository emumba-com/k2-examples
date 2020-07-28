import React from "react";
import { Theme } from "@k2/utils";
import {
  ColumnChart,
  LineChart,
  PieChart,
  AreaChart,
  BarChart,
} from "@k2/rv-viz";
import { SankeyChart, BubbleChart } from "@k2/d3-viz";
import { GridLayout, Card } from "@k2/ui";

import Header from "../Header";
import Summary from "../Summary";
import HighChartBulletGraph from "../HighChartBulletGraph";
import RevenueTrendTiles from "../RevenueTrendTiles";
import CustomAreaChart from "../CustomAreaChart";
import Tiles from "../Tiles";
import StaticLegends from "../StaticLegend";
import { PieCenterLabel } from "../PieCenterLabel";
import { BaseStyle } from "../../App.style";
import { kFormatter, getMonthYearFromDate } from "../../utils";
import { getURL, monthTickValues, shortMonthNames } from "../../constants";
import { DashboardStyled, CardDividerDivStyled } from "./dashboard.style";
import { theme } from "../../theme";

const Dashboard: React.SFC = () => (
  <Theme.ThemeProvider theme={theme}>
    <>
      <Header />
      <Summary />
      <DashboardStyled className="has-theme-provider">
        <BaseStyle />
        <Tiles />
        <GridLayout isDraggable={false}>
          <CustomAreaChart />
          <Card>
            <PieChart
              url={getURL("top-regions")}
              title="Top Revenue By Region"
              colors={{
                dark: ["#e89e5d", "#30b1d9", "#b177bb", "#5579ae"],
                light: ["#e89e5d", "#30b1d9", "#b177bb", "#5579ae"],
              }}
              legends={false}
              centerLabel={PieCenterLabel}
              label={({ data: { label, value } }) => (
                <label style={{ fontSize: "13px", color: "#777777" }}>
                  {label}:<strong>{` ${value}%`}</strong>
                </label>
              )}
              radial={{ innerRadius: 0.75, anglePadding: 0.9 }}
            />
          </Card>
          <Card>
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
            />
          </Card>
          <Card>
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
                >
                  <strong>{Math.round(data.value * 10) / 10}%</strong>
                  {radius > 30 && <div>{data.name}</div>}
                </label>
              )}
            />
          </Card>
          <Card>
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
            />
          </Card>
          <Card>
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
                formatter: ({ data }) => {
                  return <div>{`${data.y}: ${data.x - (data.x0 || 0)}M`}</div>;
                },
              }}
            />
          </Card>
          <Card>
            <CardDividerDivStyled>
              <div className="section-1">
                <LineChart
                  url={getURL("trend-best-sellers")}
                  title="Revenue Trend By Best Sellers"
                  xyPlot={{
                    xType: "time",
                    yDomain: [0, 20000],
                    xDomain: [1546300800000, 1575158400000],
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
                    tickTotal: 12,
                    tickValues: monthTickValues,
                    tickFormat: (time: number) => {
                      const monthNames = shortMonthNames;
                      const date = new Date(time);
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
                    xFormatter: val => getMonthYearFromDate(new Date(val)),
                  }}
                />
              </div>
              <div className="section-2">
                <RevenueTrendTiles />
              </div>
            </CardDividerDivStyled>
          </Card>

          <Card>
            <HighChartBulletGraph />
          </Card>
          <Card>
            <SankeyChart
              title="Product Sales By Region"
              url={getURL("product-sales")}
              nodeProps={{
                width: 10,
                shape: "rect",
              }}
              linkProps={{
                mode: "default",
              }}
            />
          </Card>
          <Card>
            <PieChart
              url={getURL("best-sellers-revenue")}
              title="Best Sellers By Revenue"
              colors={{
                dark: ["#5579ae", "#7793be", "#99aece", "#dde4ef"],
                light: ["#5579ae", "#7793be", "#99aece", "#dde4ef"],
              }}
              radial={{ innerRadius: 0.75, anglePadding: 0.9 }}
              centerLabel={PieCenterLabel}
              legends={false}
              label={({ data: { label, value } }) => (
                <label style={{ fontSize: "13px", color: "#777777" }}>
                  {label}:<strong>{` ${value}%`}</strong>
                </label>
              )}
            />
          </Card>

          <Card>
            <BarChart
              url={getURL("brand-engagement")}
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
            />
          </Card>
          <Card>
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
            />
          </Card>
          <Card>
            <AreaChart
              url={getURL("sales-overview")}
              title="Sales Overview"
              xyPlot={{
                xType: "time",
                yDomain: [0, 20000],
                xDomain: [1546300800000, 1575158400000],
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
                tickTotal: 12,
                tickValues: monthTickValues,
                tickFormat: (time: number) => {
                  const monthNames = shortMonthNames;
                  const date = new Date(time);
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
                xFormatter: val => getMonthYearFromDate(new Date(val)),
              }}
            />
          </Card>
        </GridLayout>
      </DashboardStyled>
    </>
  </Theme.ThemeProvider>
);

export default Dashboard;