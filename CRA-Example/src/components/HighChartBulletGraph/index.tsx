import React from "react";
import Highcharts from "highcharts/highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsBullet from "highcharts/modules/bullet";

import ContentHeader from "../ContentHeader";
import { ThemeContext } from "styled-components";
HighchartsBullet(Highcharts);
Highcharts.setOptions({
  chart: {
    inverted: true,
    marginLeft: 80,
    marginRight: 50,
    type: "bullet",
    backgroundColor: "red",
  },
  title: {
    text: null,
  },
  legend: {
    enabled: false,
  },
  yAxis: {
    gridLineWidth: 0,
  },
  plotOptions: {
    bullet: {
      pointPadding: 0.25,
      borderWidth: 0,
      color: "#5579ae",
      targetOptions: {
        width: "200%",
      },
    },
  },
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
});
const xAxisLabelStyle = {
  color: "#888888",
  fontFamily: "OpenSans-Regular",
  fontSize: "13px",
};
const yAxisLabelStyle = {
  ...xAxisLabelStyle,
  fontSize: "12px",
};
const options1: any = {
  chart: {
    marginTop: 20,
    height: "80px",
  },

  xAxis: {
    categories: ["Revenue"],
    labels: {
      style: xAxisLabelStyle,
    },
  },
  yAxis: {
    plotBands: [
      {
        from: 0,
        to: 9e9,
        color: "#bbc9df",
      },
    ],
    title: null,
    labels: {
      style: yAxisLabelStyle,
    },
  },
  series: [
    {
      data: [
        {
          y: 275,
          target: 250,
        },
      ],
    },
  ],
  tooltip: {
    pointFormat: "<b>{point.y}</b> (with target at {point.target})",
  },
};
const options2 = {
  chart: { height: "70px" },
  xAxis: {
    categories: ["Profit"],
    labels: {
      style: xAxisLabelStyle,
    },
  },
  yAxis: {
    plotBands: [
      {
        from: 0,
        to: 100,
        color: "#bbc9df",
      },
    ],
    labels: {
      format: "{value}%",
      style: yAxisLabelStyle,
    },
    title: null,
  },
  series: [
    {
      data: [
        {
          y: 22,
          target: 27,
        },
      ],
    },
  ],
  tooltip: {
    pointFormat: "<b>{point.y}</b> (with target at {point.target})",
  },
};
const options3 = {
  chart: { height: "70px" },
  xAxis: {
    categories: ["Customers"],
    labels: {
      style: xAxisLabelStyle,
    },
  },
  yAxis: {
    plotBands: [
      {
        from: 0,
        to: 9e9,
        color: "#bbc9df",
      },
    ],
    labels: {
      format: "{value}",
      style: yAxisLabelStyle,
    },
    title: null,
  },
  series: [
    {
      data: [
        {
          y: 1650,
          target: 2100,
        },
      ],
    },
  ],
  tooltip: {
    pointFormat: "<b>{point.y}</b> (with target at {point.target})",
  },
  credits: {
    enabled: true,
  },
};

const getUpdatedOptions = (options, newOptions) => ({
  ...options,
  chart: {
    ...options.chart,
    ...newOptions,
  },
});

const HighChartBulletGraph: React.SFC = () => {
  React.useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  });
  const {
    backgroundColors: { card: cardBackgroundColor },
  } = React.useContext(ThemeContext);
  return (
    <>
      <ContentHeader>Target Achievement (Visual from HighCharts)</ContentHeader>
      <HighchartsReact
        highcharts={Highcharts}
        options={getUpdatedOptions(options1, {
          backgroundColor: cardBackgroundColor,
        })}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={getUpdatedOptions(options2, {
          backgroundColor: cardBackgroundColor,
        })}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={getUpdatedOptions(options3, {
          backgroundColor: cardBackgroundColor,
        })}
      />
    </>
  );
};

export default HighChartBulletGraph;
