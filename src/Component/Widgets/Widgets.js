import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {
  const newArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon className="icon" />
        </div>

        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newArticle("Its Redux too good?", "Code - 158 readers")}
      {newArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
      {newArticle("PAPA React is back", "Top news - 9255 readers")}
      {newArticle("Coronavirus: UK updates", "Top news - 826 readers")}
      {newArticle("Tesla hits new hight", "Cars & auto - 300 readers")}
      {newArticle("Its Redux too good?", "Code - 158 readers")}
    </div>
  );
}

export default Widgets;
