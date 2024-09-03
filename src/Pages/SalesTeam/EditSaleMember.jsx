import React, { useState } from "react";
import Select from "react-select";

function EditSaleMember() {
  const projectOptions = [
    { value: "Project 1", label: "Project 1" },
    { value: "Project 2", label: "Project 2" },
    { value: "Project 3", label: "Project 3" },
    { value: "Project 4", label: "Project 4" },
    { value: "Project 5", label: "Project 5" },
    { value: "Project 6", label: "Project 6" },
    { value: "Project 7", label: "Project 7" },
  ];
  const defaultProject = [
    { value: "Project 2", label: "Project 2" },
    { value: "Project 6", label: "Project 6" },
  ];
  const [selectedOptions, setSelectedOptions] = useState(defaultProject);
  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };
  
  const clientOptions = [
    { value: "Client 1", label: "Client 1" },
    { value: "Client 2", label: "Client 2" },
    { value: "Client 3", label: "Client 3" },
    { value: "Client 4", label: "Client 4" },
    { value: "Client 5", label: "Client 5" },
    { value: "Client 6", label: "Client 6" },
    { value: "Client 7", label: "Client 7" },
  ];
  const defaultClient = [
    { value: "Client 2", label: "Client 2" },
    { value: "Client 6", label: "Client 6" },
  ];
  const [selectedCOptions, setSelectedCOptions] = useState(defaultClient);
  const handleCChange = (selected) => {
    setSelectedCOptions(selected);
  };
  return (
    <div>
      <h3>Edit Sale Team Member</h3>
      <form action="" className="">
        <div className="row mt-4">
          <div className="col-sm-6 mb-3">
            <label htmlFor="Name" className="mb-0 w-100">
              Name
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="Name"
              placeholder="Name"
              defaultValue="John Doe"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="Email" className="mb-0 w-100">
              Email
            </label>
            <input
              type="email"
              className="form-control shadow-none focus-none py-2"
              id="Email"
              placeholder="Email"
              defaultValue="john.doe@example.com"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="Phone" className="mb-0 w-100">
              Phone
            </label>
            <input
              type="tel"
              className="form-control shadow-none focus-none py-2"
              id="Phone"
              placeholder="Phone"
              defaultValue="+1 555-678-1234"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="projects" className="mb-0 w-100">
              Current Projects
            </label>
            <Select
              defaultValue={defaultProject}
              options={projectOptions}
              isMulti
              value={selectedOptions}
              onChange={handleChange}
              className="shadow-none focus-none "
              name="projects"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="clientmanage" className="mb-0 w-100">
              Client Accounts Managed
            </label>
            <Select
              defaultValue={defaultClient}
              options={clientOptions}
              isMulti
              value={selectedCOptions}
              onChange={handleCChange}
              className="shadow-none focus-none "
              name="projects"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="Salesmetrics" className="mb-0 w-100">
              Sales Metrics
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="Salesmetrics"
              placeholder="Enter Track leads"
              defaultValue="100 leads converted"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="salespipeline" className="mb-0 w-100">
              Sales Pipeline
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="salespipeline"
              placeholder="Sales process"
              defaultValue="Q3 Sales Process"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="crm" className="mb-0 w-100">
              Client Relationship Management
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="crm"
              placeholder="Detailed logs of client"
              defaultValue="Detailed logs of all client interactions"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="incentivestracking" className="mb-0 w-100">
              Incentives Tracking
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="incentivestracking"
              placeholder="Enter commissions/bonus"
              defaultValue="Commission: $5000, Bonus: $2000"
            />
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="bg-blue border-0 px-5 py-2 focus-none text-white rounded-3"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditSaleMember;
