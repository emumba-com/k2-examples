import React from "react";
import { AreaChart } from "@k2/rv-viz";
import { Icon } from "antd";

import {
  getURL,
  monthTickValues,
  shortMonthNames,
  quarters,
  yearTickValues,
} from "../../constants";
import {
  kFormatter,
  getMonthYearFromDate,
  getQuarter,
  applyQueryParams,
} from "../../utils";
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
  period?: number;
  region?: string;
};

const getBaseUrl = "sales-overview-multi";

const CustomAreaChart = (props: Props) => {
  const [open, OpenDrawer] = React.useState(false);
  const [selectedRegion, setRegion] = React.useState([]);
  const [selectedQuarter, setQuarter] = React.useState(undefined);
  const { period = 1, region } = props;
  const apiUrlString = applyQueryParams(getBaseUrl, { region, period });
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
        {period > 1 || region ? (
          <div className="filter-not-applicable">Filter not application with selected Dashboard filters</div>
        ) : (
          <>
            <CustomSelect
              placeholder={"Select Region"}
              mode="multiple"
              list={["Europe", "America", "Africa"]}
              handleChange={handleRegionFilter}
            />
            <CustomSelect
              placeholder={"Select Quarter"}
              mode="default"
              list={[
                "1st Quarter",
                "2nd Quarter",
                "3rd Quarter",
                "4th Quarter",
              ]}
              handleChange={handleQuarterFilter}
            />
          </>
        )}
      </CustomDrawer>
      <AreaChart
        url={getURL(apiUrlString)}
        ref={ref}
        xyPlot={{
          stackBy: "y",
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
          style: { strokeWidth: 0.6, fontSize: "12px" },
        }}
        horizontalGridLines={{
          tickValues: [0, 10000, 20000],
        }}
        verticalGridLines={false}
        classes={{ crosshair: "crosshair-root" }}
        crosshair={{
          yFormatter: val => kFormatter(val),
          xFormatter: val =>
            period > 1 ? val.toString() : getMonthYearFromDate(new Date(val)),
        }}
      />
    </CardStyled>
  );
};

export default CustomAreaChart;
