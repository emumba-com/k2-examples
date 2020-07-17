import React from "react";
import { Drawer } from "antd";

const CustomDrawer = ({ open, onClose, children }) => {
  return (
    <Drawer
      title="Filter"
      placement="right"
      closable
      onClose={onClose}
      visible={open}
      getContainer={false}
      style={open ? { position: "absolute" } : { display: "none" }}
    >
      {children}
    </Drawer>
  );
};
export default CustomDrawer;
