import React from "react";

function ManagerDetail() {
  // Sample data for the manager. In a real application, this would likely come from an API call.
  const managerData = {
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phone: "+1 555-678-1234",
    currentProjects: ["Project Alpha", "Project Beta"],
    teamMembers: ["John Doe", "Bob Johnson", "Charlie Brown"],
    leadershipMetrics: "Excellent",
    approvalWorkflows: "Approved budgets for 3 projects",
  };

  return (
    <div >
      <h3>Manager Detail</h3>
      <div className="row mt-4">
        {/* Basic Info */}
        <div className="col-sm-6 mb-3">
          <strong>Name:</strong>
          <p>{managerData.name}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Email:</strong>
          <p>{managerData.email}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Phone:</strong>
          <p>{managerData.phone}</p>
        </div>

        {/* Current Projects */}
        <div className="col-sm-6 mb-3">
          <strong>Current Projects:</strong>
          <ul>
            {managerData.currentProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>

        {/* Team Members Managed */}
        <div className="col-sm-6 mb-3">
          <strong>Team Members Managed:</strong>
          <ul>
            {managerData.teamMembers.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>

        {/* Leadership Metrics */}
        <div className="col-sm-6 mb-3">
          <strong>Leadership Metrics:</strong>
          <p>{managerData.leadershipMetrics}</p>
        </div>

        {/* Approval Workflows */}
        <div className="col-sm-12 mb-3">
          <strong>Approval Workflows:</strong>
          <p>{managerData.approvalWorkflows}</p>
        </div>
      </div>
    </div>
  );
}

export default ManagerDetail;
