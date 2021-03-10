import React, { useState } from "react";
import { Col, Icon, Row, Select, Button } from "antd";
import html2Canvas from "html2canvas";
import jsPDF from "jspdf";

import { HeaderStyled } from "./header.style";
import { ToggleButton } from "../ThemeToggleButton/ThemeToggleButton";

const { Option } = Select;

export default function Header({ onSelectChange }) {
  const [loading, setLoading] = useState<boolean>(false);
  const generatePDF = () => {
    setLoading(true);
    html2Canvas(document.querySelector("#dashboard")).then(canvas => {
      //$("#previewBeforeDownload").html(canvas);
      const imgData = canvas.toDataURL("image/jpeg", 1);
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imageWidth = canvas.width;
      const imageHeight = canvas.height;

      const ratio =
        imageWidth / imageHeight >= pageWidth / pageHeight
          ? pageWidth / imageWidth
          : pageHeight / imageHeight;

      pdf.addImage(
        imgData,
        "JPEG",
        0,
        0,
        imageWidth * ratio,
        imageHeight * ratio,
      );
      pdf.save("dashboard.pdf");
      setLoading(false);
    });
  };
  return (
    <HeaderStyled>
      <Row className="header-content-wrapper">
        <Col span={9} className="heading" offset={7}>
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
        <Col className="select-container" offset={1} span={2}>
          <Icon className="calendar-icon" type="calendar" theme="filled" />
          <Select
            defaultValue={1}
            size="small"
            style={{ width: 100 }}
            onChange={value => onSelectChange(value)}
          >
            <Option value={1}>Last Year</Option>
            <Option value={5}>Last 5 Years</Option>
            <Option value={10}>Last 10 Years</Option>
          </Select>
        </Col>
        <Col span={2} className="export-container">
          <Button
            icon="file-pdf"
            size="small"
            type="default"
            loading={loading}
            onClick={generatePDF}
          >
            Export
          </Button>
        </Col>
        <Col className="toggle" span={3}>
          <ToggleButton />
        </Col>
      </Row>
    </HeaderStyled>
  );
}
