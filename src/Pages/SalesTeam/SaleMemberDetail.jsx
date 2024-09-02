import React from "react";

function SaleMemberDetail() {
  const saleTeamData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 555-678-1234",
    currentProjects: ["First Project", "Second Project"],
    clientAccountsManaged: ["First Client", "Second Client"],
    salesMetrics: "100 leads converted",
    salesPipeline: "Q3 Sales Process",
    crm: "Detailed logs of all client interactions",
    incentivesTracking: "Commission: $5000, Bonus: $2000",
  };
  return (
    <div className="container mt-5">
      <h3>Sale Team Detail</h3>
      <div className="row mt-4">
        <div className="col-sm-6 mb-3">
          <strong>Name:</strong>
          <p>{saleTeamData.name}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Email:</strong>
          <p>{saleTeamData.email}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Phone:</strong>
          <p>{saleTeamData.phone}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Current Projects:</strong>
          <ul>
            {saleTeamData.currentProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Client Accounts Managed:</strong>
          <ul>
            {saleTeamData.clientAccountsManaged.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Sales Metrics:</strong>
          <p>{saleTeamData.salesMetrics}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Sales Pipeline:</strong>
          <p>{saleTeamData.salesPipeline}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Client Relationship Management (CRM):</strong>
          <p>{saleTeamData.crm}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Incentives Tracking:</strong>
          <p>{saleTeamData.incentivesTracking}</p>
        </div>
      </div>
    </div>
  );
}

export default SaleMemberDetail;
