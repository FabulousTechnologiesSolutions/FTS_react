import React from "react";

function AddManager() {
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
            <div id="projects" className="d-flex">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="project1"
                  name="projects"
                  value="Project Alpha"
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
            <div id="projects" className="d-flex">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="member1"
                  name="projects"
                  value="Project Alpha"
                />
                <label className="form-check-label me-2" htmlFor="member1">
                  Member 1
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="member2"
                  name="projects"
                  value="Project Beta"
                />
                <label className="form-check-label me-2" htmlFor="member2">
                  Member 2
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="member3"
                  name="projects"
                  value="Project Gamma"
                />
                <label className="form-check-label" htmlFor="member3">
                  Member 3
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
