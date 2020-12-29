import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import Home from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { logout } from "../features/userSlice";
import AppsIcon from "@material-ui/icons/Apps";

function Header(props) {
  //we need dispatch an action to the store
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  // const openSideDrawer = () => {
  //   alert("I am sideDrawer.....");
  // };

  console.log("my props", props);

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="logo"
        />

        <div className="header__search">
          {/* // install search con from material ui */}
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />

        <div className="header__rightSide">
          <div className="header__rightSideBorder"></div>
          <HeaderOption
            Icon={AppsIcon}
            title="Work"
            onClick={props.handleDrawerToggleClick}
          />
          <div className="header__rightSide-premium">
            <a href="#">
              <p>
                Try Premium Free
                <br />
                for 1 Month
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

{
  /* avatar="https://media-exp1.licdn.com/dms/image/C5603AQGGc5PuRfCH5g/profile-displayphoto-shrink_100_100/0/1516494857014?e=1614211200&v=beta&t=lq9oWnlXgirVWeBV61WXGGB8Qe9d0cMUWIwUEr_iuuQ" */
}
