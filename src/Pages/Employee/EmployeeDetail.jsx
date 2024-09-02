import React from "react";

function EmployeeDetail() {
  const employeeData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 555-123-4567",
    category: "Web Developer",
    role: "Frontend",
    additionalCategory: "Web",
    skills: "JavaScript, React, Node.js",
    experienceLevel: "Mid-level",
    workloadManagement: "3 Active Projects",
    performanceReviews:
      "Consistently exceeds expectations in project delivery.",
    professionalDevelopment:
      "Completed React Certification, enrolled in Advanced Node.js course.",
    projects: [
      "Project Alpha - Frontend Development",
      "Project Beta - UI/UX Design",
      "Project Gamma - Web Optimization",
    ],
    projectsAssigned: ["Project Alpha", "Project Beta"],
    teamMembers: [
      "Alice Smith - Backend Developer",
      "Bob Johnson - UI/UX Designer",
      "Charlie Brown - Project Manager",
    ],
    address: "1234 Elm Street, City, Country",
  };

  return (
    <div>
      <h3>Employee Detail</h3>
      <div className="row mt-4">
        <div className="col-sm-6 mb-3">
          <strong>Name:</strong>
          <p>{employeeData.name}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Email:</strong>
          <p>{employeeData.email}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Phone:</strong>
          <p>{employeeData.phone}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Category:</strong>
          <p>{employeeData.category}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Role:</strong>
          <p>{employeeData.role}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Additional Category:</strong>
          <p>{employeeData.additionalCategory}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Skills:</strong>
          <p>{employeeData.skills}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Experience Level:</strong>
          <p>{employeeData.experienceLevel}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Workload Management:</strong>
          <p>{employeeData.workloadManagement}</p>
        </div>

        <div className="col-sm-12 mb-3">
          <strong>Performance Reviews:</strong>
          <p>{employeeData.performanceReviews}</p>
        </div>

        <div className="col-sm-12 mb-3">
          <strong>Professional Development:</strong>
          <p>{employeeData.professionalDevelopment}</p>
        </div>

        <div className="col-sm-12 mb-3">
          <strong>Address:</strong>
          <p>{employeeData.address}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Projects Assigned:</strong>
          <ul>
            {employeeData.projectsAssigned.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>

        <div className="col-sm-12 mb-3">
          <strong>Team Members:</strong>
          <ul>
            {employeeData.teamMembers.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetail;
