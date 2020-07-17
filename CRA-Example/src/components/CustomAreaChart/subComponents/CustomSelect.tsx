import React from "react";
import { Select } from "antd";

const { Option } = Select;

const CustomSelect = ({ placeholder, mode, list = [], handleChange }) => {
  return (
    <Select
      mode={mode}
      style={{ width: "100%", marginBottom: "10px" }}
      placeholder={placeholder}
      optionLabelProp="label"
      allowClear
      onChange={handleChange}
    >
      {list.map(item => (
        <Option value={item} label={item}>
          {item}
        </Option>
      ))}
    </Select>
  );
};
export default CustomSelect;
