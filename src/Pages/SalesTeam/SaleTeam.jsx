import React from "react";
import { FaTrash, FaEye, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SaleTeam = () => {
  const saleTeamData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 555-678-1234",
      currentProjects: ["First Project", "Second Project"],
      clientAccountsManaged: ["First Client", "Second Client"],
      salesMetrics: "100 leads converted",
      salesPipeline: "Q3 Sales Process",
      crm: "Detailed logs of all client interactions",
      incentivesTracking: "Commission: $5000, Bonus: $2000",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1 555-678-5678",
      currentProjects: ["Third Project", "Fourth Project"],
      clientAccountsManaged: ["Third Client", "Fourth Client"],
      salesMetrics: "75 leads converted",
      salesPipeline: "Q2 Sales Process",
      crm: "Client interaction logs for all accounts",
      incentivesTracking: "Commission: $3000, Bonus: $1500",
    },
  ];

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="mb-0">Sales Team</h3>
        <Link to="/add_sale_member"
          className="bg-blue text-decoration-none text-white px-3 py-2 rounded-3"
        >
          Add Sale Team Member
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
              <th className="small">Client Accounts Managed</th>
              <th className="small">Sales Metrics</th>
              <th className="small">Sales Pipeline</th>
              <th className="small">CRM</th>
              <th className="small">Incentives Tracking</th>
              <th className="small">Action</th>
            </tr>
          </thead>
          <tbody>
            {saleTeamData.map((member, index) => (
              <tr key={member.id} className="align-middle">
                <td>{index + 1}</td>
                <td className="small">{member.name}</td>
                <td className="small">{member.email}</td>
                <td className="small text-nowrap">{member.phone}</td>
                <td className="small">
                  {member.currentProjects.join(", ")}
                </td>
                <td className="small">
                  {member.clientAccountsManaged.join(", ")}
                </td>
                <td className="small">{member.salesMetrics}</td>
                <td className="small">{member.salesPipeline}</td>
                <td className="small">{member.crm}</td>
                <td className="small">{member.incentivesTracking}</td>
                <td className="small">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 text-blue">
                      <FaTrash />
                    </Link>
                    <Link to="/sale_member_detail" className="mx-1 text-blue">
                      <FaEye />
                    </Link>
                    <Link to="/edit_sale_member" className="mx-1 text-blue">
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

export default SaleTeam;
