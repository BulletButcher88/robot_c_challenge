import React from "react";

import gif from '../assets/warp-speed.gif';

import './Background.css'

const Background = ({ children }) => {
  return (
    <div
      className="board-container"
      style={{ backgroundImage: `url("${gif}")` }}>
      {children}
    </div>
  )
}
export default Background;