import React from "react";
import Highcharts from "highcharts/highcharts";
import HighchartsReact from "highcharts-react-official";

import ContentHeader from "../ContentHeader";
import { ThemeContext } from "styled-components";

const HighChartTrendLine: React.SFC = () => {
  React.useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  });
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
  return (
    <>
      <ContentHeader>Yearly Sales With Trend Line</ContentHeader>
      <HighchartsReact
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
            plotOptions:{
              scatter:{
                color:'#5579ae'
              }
            },
            yAxis: {
              title: {
                text: "Sales",
              },
            },
            title: {
              text: null,
            },
            legend:{ enabled:false },
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
                color:'#30b1d9',
                states: {
                  hover: {
                    lineWidth: 0,
                  },
                },
                enableMouseTracking: false,
              },
              {
                type: "scatter",
                name: "Year",
                data: [70000, 90000, 100000, 110000, 120000],
                marker: {
                  radius: 4,
                },
              },
            ],
          },
          {
            backgroundColor: cardBackgroundColor,
          },
        )}
      />
    </>
  );
};

export default HighChartTrendLine;
