import { Avatar } from "@material-ui/core";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import "./topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <span>ADMIN DASHBOARD.</span>
        </div>
        <div className="right">
          <div className="iconContainer">
            <NotificationsNone></NotificationsNone>
            <span className="badge">2</span>
          </div>
          <div className="iconContainer">
            <Language></Language>
            <span className="badge">EN</span>
          </div>
          <div className="iconContainer">
            <Settings></Settings>
          </div>
          <Avatar className="avatar"></Avatar>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
