import React from "react";
import { AreaChart } from "@k2/rv-viz";
import { Icon } from "antd";

import {
  getURL,
  monthTickValues,
  shortMonthNames,
  quarters,
} from "../../constants";
import { kFormatter, getMonthYearFromDate, getQuarter } from "../../utils";
import CustomDrawer from "./subComponents/CustomDrawer";
import CustomSelect from "./subComponents/CustomSelect";
import { CardStyled } from "./customAreaChart.style";

const CustomAreaChart = () => {
  const [open, OpenDrawer] = React.useState(false);
  const ref = React.useRef(null);

  const handleRegionFilter = value => {
    if (ref.current) {
      const { data, setViewData } = ref.current;
      const filteredData = data.filter(({ name }) => value.includes(name));
      const viewData = filteredData.length > 0 ? filteredData : data;
      setViewData(viewData);
    }
  };
  const handleQuarterFilter = value => {
    if (ref.current) {
      const { data, setViewData } = ref.current;
      const viewData = data.reduce((result, datum) => {
        const { data: pointsData } = datum;
        const filteredData = pointsData.filter(
          ({ x }) => quarters[value] === getQuarter(x),
        );
        return [...result, { ...datum, data: filteredData }];
      }, []);
      setViewData(viewData);
    }
  };

  return (
    <CardStyled
      classes={{
        title: "card-title",
        actions: "card-actions",
        body: "card-body",
      }}
      title="Sales Overview"
      actions={<Icon type="filter" onClick={() => OpenDrawer(true)} />}
    >
      <CustomDrawer open={open} onClose={() => OpenDrawer(false)}>
        <CustomSelect
          placeholder={"Select Region"}
          mode="multiple"
          list={["Europe", "America", "Africa"]}
          handleChange={handleRegionFilter}
        />
        <CustomSelect
          placeholder={"Select Quarter"}
          mode="default"
          list={["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter"]}
          handleChange={handleQuarterFilter}
        />
      </CustomDrawer>
      <AreaChart
        url={getURL("sales-overview-multi")}
        ref={ref}
        xyPlot={{
          stackBy: "y",
          xType: "time",
          yDomain: [0, 20000],
          margin: { top: 20, bottom: 30 },
        }}
        yAxis={{
          hideLine: true,
          style: {
            fontSize: "12px",
          },
          tickTotal: 3,
          tickSizeOuter: 6,
          tickSizeInner: 0,
          tickValues: [0, 10000, 20000],
          tickFormat: (value: number) => {
            return `${value / 1000}K`;
          },
        }}
        xAxis={{
          tickTotal: 12,
          tickSizeOuter: 6,
          tickSizeInner: 0,
          tickValues: monthTickValues,
          tickFormat: (time: number) => {
            const monthNames = shortMonthNames;
            const date = new Date(time);
            return `${monthNames[date.getMonth()]}`;
          },
          style: { strokeWidth: 0.6, fontSize: "12px" },
        }}
        horizontalGridLines={{
          tickValues: [0, 10000, 20000],
        }}
        verticalGridLines={false}
        classes={{ crosshair: "crosshair-root" }}
        crosshair={{
          yFormatter: val => kFormatter(val),
          xFormatter: val => getMonthYearFromDate(new Date(val)),
        }}
      />
    </CardStyled>
  );
};

export default CustomAreaChart;
