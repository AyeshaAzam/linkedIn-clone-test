import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Working with LinkedIn clone", "Top news- 9999 readers")}
      {newsArticle("Coronavirus: Sweden updates", "Top news- 889 readers")}
      {newsArticle("Bitcoin breaks $22k", "Crypto- 9000 readers")}
      {newsArticle("testla hits new records ", " Cars & Auto - 6505 readers")}
      {newsArticle(
        "Working With own React project Soon ",
        " Code News - 6505 readers"
      )}
      {newsArticle(
        "Working With own React project Soon ",
        " Code News - 6505 readers"
      )}
    </div>
  );
}

export default Widgets;
