import React from "react";
import Select from "react-select";

function AddManager() {
  
const projectOptions = [
  { value: "Project 1", label: "Project 1" },
  { value: "Project 2", label: "Project 2" },
  { value: "Project 3", label: "Project 3" },
  { value: "Project 4", label: "Project 4" },
  { value: "Project 5", label: "Project 5" },
  { value: "Project 6", label: "Project 6" },
  { value: "Project 7", label: "Project 7" },
];

const devOptions = [
  { value: "Developer 1", label: "Developer 1" },
  { value: "Developer 2", label: "Developer 2" },
  { value: "Developer 3", label: "Developer 3" },
  { value: "Developer 4", label: "Developer 4" },
  { value: "Developer 5", label: "Developer 5" },
  { value: "Developer 6", label: "Developer 6" },
  { value: "Developer 7", label: "Developer 7" },
];
  return (
    <div>
      <h3>Add Manager</h3>
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
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="projects" className="mb-0 w-100">
              Current Projects
            </label>
            <Select
              options={projectOptions}
              isMulti
              className="border-1 focus-none multi-sel"
              name="projects"
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="team-members">Team Members Managed:</label>
            <Select
              options={devOptions}
              isMulti
              className="border-1 focus-none multi-sel"
              name="projects"
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

export default AddManager;
