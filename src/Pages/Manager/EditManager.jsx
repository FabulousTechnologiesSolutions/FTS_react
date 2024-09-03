import React, { useState } from "react";
import Select from "react-select";
function EditManager() {
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
  const [selectedDOptions, setSelectedDOptions] = useState(defaultDev);
  const handleDChange = (selected) => {
    setSelectedDOptions(selected);
  };
  return (
    <div>
      <h3>Edit Manager</h3>
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
              defaultValue="Alice Smith"  // Pre-filled with dummy data
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
              defaultValue="alice.smith@example.com"  // Pre-filled with dummy data
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
              defaultValue="+1 555-678-1234"  // Pre-filled with dummy data
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
            <label htmlFor="team-members">Team Members Managed:</label>
            <Select
              defaultValue={defaultDev}
              options={devOptions}
              isMulti
              value={selectedDOptions}
              onChange={handleDChange}
              className="shadow-none focus-none "
              name="developers"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="LeadershipMetrics" className="mb-0 w-100">
              Leadership Metrics
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="LeadershipMetrics"
              placeholder="Evaluate management effectiveness (e.g., Excellent, Good)"
              defaultValue="Excellent"  // Pre-filled with dummy data
            />
          </div>

          {/* Approval Workflows */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="ApprovalWorkflows" className="mb-0 w-100">
              Approval Workflows
            </label>
            <textarea
              id="ApprovalWorkflows"
              className="form-control shadow-none focus-none py-2"
              rows={3}
              placeholder="Describe approval workflows managed by this manager"
              defaultValue="Approved budgets for 3 projects"  // Pre-filled with dummy data
            ></textarea>
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="bg-blue border-0 px-5 py-2  focus-none text-white rounded-3"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditManager;
