import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, Icon, title }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      {Icon && (
        <>
          <Icon className="sidebarOption__icon" />
          <h3 className="sidebarOption__title">{title}</h3>
        </>
      )}
    </div>
  );
}

export default SidebarOption;
