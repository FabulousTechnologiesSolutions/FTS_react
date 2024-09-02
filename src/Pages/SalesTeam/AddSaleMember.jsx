import React from "react";

function AddSaleMember() {
  return (
    <div>
      <h3>Add Sale Team</h3>

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
              <div className="form-check me-3">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="project1"
                  name="projects"
                  value="First project"
                />
                <label className="form-check-label" htmlFor="project1">
                  First Project
                </label>
              </div>
              <div className="form-check me-3">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="project2"
                  name="projects"
                  value="Second Project"
                />
                <label className="form-check-label" htmlFor="project2">
                  Second Project
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="project3"
                  name="projects"
                  value="Third Project"
                />
                <label className="form-check-label" htmlFor="project3">
                  Third Project
                </label>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="clientmanage" className="mb-0 w-100">
              Client Accounts Managed
            </label>
            <div id="clientmanage" className="d-flex">
              <div className="form-check me-3">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="client1"
                  name="Clients"
                  value="First Client"
                />
                <label className="form-check-label" htmlFor="client1">
                  First Client
                </label>
              </div>
              <div className="form-check me-3">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="client2"
                  name="Clients"
                  value="Second clients"
                />
                <label className="form-check-label" htmlFor="client2">
                  Second Client
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="client3"
                  name="Clients"
                  value="Third clients"
                />
                <label className="form-check-label" htmlFor="client3">
                  Third Client
                </label>
              </div>
            </div>
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
              placeholder="Enter commiccions/bouns"
            />
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

export default AddSaleMember;
