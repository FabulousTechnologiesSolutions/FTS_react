import React from "react";
import { FaTrash, FaEye, FaPencilAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Employees = () => {
  const employeesData = [
    {
      id: 1,
      userName: "John Doe",
      contact: "+1 8378 32 9292",
      email: "Alexmartin@gmail.com",
      category: "Web Developer",
      role: "Frontend",
      experienceLevel: "Mid-level",
      workloadManagement: "5 Projects",
    },
    {
        id: 2,
        userName: "John Doe",
        contact: "+1 8378 32 9292",
        email: "Alexmartin@gmail.com",
        category: "Web Developer",
        role: "Frontend",
        skills: "React, JavaScript, HTML, CSS",
        experienceLevel: "Mid-level",
        workloadManagement: "5 Projects",
        performanceReviews: "Exceeds Expectations",
      },
  ];

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="mb-0">Employees</h3>
        <Link to="/add_employee"
          className="bg-blue text-decoration-none text-white px-3 py-2 rounded-3"
        >
          Add Employee
        </Link>
      </div>
      <div className="table-responsive mt-3">
        <table className="table">
          <thead>
            <tr className="align-middle">
              <th className="small">No.</th>
              <th className="small">Name</th>
              <th className="small">Contact</th>
              <th className="small">Email</th>
              <th className="small">Category</th>
              <th className="small">Role</th>
              <th className="small">Experience Level</th>
              <th className="small">Workload Management</th>
              <th className="small">Action</th>
            </tr>
          </thead>
          <tbody>
            {employeesData.map((employee, index) => (
              <tr key={employee.id} className="align-middle">
                <td>{index + 1}</td>
                <td className="small">{employee.userName}</td>
                <td className="small">{employee.contact}</td>
                <td className="small">{employee.email}</td>
                <td className="small">{employee.category}</td>
                <td className="small">{employee.role}</td>
                <td className="small">{employee.experienceLevel}</td>
                <td className="small">{employee.workloadManagement}</td>
                <td className="small">
                  <div className="d-flex">
                  <Link to="#" className="mx-1 text-blue" >
                    <FaTrash />
                  </Link>
                 <Link to="/employee_detail" className="mx-1 text-blue" >
                    <FaEye />
                  </Link>
                 <Link to="/edit_employee" className="mx-1 text-blue">
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

export default Employees;
