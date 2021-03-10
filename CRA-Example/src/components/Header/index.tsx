import React from "react";
import { Icon } from "antd";
import { Button } from "@k2/ui";

import { HeaderStyled } from "./header.style";
import { ToggleButton } from "../ThemeToggleButton/ThemeToggleButton";
import html2Canvas from "html2canvas";
import jsPDF from "jspdf";

const generatePDF = () => {
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
  });
};

export default function Header() {
  return (
    <HeaderStyled>
      <div className="header-content-wrapper">
        <div className="heading">
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
        </div>
        <div className="toggle">
          <button onClick={generatePDF}>Generate PDF</button>
          <ToggleButton />
        </div>
      </div>
    </HeaderStyled>
  );
}
