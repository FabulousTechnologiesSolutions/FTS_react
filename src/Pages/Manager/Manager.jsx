import React from "react";
import { FaTrash, FaEye, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Managers = () => {
  const managersData = [
    {
      id: 1,
      name: "Alice Smith",
      email: "alice.smith@example.com",
      phone: "+1 555-678-1234",
      currentProjects: ["Project Alpha", "Project Beta"],
      teamMembers: ["John Doe", "Bob Johnson", "Charlie Brown"],
      leadershipMetrics: "Excellent",
      approvalWorkflows: "Approved budgets for 3 projects",
    },
    {
      id: 2,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phone: "+1 555-678-5678",
      currentProjects: ["Project Gamma", "Project Delta"],
      teamMembers: ["Alice Smith", "Eve Adams"],
      leadershipMetrics: "Good",
      approvalWorkflows: "Approved project phases for 2 projects",
    },
  ];

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="mb-0">Managers</h3>
        <Link to="/add_manager"
          className="bg-blue text-decoration-none text-white px-3 py-2 rounded-3"
        >
          Add Manager
        </Link>
      </div>
      <div className="table-responsive mt-3">
        <table className="table">
          <thead>
            <tr className="align-middle">
              <th className="small">No.</th>
              <th className="small">Name</th>
              <th className="small">Email</th>
              <th className="small">Phone</th>
              <th className="small">Current Projects</th>
              <th className="small">Team Members</th>
              <th className="small">Leadership Metrics</th>
              <th className="small">Approval Workflows</th>
              <th className="small">Action</th>
            </tr>
          </thead>
          <tbody>
            {managersData.map((manager, index) => (
              <tr key={manager.id} className="align-middle">
                <td>{index + 1}</td>
                <td className="small">{manager.name}</td>
                <td className="small">{manager.email}</td>
                <td className="small text-nowrap">{manager.phone}</td>
                <td className="small">
                  {manager.currentProjects.join(", ")}
                </td>
                <td className="small">
                  {manager.teamMembers.join(", ")}
                </td>
                <td className="small">{manager.leadershipMetrics}</td>
                <td className="small">{manager.approvalWorkflows}</td>
                <td className="small">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 text-blue">
                      <FaTrash />
                    </Link>
                    <Link to="/manager_detail" className="mx-1 text-blue">
                      <FaEye />
                    </Link>
                    <Link to="/edit_manager" className="mx-1 text-blue">
                      <FaPencilAlt />
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

export default Managers;
