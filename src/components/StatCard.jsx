import React from "react";

function StatCard({ title, value, icon, type }) {
  return (
    <div className="stat-card">

      <div className={`stat-icon ${type}`}>
        {icon}
      </div>

      <div className="stat-details">

        <p>{title}</p>

        <h2>{value}</h2>

        <span className="stat-growth">
          ↑ 12% from last month
        </span>

      </div>

    </div>
  );
}

export default StatCard;