import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
//import background from "./src/images/background.jpg";

function Sidebar() {
  // now I have the user information in user variable which is coming from store
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <div className="sidebar__hash">#</div>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {/* // if no images then show the first character of email */}
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,488</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("web development")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
