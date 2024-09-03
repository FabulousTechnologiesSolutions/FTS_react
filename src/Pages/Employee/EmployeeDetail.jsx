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
    cnic: "12345-6789012-3",
    salary: "40000",
    agreementPdf: "agreement.pdf",
    offerLetter: "offer_letter.pdf",
    probationAgreement: "probation_agreement.pdf", // or "Text of the probation agreement" for text content
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
          <strong>Performance Reviews:</strong>
          <p>{employeeData.performanceReviews}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Professional Development:</strong>
          <p>{employeeData.professionalDevelopment}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Address:</strong>
          <p>{employeeData.address}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>CNIC:</strong>
          <p>{employeeData.cnic}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Salary:</strong>
          <p>{employeeData.salary}</p>
        </div>
        <div className="col-sm-6 mb-3">
          <strong>Workload Management:</strong>
          <p>{employeeData.workloadManagement}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Projects Assigned:</strong>
          <ul>
            {employeeData.projectsAssigned.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Team Members:</strong>
          <ul>
            {employeeData.teamMembers.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
        <div className="col-sm-6 mb-3">
          <strong>Agreement PDF:</strong>
          <p>
            <a href={employeeData.agreementPdf} target="_blank" rel="noopener noreferrer">
              Download Agreement
            </a>
          </p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Offer Letter:</strong>
          <p>
            <a href={employeeData.offerLetter} target="_blank" rel="noopener noreferrer">
              Download Offer Letter
            </a>
          </p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Probation Agreement:</strong>
          <p>
            <a href={employeeData.probationAgreement} target="_blank" rel="noopener noreferrer">
              Download Probation Agreement
            </a>
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default EmployeeDetail;
