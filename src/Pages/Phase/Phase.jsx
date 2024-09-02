import React from "react";
import { FaTrash, FaEye, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Phase = () => {
  const phasesData = [
    {
      id: 1,
      phaseName: "Design",
    },
    {
      id: 2,
      phaseName: "Front End",
    },
  ];

  return (
    <div className="">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="mb-0">Phases</h3>
        <Link
          to="/add_phase"
          className="bg-blue text-decoration-none text-white px-3 py-2 rounded-3"
        >
          Add Phase
        </Link>
      </div>
      <div className="table-responsive mt-3">
        <table className="table">
          <thead>
            <tr className="align-middle">
              <th className="small">No.</th>
              <th className="small">Phase Name</th>
              <th className="small">Action</th>
            </tr>
          </thead>
          <tbody>
            {phasesData.map((phase, index) => (
              <tr key={phase.id} className="align-middle">
                <td>{index + 1}</td>
                <td className="small">{phase.phaseName}</td>
                <td className="small">
                  <div className="d-flex">
                    <Link to="/edit_phase" className="mx-1 text-blue">
                      <FaPencilAlt />
                    </Link>
                    <Link to="#" className="mx-1 text-blue">
                      <FaTrash />
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

export default Phase;
