import React from "react";

function EditSaleMember() {
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
            <div id="projects" className="d-flex">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="project1"
                  name="projects"
                  value="First Project"
                  defaultChecked
                />
                <label className="form-check-label me-2" htmlFor="project1">
                  First Project
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="project2"
                  name="projects"
                  value="Second Project"
                  defaultChecked
                />
                <label className="form-check-label me-2" htmlFor="project2">
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
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="client1"
                  name="Clients"
                  value="First Client"
                  defaultChecked
                />
                <label className="form-check-label me-2" htmlFor="client1">
                  First Client
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="client2"
                  name="Clients"
                  value="Second Client"
                  defaultChecked
                />
                <label className="form-check-label me-2" htmlFor="client2">
                  Second Client
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="client3"
                  name="Clients"
                  value="Third Client"
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
