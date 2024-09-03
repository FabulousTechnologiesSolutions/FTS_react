import React from "react";
import { FaTrash, FaEye, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const projectsData = [
    {
      id: 1,
      projectName: "Project Alpha",
      clientName: "Acme Corporation",
      currentPhase: "Design",
      projectManager: "Manager 1",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      status: "In Progress",
    },
    {
      id: 2,
      projectName: "Project Beta",
      clientName: "Globex Inc.",
      currentPhase: "Design",
      projectManager: "Manager 2",
      startDate: "2024-02-01",
      endDate: "2024-11-30",
      status: "Not Started",
    },
    // Add more project data as needed
  ];

  return (
    <div className="">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="mb-0">Projects</h3>
      </div>
      <div className="table-responsive mt-3">
        <table className="table">
          <thead>
            <tr className="align-middle">
              <th className="small">No.</th>
              <th className="small">Project Name</th>
              <th className="small">Client Name</th>
              <th className="small">Project Manager</th>
              <th className="small">Current Phase</th>
              <th className="small">Start Date</th>
              <th className="small">End Date</th>
              <th className="small">Status</th>
              <th className="small">Action</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project, index) => (
              <tr key={project.id} className="align-middle">
                <td>{index + 1}</td>
                <td className="small">{project.projectName}</td>
                <td className="small">{project.clientName}</td>
                <td className="small">{project.projectManager}</td>
                <td className="small">{project.currentPhase}</td>
                <td className="small">{project.startDate}</td>
                <td className="small">{project.endDate}</td>
                <td className="small">{project.status}</td>
                <td className="small">
                  <div className="d-flex">
                  <Link
          to="/tasks"
          className="bg-blue text-nowrap text-decoration-none text-white px-3 py-2 rounded-3"
        >
          View Tasks
        </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProjects;
