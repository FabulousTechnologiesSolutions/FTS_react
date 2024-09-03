import React from "react";

const ProjectDetail = () => {
  // Sample data for the project. In a real application, this would likely come from an API call.
  const projectData = {
    projectName: "Project Alpha",
    clientName: "Acme Corporation",
    projectManager: "Manager 1",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    currentPhase: "Development",
    phases: ["Design", "Frontend", "Backend"],
    status: "In Progress",
    assignedDevelopers: ["Developer 1", "Developer 2"],
    associatedSalesTeamMembers: ["Sales Team Member 1", "Sales Team Member 2"],
    documents: ["document1.pdf", "document2.docx"],
    description:
      "This project involves the complete redesign and development of the Acme Corporation's website.",
    budgetTracking: "$50,000",
    projectTimeline:
      "Design: 1 month, Frontend Development: 2 months, Backend Development: 2 months",
    clientCommunication:
      "Kickoff meeting held on 2024-01-02. Weekly updates provided every Monday.",
    riskManagement:
      "Potential delay due to dependency on external API integration. Mitigation: Early engagement with API provider.",
  };

  return (
    <div className="px-5">
      <h3>Project Detail</h3>
      <div className="row mt-4">
        <div className="col-sm-6 mb-3">
          <strong>Project Name:</strong>
          <p>{projectData.projectName}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Client Name:</strong>
          <p>{projectData.clientName}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Project Manager:</strong>
          <p>{projectData.projectManager}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Start Date:</strong>
          <p>{projectData.startDate}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>End Date:</strong>
          <p>{projectData.endDate}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Phases:</strong>
          <p>{projectData.currentPhase}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Status:</strong>
          <p>{projectData.status}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Assigned Developers:</strong>
          <ul>
            {projectData.assignedDevelopers.map((developer, index) => (
              <li key={index}>{developer}</li>
            ))}
          </ul>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Associated Sales Team Members:</strong>
          <ul>
            {projectData.associatedSalesTeamMembers.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Documents/Files:</strong>
          <ul>
            {projectData.documents.map((document, index) => (
              <li key={index}>
                <a
                  href={`/documents/${document}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {document}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-sm-12 mb-3">
          <strong>Description:</strong>
          <p>{projectData.description}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Budget Tracking:</strong>
          <p>{projectData.budgetTracking}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Project Timeline:</strong>
          <p>{projectData.projectTimeline}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Client Communication Logs:</strong>
          <p>{projectData.clientCommunication}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Risk Management:</strong>
          <p>{projectData.riskManagement}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
