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

const applyFilter = (data, selectedRegions, selectedQuarter) => {
  const filteredData =
    selectedRegions.length > 0
      ? data.filter(({ name }) => selectedRegions.includes(name))
      : data;
  return selectedQuarter
    ? filteredData.reduce((result, datum) => {
        const { data: pointsData } = datum;
        const filteredData = pointsData.filter(
          ({ x }) => quarters[selectedQuarter] === getQuarter(x),
        );
        return [...result, { ...datum, data: filteredData }];
      }, [])
    : filteredData;
};
type Props = {
  width?: string | number;
  height?: string | number;
  key?: string;
};
const CustomAreaChart = (props: Props) => {
  const [open, OpenDrawer] = React.useState(false);
  const [selectedRegion, setRegion] = React.useState([]);
  const [selectedQuarter, setQuarter] = React.useState(undefined);
  const ref = React.useRef(null);
  const hasFilters =
    ref.current && ref.current.status !== "LOADING"
      ? ref.current.viewData !== ref.current.data
      : false;

  const handleRegionFilter = value => {
    if (ref.current) {
      const { data, setViewData } = ref.current;
      const viewData = applyFilter(data, value, selectedQuarter);
      setRegion(value);
      setViewData(viewData);
    }
  };
  const handleQuarterFilter = value => {
    if (ref.current) {
      const { data, setViewData } = ref.current;
      const viewData = applyFilter(data, selectedRegion, value);
      setQuarter(value);
      setViewData(viewData);
    }
  };

  return (
    <CardStyled
      {...props}
      classes={{
        title: "card-title",
        actions: "card-actions",
        body: "card-body",
      }}
      title="Sales Overview"
      actions={
        <Icon
          type="filter"
          theme={hasFilters ? "twoTone" : "outlined"}
          onClick={() => OpenDrawer(true)}
        />
      }
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
