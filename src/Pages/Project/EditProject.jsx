import React from "react";

const EditProject = () => {
  return (
    <div className="px-5">
      <section>
        <div className="main">
          <div className="right">
            <div className="right-bottom">
              <div className="bottom-main">
                <div className="content">
                  <div className="container-fluid">
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
                          <label
                            htmlFor="ProjectManager"
                            className="mb-0 w-100"
                          >
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
                            <option value="Backend Development">
                              Back End Development
                            </option>
                            <option value="Backend Development">
                              Deployment
                            </option>
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
                          <label className="mb-0 w-100">
                            Assigned Developers
                          </label>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input shadow-none focus-none py-2"
                              id="Developer1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label ms-1"
                              htmlFor="Developer1"
                            >
                              Developer 1
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input shadow-none focus-none py-2"
                              id="Developer2"
                            />
                            <label
                              className="form-check-label ms-1"
                              htmlFor="Developer2"
                            >
                              Developer 2
                            </label>
                          </div>
                        </div>

                        <div className="col-sm-6 mb-3">
                          <label className="mb-0 w-100">
                            Associated Sales Team Members
                          </label>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input shadow-none focus-none py-2"
                              id="SalesTeamMember1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label ms-1"
                              htmlFor="SalesTeamMember1"
                            >
                              Sales Team Member 1
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input shadow-none focus-none py-2"
                              id="SalesTeamMember2"
                            />
                            <label
                              className="form-check-label ms-1"
                              htmlFor="SalesTeamMember2"
                            >
                              Sales Team Member 2
                            </label>
                          </div>
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

                        <div className="col-sm-6 mb-3">
                          <label
                            htmlFor="BudgetTracking"
                            className="mb-0 w-100"
                          >
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
                          <label
                            htmlFor="ProjectTimeline"
                            className="mb-0 w-100"
                          >
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
                          <label
                            htmlFor="ClientCommunication"
                            className="mb-0 w-100"
                          >
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
                          <label
                            htmlFor="RiskManagement"
                            className="mb-0 w-100"
                          >
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProject;
