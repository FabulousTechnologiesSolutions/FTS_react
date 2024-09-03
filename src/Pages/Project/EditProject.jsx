import React, { useState } from "react";
import Select from "react-select";

const EditProject = () => {
  const devOptions = [
    { value: "Developer 1", label: "Developer 1" },
    { value: "Developer 2", label: "Developer 2" },
    { value: "Developer 3", label: "Developer 3" },
    { value: "Developer 4", label: "Developer 4" },
    { value: "Developer 5", label: "Developer 5" },
    { value: "Developer 6", label: "Developer 6" },
    { value: "Developer 7", label: "Developer 7" },
  ];
  const defaultDev = [
    { value: "Developer 2", label: "Developer 2" },
    { value: "Developer 6", label: "Developer 6" },
  ];
  const [selectedOptions, setSelectedOptions] = useState(defaultDev);
  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  const saleOptions = [
    { value: "Sale Member 1", label: "Sale Member 1" },
    { value: "Sale Member 2", label: "Sale Member 2" },
    { value: "Sale Member 3", label: "Sale Member 3" },
    { value: "Sale Member 4", label: "Sale Member 4" },
    { value: "Sale Member 5", label: "Sale Member 5" },
    { value: "Sale Member 6", label: "Sale Member 6" },
    { value: "Sale Member 7", label: "Sale Member 7" },
  ];
  const defaultSale = [
    { value: "Sale Member 2", label: "Sale Member 2" },
    { value: "Sale Member 6", label: "Sale Member 6" },
  ];
  const [selectedSOptions, setSelectedSOptions] = useState(defaultSale);

  const handleSChange = (selected) => {
    setSelectedSOptions(selected);
  };
  return (
    <div>
      <h3>Edit Project</h3>
      <form action="" className="">
        <div className="row mt-4">
          <div className="col-sm-6 mb-3">
            <label htmlFor="ProjectName" className="mb-0 w-100">
              Project Name
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="ProjectName"
              placeholder="Enter project name"
              defaultValue="Project Alpha"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="ClientName" className="mb-0 w-100">
              Client Name
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="ClientName"
              placeholder="Enter client name"
              defaultValue="Acme Corporation"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="ProjectManager" className="mb-0 w-100">
              Project Manager
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="ProjectManager"
              defaultValue="Manager1"
            >
              <option value="" disabled>
                Select project manager
              </option>
              <option value="Manager1">Manager 1</option>
              <option value="Manager2">Manager 2</option>
              <option value="Manager3">Manager 3</option>
            </select>
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="StartDate" className="mb-0 w-100">
              Start Date
            </label>
            <input
              type="date"
              className="form-control shadow-none focus-none py-2"
              id="StartDate"
              defaultValue="2024-01-01"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="EndDate" className="mb-0 w-100">
              End Date
            </label>
            <input
              type="date"
              className="form-control shadow-none focus-none py-2"
              id="EndDate"
              defaultValue="2024-12-31"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="Phases" className="mb-0 w-100">
              Current Phase
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="ProjectManager"
            >
              <option value="" disabled hidden selected>
                Select phase
              </option>
              <option value="Design">Design</option>
              <option value="Front End Development">
                Front End Development
              </option>
              <option value="Backend Development">Back End Development</option>
              <option value="Backend Development">Deployment</option>
            </select>
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="Status" className="mb-0 w-100">
              Status
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="Status"
              defaultValue="In Progress"
            >
              <option value="" disabled>
                Select project status
              </option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>

          <div className="col-sm-6 mb-3">
            <label className="mb-0 w-100">Assigned Developers</label>
            <Select
              defaultValue={defaultDev}
              options={devOptions}
              isMulti
              value={selectedOptions}
              onChange={handleChange}
              className="shadow-none focus-none "
              name="developers"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label className="mb-0 w-100">Associated Sales Team Members</label>
            <Select
              defaultValue={defaultSale}
              options={saleOptions}
              isMulti
              value={selectedSOptions}
              onChange={handleSChange}
              className="shadow-none focus-none "
              name="sale_members"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="Documents" className="mb-0 w-100">
              Documents/Files
            </label>
            <input
              type="file"
              id="Documents"
              className="form-control shadow-none focus-none py-2"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="BudgetTracking" className="mb-0 w-100">
              Budget Tracking
            </label>
            <input
              type="number"
              className="form-control shadow-none focus-none py-2"
              id="BudgetTracking"
              placeholder="Enter budget details"
              defaultValue="50000"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="ProjectTimeline" className="mb-0 w-100">
              Project Timeline
            </label>
            <textarea
              id="ProjectTimeline"
              className="form-control shadow-none focus-none py-2 size"
              rows={3}
              placeholder="Describe project phases and tasks"
              defaultValue="Design: 1 month, Frontend Development: 2 months, Backend Development: 2 months"
            ></textarea>
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="ClientCommunication" className="mb-0 w-100">
              Client Communication Logs
            </label>
            <textarea
              id="ClientCommunication"
              className="form-control shadow-none focus-none py-2 size"
              rows={3}
              placeholder="Log interactions with the client"
              defaultValue="Kickoff meeting held on 2024-01-02. Weekly updates provided every Monday."
            ></textarea>
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="RiskManagement" className="mb-0 w-100">
              Risk Management
            </label>
            <textarea
              id="RiskManagement"
              className="form-control shadow-none focus-none py-2 size"
              rows={3}
              placeholder="Document risks and mitigation strategies"
              defaultValue="Potential delay due to dependency on external API integration. Mitigation: Early engagement with API provider."
            ></textarea>
          </div>

          <div className="col-12 mb-3">
            <label htmlFor="Description" className="mb-0 w-100">
              Description
            </label>
            <textarea
              id="Description"
              className="form-control shadow-none focus-none py-2 size"
              rows={4}
              placeholder="Enter detailed project description"
              defaultValue="This project involves the complete redesign and development of the Acme Corporation's website."
            ></textarea>
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
};

export default EditProject;
