import React from "react";

function ClientDetail() {
  const clientData = {
    clientName: "Acme Corporation",
    industry: "Manufacturing",
    contactInfo: {
      email: "contact@acme.com",
      phone: "+1 555-123-4567",
    },
    projectsAssigned: ["Project Alpha", "Project Beta"],
    contractDetails: "Contract signed for 2 years, renewable annually.",
    paymentStatus: "Paid",
    description: "Acme is a leading manufacturer of industrial goods.",
    clientPortal: "Enabled",
    contractRenewalAlerts: "Next renewal in 6 months",
    clientSatisfactionSurveys: "Survey scheduled after Project Beta completion",
  };

  return (
    <div className="">
      <h3>Client Detail</h3>
      <div className="row mt-4">
        <div className="col-sm-6 mb-3">
          <strong>Client Name:</strong>
          <p>{clientData.clientName}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Industry/Business Type:</strong>
          <p>{clientData.industry}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Email:</strong>
          <p>{clientData.contactInfo.email}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Phone:</strong>
          <p>{clientData.contactInfo.phone}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Projects Assigned:</strong>
          <ul>
            {clientData.projectsAssigned.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Contract Details:</strong>
          <p>{clientData.contractDetails}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Payment Status:</strong>
          <p>{clientData.paymentStatus}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Client Portal:</strong>
          <p>{clientData.clientPortal}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Contract Renewal Alerts:</strong>
          <p>{clientData.contractRenewalAlerts}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Client Satisfaction Surveys:</strong>
          <p>{clientData.clientSatisfactionSurveys}</p>
        </div>

        <div className="col-sm-12 mb-3">
          <strong>Description:</strong>
          <p>{clientData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ClientDetail;
