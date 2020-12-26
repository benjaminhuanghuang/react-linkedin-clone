import React from "react";
import { Avatar } from "@material-ui/core";

//
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) =>(
    <div className="sidebar__recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Sonny Sangha</h2>
        <h4>Sonny@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Wdddd</p>
          <p className="sidebar__statNumber">1212</p>
        </div>
        <div className="sidebar__stat">
          <p>Wdddd</p>
          <p className="sidebar__statNumber">1212</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('react.js')}
        {recentItem('programming')}
        {recentItem('software')}
        {recentItem('react.js')}
        {recentItem('react.js')}
      </div>
    </div>
  );
}

export default Sidebar;
