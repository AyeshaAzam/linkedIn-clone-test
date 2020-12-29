import React, { useState } from "react";
import "./SideDrawer.css";
import ShopIcon from "@material-ui/icons/Shop";
import PeopleIcon from "@material-ui/icons/People";
import ExploreIcon from "@material-ui/icons/Explore";
import HeaderOption from "./HeaderOption";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import MoneyIcon from "@material-ui/icons/Money";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import WorkIcon from "@material-ui/icons/Work";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";

const SideDrawer = ({ show, handleDrawerToggleClick }) => {
  let drawerClasses = "side-drawer"; // I give the string value side-drawer to drawerClasses variable

  // if (show) ---> is true
  // then add the below classes ' side-drawer open ' in DOM
  if (show) {
    drawerClasses = "side-drawer open";
  }

  const businessServices = (heading, topic) => (
    <div className="sideDrawer__businessServices">
      <a href="#">
        <h5 className="sideDrawer___headings">{heading}</h5>
        <p>{topic}</p>
      </a>
    </div>
  );

  return (
    <div className={drawerClasses}>
      <div className="sideDrawer__close">
        <CloseIcon onClick={handleDrawerToggleClick} className="close"/>
      </div>
      <section className="sideDrawer_top">
        <div className="sideDrawer_text">
          <h3>Visit More LinkedIn Products</h3>
        </div>
        <div className="sideDrawer__Products">
          <div className="sideDrawer__Products-Icon">
            <HeaderOption Icon={ShopIcon} title="Learning" />
          </div>

          <div className="sideDrawer__Products-Icon">
            <HeaderOption Icon={InsertChartIcon} title="Insights" />
          </div>

          <div className="sideDrawer__Products-Icon">
            <HeaderOption Icon={WorkIcon} title="Post a job" />
          </div>

          <div className="sideDrawer__Products-Icon">
            <HeaderOption Icon={TrackChangesIcon} title="Advertise" />
          </div>

          <div className="sideDrawer__Products-Icon">
            <HeaderOption Icon={ExploreIcon} title="Find Leads" />
          </div>
          <div className="sideDrawer__Products-Icon">
            <HeaderOption Icon={PeopleIcon} title="Groups" />
          </div>
          <div className="sideDrawer__Products-Icon">
            <HeaderOption Icon={SupervisedUserCircleIcon} title="ProFinder" />
          </div>
          <div className="sideDrawer__Products-Icon">
            <HeaderOption Icon={MoneyIcon} title="Salary" />
          </div>
        </div>
      </section>

      <section className="sideDrawer_bottom">
        <div className="sideDrawer_text">
          <h3>LinkedIn Business Services</h3>
        </div>
        <div className="sideDrawer__business">
          {businessServices(
            "Talent Solutions",
            "Find, Attract and recruit talent"
          )}
          {businessServices("Sales Solutions", "Unlock sales opportunities")}
          {businessServices(
            "Post a job for Free",
            "Get your job in front of quality candidates"
          )}
          {businessServices(
            "Marketing Solutions",
            "Acquire customers and grow your business"
          )}
          {businessServices(
            "Learning Solutions",
            "Develop talent across your organization"
          )}
        </div>
        <div className="sideDrawer_companypage">
          <h4>Create a Company Page</h4>
          <span>
            <AddIcon />
          </span>
        </div>
      </section>
    </div>
  );
};

export default SideDrawer;
