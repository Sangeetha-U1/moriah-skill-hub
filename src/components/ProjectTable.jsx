import React from "react";

function ProjectTable() {

  const projects = [
    {
      name: "ProductAdda",
      team: "Frontend Team",
      progress: "75%",
      status: "Active",
      dueDate: "Aug 30, 2026"
    },
    {
      name: "Moriah Skill Hub",
      team: "Development Team",
      progress: "60%",
      status: "Active",
      dueDate: "Sep 11, 2026"
    },
    {
      name: "Employee Portal",
      team: "HR Team",
      progress: "45%",
      status: "In Progress",
      dueDate: "Sep 15, 2026"
    }
  ];

  return (
    <section className="dashboard-card project-table-card">

      <div className="card-heading">

        <div>
          <h2>Projects</h2>
          <p>Overview of all active projects</p>
        </div>

        <button className="view-all-btn">
          View All
        </button>

      </div>

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>Project</th>
              <th>Team</th>
              <th>Progress</th>
              <th>Status</th>
              <th>Due Date</th>
            </tr>
          </thead>

          <tbody>

            {projects.map((project, index) => (

              <tr key={index}>

                <td>
                  <strong>{project.name}</strong>
                </td>

                <td>{project.team}</td>

                <td>

                  <div className="table-progress">

                    <div className="mini-progress">
                      <div
                        style={{
                          width: project.progress
                        }}
                      ></div>
                    </div>

                    <span>{project.progress}</span>

                  </div>

                </td>

                <td>
                  <span
                    className={`status ${
                      project.status === "Active"
                        ? "status-active"
                        : "status-progress"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>

                <td>{project.dueDate}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default ProjectTable;