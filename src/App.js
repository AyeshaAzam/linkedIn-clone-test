import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import { selectUser, login, logout } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import Widgets from "./Components/Widgets";
import SideDrawer from "./Components/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  // pull the users from the dataStore()
  // we will pass the one we created in userSlice.js
  const user = useSelector(selectUser);
  //we need dispatch an action to the store
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //  user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
      }
    });
  }, []);

  //toggle the drawer
  const handleDrawerToggleClick = () => {
    setSideDrawerOpen((prevDrawerState) => !prevDrawerState);
  };

  const handleBackdropClick = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;

  // if sideDrawerOpen then I will set the variable backdrop to the <Backdrop /> component
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={handleBackdropClick} />;
  }

  return (
    <div className="app" style={{ height: "100%" }}>
      <Header handleDrawerToggleClick={handleDrawerToggleClick} />
      <SideDrawer
        show={sideDrawerOpen}
        handleDrawerToggleClick={handleDrawerToggleClick}
      />
      {backdrop}
      {/* // if there is no user then we will render a login page, otherwise render out rest of the app*/}
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
};

export default App;
