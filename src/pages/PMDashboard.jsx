import React from "react";
import PMSidebar from "../components/PMSidebar";
import PMHeader from "../components/PMHeader";
import StatCard from "../components/StatCard";
import ProjectTable from "../components/ProjectTable";
import "../App.css";

function PMDashboard() {
  return (
    <div className="pm-dashboard">

      {/* Sidebar */}
      <PMSidebar />

      {/* Main Area */}
      <div className="pm-main">

        {/* Header */}
        <PMHeader />

        <main className="pm-content">

          {/* Page Header */}
          <div className="dashboard-title">

            <div>
              <h1>Project Manager Dashboard</h1>
              <p>
                Overview of your projects and team activities
              </p>
            </div>

            <button className="create-project-btn">
              + Create Project
            </button>

          </div>


          {/* Statistics */}
          <div className="stats-grid">

            <StatCard
              title="Total Projects"
              value="24"
              icon="📁"
              type="blue"
            />

            <StatCard
              title="Active Projects"
              value="12"
              icon="🚀"
              type="orange"
            />

            <StatCard
              title="Pending Tasks"
              value="38"
              icon="⏳"
              type="pink"
            />

            <StatCard
              title="Completed Tasks"
              value="156"
              icon="✓"
              type="green"
            />

          </div>


          {/* Main Dashboard */}
          <div className="dashboard-grid">

            {/* Project Overview */}
            <section className="dashboard-card">

              <div className="card-heading">

                <div>
                  <h2>Project Overview</h2>
                  <p>Current project progress</p>
                </div>

                <button className="view-all-btn">
                  View All
                </button>

              </div>


              {/* ProductAdda */}
              <div className="progress-item">

                <div className="progress-info">

                  <div>
                    <h3>ProductAdda</h3>
                    <span>Frontend Development</span>
                  </div>

                  <strong>75%</strong>

                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: "75%" }}
                  ></div>
                </div>

              </div>


              {/* Moriah Skill Hub */}
              <div className="progress-item">

                <div className="progress-info">

                  <div>
                    <h3>Moriah Skill Hub</h3>
                    <span>Learning Management System</span>
                  </div>

                  <strong>60%</strong>

                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: "60%" }}
                  ></div>
                </div>

              </div>


              {/* Employee Portal */}
              <div className="progress-item">

                <div className="progress-info">

                  <div>
                    <h3>Employee Portal</h3>
                    <span>HR Management</span>
                  </div>

                  <strong>45%</strong>

                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: "45%" }}
                  ></div>
                </div>

              </div>

            </section>


            {/* Team Activity */}
            <section className="dashboard-card">

              <div className="card-heading">

                <div>
                  <h2>Team Activity</h2>
                  <p>Recent team updates</p>
                </div>

              </div>


              <div className="activity">

                <div className="activity-avatar">
                  SR
                </div>

                <div>
                  <strong>sagar</strong>
                  <p>Completed Dashboard UI</p>
                  <small>10 minutes ago</small>
                </div>

              </div>


              <div className="activity">

                <div className="activity-avatar">
                  SG
                </div>

                <div>
                  <strong>ramu</strong>
                  <p>Updated Login Screen</p>
                  <small>30 minutes ago</small>
                </div>

              </div>


              <div className="activity">

                <div className="activity-avatar">
                  PR
                </div>

                <div>
                  <strong>rahul</strong>
                  <p>Created new task</p>
                  <small>1 hour ago</small>
                </div>

              </div>


              <div className="activity">

                <div className="activity-avatar">
                  DK
                </div>

                <div>
                  <strong>raj</strong>
                  <p>Resolved API integration issue</p>
                  <small>2 hours ago</small>
                </div>

              </div>

            </section>

          </div>


          {/* Projects Table */}
          <ProjectTable />

        </main>

      </div>

    </div>
  );
}

export default PMDashboard;