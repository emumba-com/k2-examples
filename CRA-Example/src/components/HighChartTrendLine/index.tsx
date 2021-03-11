import React from "react";
import Highcharts from "highcharts/highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExport from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";

import { ThemeContext } from "styled-components";
import { CardStyled } from "./highChartTrendLine.style";
import { Menu, Dropdown, Icon } from "antd";

HighchartsExport(Highcharts);
HighchartsExportData(Highcharts);

const HighChartTrendLine: React.SFC = () => {
  React.useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  });
  const chartRef = React.useRef(null);
  const {
    backgroundColors: { card: cardBackgroundColor },
  } = React.useContext(ThemeContext);
  const getUpdatedOptions = (options, newOptions) => ({
    ...options,
    chart: {
      ...options.chart,
      ...newOptions,
    },
  });
  function handleMenuClick({ key }) {
    if (key === "png") {
      chartRef.current.chart.exportChart();
      return;
    }
    chartRef.current.chart.downloadCSV();
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="png">Export as PNG Image</Menu.Item>
      <Menu.Item key="csv">Export Data as CSV</Menu.Item>
    </Menu>
  );
  return (
    <CardStyled
      classes={{
        title: "card-title",
        actions: "card-actions",
        body: "card-body",
      }}
      title="Sales Overview"
      actions={
        <Dropdown overlay={menu}>
          <Icon style={{ cursor: "pointer" }} type="download" />
        </Dropdown>
      }
    >
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={getUpdatedOptions(
          {
            chart: {
              height: 235,
              marginLeft: 80,
              marginRight: 50,
              marginTop: 20,
            },
            xAxis: {
              title: {
                text: "Year",
              },
              categories: [2016, 2017, 2018, 2019, 2020],
            },
            plotOptions: {
              scatter: {
                color: "#5579ae",
              },
            },
            yAxis: {
              title: {
                text: "Sales",
              },
            },
            title: {
              text: null,
            },
            legend: { enabled: false },
            tooltip: {
              formatter: function() {
                return `<b> Year ${this.x} </b><br/> Sales:${this.y}`;
              },
            },
            series: [
              {
                type: "line",
                name: "Trend Line",
                data: [
                  [0, 62000],
                  [4, 128000],
                ],
                color: "#30b1d9",
                states: {
                  hover: {
                    lineWidth: 0,
                  },
                },
                enableMouseTracking: false,
              },
              {
                type: "scatter",
                name: "Sales",
                data: [70000, 90000, 100000, 110000, 120000],
                marker: {
                  radius: 4,
                },
              },
            ],
            navigation: {
              buttonOptions: {
                enabled: false,
              },
            },
            credits: {
              enabled: false,
            },
          },
          {
            backgroundColor: cardBackgroundColor,
          },
        )}
      />
    </CardStyled>
  );
};

export default HighChartTrendLine;
