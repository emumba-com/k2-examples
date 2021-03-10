import React from "react";
import Highcharts from "highcharts/highcharts";
import HighchartsReact from "highcharts-react-official";

import ContentHeader from "../ContentHeader";
import { ThemeContext } from "styled-components";

function syncCrosshairs(e) {
  const comparisonCharts = Highcharts.charts.filter(
    chart => chart.options.chart.renderTo === "comparisonCharts",
  );
  for (let i = 0; i < comparisonCharts.length; i = i + 1) {
    const chart: any = comparisonCharts[i];
    // Find coordinates within the chart
    const event = chart.pointer.normalize(e);
    // Get the hovered point
    const point: any = chart.series[0].searchPoint(event, true);

    if (point) {
      point.onMouseOver();
      chart.tooltip.refresh(point);
      chart.xAxis[0].drawCrosshair(event, point);
    }
  }
}

Highcharts.setOptions({
  chart: {
    marginLeft: 60,
    marginRight: 40,
  },
  title: {
    text: null,
  },
  legend: {
    enabled: false,
  },
  yAxis: {
    gridLineWidth: 0,
    title: {
      text: "Revenue",
    },
  },
  xAxis: {
    crosshair: true,
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
});

const chartOptions: any = {
  renderTo: "comparisonCharts",
  type: "line",
  height: 120,
  inverted: false,
};

const options1: any = {
  chart: {
    ...chartOptions,
  },
  series: [
    {
      name: "Air Max Revenue",
      data: [
        15000,
        16000,
        9000,
        7000,
        8000,
        10000,
        8000,
        13000,
        15000,
        17000,
        16000,
        13000,
      ],
      color: "#b177bb",
      unit: "$",
      fillOpacity: 0.3,
      type: "area",
      valueDecimals: 1,
    },
  ],
};
const options2: any = {
  chart: {
    ...chartOptions,
  },
  series: [
    {
      name: "Jordan Revenue",
      data: [
        12000,
        14000,
        10000,
        9000,
        7000,
        4000,
        5000,
        6000,
        8000,
        14000,
        13000,
        11000,
      ],
      unit: "$",
      color: "#5579ae",
      fillOpacity: 0.3,
      type: "area",
      valueDecimals: 1,
    },
  ],
};

const getUpdatedOptions = (options, newOptions) => ({
  ...options,
  chart: {
    ...options.chart,
    ...newOptions,
  },
});

const SynchronizedCharts: React.SFC = () => {
  React.useEffect(() => {
    window.dispatchEvent(new Event("resize"));
    ["mousemove", "touchmove", "touchstart"].forEach(function(eventType) {
      document
        .getElementById("comparisonChart1")
        .addEventListener(eventType, syncCrosshairs);
    });
  });

  const {
    backgroundColors: { card: cardBackgroundColor },
  } = React.useContext(ThemeContext);

  return (
    <div id="comparisonChart1">
      <ContentHeader>
        Product Revenue Comparison (Visual from HighCharts)
      </ContentHeader>
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
    </div>
  );
};

export default SynchronizedCharts;
