import React from "react";
import { FaTrash, FaEye, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Client = () => {
  const clientsData = [
    {
      id: 1,
      clientName: "Acme Corporation",
      industry: "Manufacturing",
      email: "contact@acme.com",
      phone: "+1 555-123-4567",
      projectsAssigned: ["Project Alpha", "Project Beta"],
      paymentStatus: "Paid",
      description: "Acme is a leading manufacturer of industrial goods.",
      clientPortal: "Enabled",
    },
    {
      id: 2,
      clientName: "Globex Inc.",
      industry: "Technology",
      email: "contact@acme.com",
      phone: "+1 555-123-4567",
      projectsAssigned: ["Project Gamma", "Project Delta"],
      paymentStatus: "Unpaid",
      description: "Globex provides innovative tech solutions.",
      clientPortal: "Disabled",
    },
  ];

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="mb-0">Clients</h3>
        <Link
          to="/add_client"
          className="bg-blue text-decoration-none text-white px-3 py-2 rounded-3"
        >
          Add Client
        </Link>
      </div>
      <div className="table-responsive mt-3">
        <table className="table">
          <thead>
            <tr className="align-middle">
              <th className="small">No.</th>
              <th className="small">Client Name</th>
              <th className="small">Industry/Business Type</th>
              <th className="small">Email</th>
              <th className="small">Phone</th>
              <th className="small">Projects Assigned</th>
              <th className="small">Payment Status</th>
              <th className="small">Client Portal</th>
              <th className="small">Action</th>
            </tr>
          </thead>
          <tbody>
            {clientsData.map((client, index) => (
              <tr key={client.id} className="align-middle">
                <td>{index + 1}</td>
                <td className="small">{client.clientName}</td>
                <td className="small">{client.industry}</td>
                <td className="small">{client.email}</td>
                <td className="small text-nowrap">{client.phone}</td>
                <td className="small">{client.projectsAssigned.join(", ")}</td>
                <td className="small">{client.paymentStatus}</td>
                <td className="small">{client.clientPortal}</td>
                <td className="small">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 text-blue">
                      <FaTrash />
                    </Link>
                    <Link to="/client_detail" className="mx-1 text-blue">
                      <FaEye />
                    </Link>
                    <Link to="/edit_client" className="mx-1 text-blue">
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

export default Client;
