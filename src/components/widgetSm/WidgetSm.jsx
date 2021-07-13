import React from "react";
import "./widgetSm.scss";
import { Visibility } from "@material-ui/icons";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="title">New Join Members</span>
      <ul className="list">
        <li className="listItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="username">Anna Keller</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <button className="button">
            <Visibility className="icon" />
            Display
          </button>
        </li>
        <li className="listItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="username">Anna Keller</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <button className="button">
            <Visibility className="icon" />
            Display
          </button>
        </li>
        <li className="listItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="username">Anna Keller</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <button className="button">
            <Visibility className="icon" />
            Display
          </button>
        </li>
        <li className="listItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="username">Anna Keller</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <button className="button">
            <Visibility className="icon" />
            Display
          </button>
        </li>
        <li className="listItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="username">Anna Keller</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <button className="button">
            <Visibility className="icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
