import React from "react";

function PMHeader() {
  return (
    <header className="pm-header">

      {/* Left */}
      <div className="header-left">

        <button className="sidebar-toggle">
          ☰
        </button>

        <div className="header-search">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search projects, tasks, team..."
          />

        </div>

      </div>


      {/* Right */}
      <div className="header-right">

        <button className="notification-btn">
          ♧
          <span className="notification-dot">
            3
          </span>
        </button>


        <div className="header-user">

          <div className="header-avatar">
            SR
          </div>

          <div>
            <strong>sagar</strong>
            <span>Project Manager</span>
          </div>

          <span className="dropdown">
           ⌄
          </span>

        </div>

      </div>

    </header>
  );
}

export default PMHeader;