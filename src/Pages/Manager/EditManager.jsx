import React from "react";

function EditManager() {
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
            <div id="projects" className="d-flex">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="project1"
                  name="projects"
                  value="Project Alpha"
                  defaultChecked  // Pre-checked based on dummy data
                />
                <label className="form-check-label me-2" htmlFor="project1">
                  Project Alpha
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="project2"
                  name="projects"
                  value="Project Beta"
                  defaultChecked  // Pre-checked based on dummy data
                />
                <label className="form-check-label me-2" htmlFor="project2">
                  Project Beta
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="project3"
                  name="projects"
                  value="Project Gamma"
                />
                <label className="form-check-label" htmlFor="project3">
                  Project Gamma
                </label>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="team-members">Team Members Managed:</label>
            <div id="team-members" className="d-flex">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="member1"
                  name="teamMembers"
                  value="John Doe"
                  defaultChecked  // Pre-checked based on dummy data
                />
                <label className="form-check-label me-2" htmlFor="member1">
                  John Doe
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="member2"
                  name="teamMembers"
                  value="Bob Johnson"
                  defaultChecked  // Pre-checked based on dummy data
                />
                <label className="form-check-label me-2" htmlFor="member2">
                  Bob Johnson
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="member3"
                  name="teamMembers"
                  value="Charlie Brown"
                />
                <label className="form-check-label" htmlFor="member3">
                  Charlie Brown
                </label>
              </div>
            </div>
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
