import React from "react";

function PMSidebar() {
  return (
    <aside className="pm-sidebar">

      {/* Logo */}
      <div className="sidebar-logo">

        <div className="logo-icon">
          M
        </div>

        <div>
          <h2>Moriah</h2>
          <span>Skill Hub</span>
        </div>

      </div>


      {/* Main Menu */}
      <div className="sidebar-section">

        <p className="menu-title">
          MAIN MENU
        </p>

        <a href="#" className="menu-item active">
          <span>⌂</span>
          Dashboard
        </a>

        <a href="#" className="menu-item">
          <span>▣</span>
          Projects
        </a>

        <a href="#" className="menu-item">
          <span>✓</span>
          Tasks
        </a>

        <a href="#" className="menu-item">
          <span>♟</span>
          Team
        </a>

        <a href="#" className="menu-item">
          <span>▥</span>
          Reports
        </a>

      </div>


      {/* Settings */}
      <div className="sidebar-section">

        <p className="menu-title">
          SETTINGS
        </p>

        <a href="#" className="menu-item">
          <span>⚙</span>
          Settings
        </a>

        <a href="#" className="menu-item">
          <span>?</span>
          Help & Support
        </a>

      </div>


      {/* User */}
      <div className="sidebar-bottom">

        <div className="user-small">

          <div className="user-avatar">
            SR
          </div>

          <div>
            <strong>Sai Reddy</strong>
            <span>Project Manager</span>
          </div>

        </div>

      </div>

    </aside>
  );
}

export default PMSidebar;