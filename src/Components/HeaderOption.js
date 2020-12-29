import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  // now I have the user information in user variable which is coming from store
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon">{user?.email[0]}</Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;

{
  /* // {avatar && (
//   <Avatar className="headerOption__icon" src={user?.photoUrl} alt="logo" >{user?.email[0]} </Avatar>
// )} */
}
