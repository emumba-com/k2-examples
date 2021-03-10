import React from "react";
import { Col, Icon, Row, Select } from "antd";

import { HeaderStyled } from "./header.style";
import { ToggleButton } from "../ThemeToggleButton/ThemeToggleButton";
const { Option } = Select;

export default function Header({onSelectChange}) {
  return (
    <HeaderStyled>
      <Row className="header-content-wrapper">
        <Col span={9} className="heading" offset={8}>
          <span>
            This Dashboard is created using K2. View the source code on{" "}
            <Icon className="action-icon" type="github" theme="filled" />{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/emumba-com/k2-examples/tree/master/CRA-Example"
            >
              GitHub
            </a>
          </span>
        </Col>
        <Col className="select-container" offset={1} span={3}>
          <Icon className="calendar-icon" type="calendar" theme="filled" />
          <Select
            defaultValue={1}
            size="small"
            style={{ width: 120 }}
            onChange={value => onSelectChange(value)}
          >
            <Option value={1}>Last Year</Option>
            <Option value={5}>Last 5 Years</Option>
            <Option value={10}>Last 10 Years</Option>
          </Select>
        </Col>
        <Col className="toggle" span={3}>
          <ToggleButton />
        </Col>
      </Row>
    </HeaderStyled>
  );
}
