import React from "react";

function EditClient() {
  return (
    <div>
      <h3>Edit Client</h3>
      <form action="" className="">
        <div className="row mt-4">
          <div className="col-sm-6 mb-3">
            <label htmlFor="ClientName" className="mb-0 w-100">
              Client Name
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="ClientName"
              placeholder="Client Name"
              defaultValue="Acme Corporation"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="Industry" className="mb-0 w-100">
              Industry/Business Type
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="Industry"
              placeholder="Industry/Business Type"
              defaultValue="Manufacturing"
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
              defaultValue="contact@acme.com"
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
              defaultValue="+1 555-123-4567"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="projects" className="mb-0 w-100">
              Projects Assigned
            </label>
            <div id="projects" className="d-flex">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-none focus-none"
                  id="project1"
                  name="projects"
                  value="Project Alpha"
                  defaultChecked // Pre-checked based on dummy data
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
                  defaultChecked // Pre-checked based on dummy data
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
            <label htmlFor="PaymentStatus" className="mb-0 w-100">
              Payment Status
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="PaymentStatus"
              defaultValue="Paid"
            >
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="ContractRenewalAlerts" className="mb-0 w-100">
              Contract Renewal Alerts
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="ContractRenewalAlerts"
              placeholder="Notify when contracts are nearing expiration"
              defaultValue="Next renewal in 6 months"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="ClientPortal" className="mb-0 w-100">
              Client Portal
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="ClientPortal"
              defaultValue="Enabled"
            >
              <option value="Enabled">Enabled</option>
              <option value="Disabled">Disabled</option>
            </select>
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="ContractDetails" className="mb-0 w-100">
              Contract Details
            </label>
            <textarea
              id="ContractDetails"
              className="form-control shadow-none focus-none py-2"
              rows={3}
              placeholder="Document contract terms and details"
              defaultValue="Contract signed for 2 years, renewable annually."
            ></textarea>
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="ClientSatisfactionSurveys" className="mb-0 w-100">
              Client Satisfaction Surveys
            </label>
            <textarea
              id="ClientSatisfactionSurveys"
              className="form-control shadow-none focus-none py-2"
              rows={3}
              placeholder="Gauge client satisfaction at various milestones"
              defaultValue="Survey scheduled after Project Beta completion"
            ></textarea>
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="description" className="mb-0 w-100">
              Description:
            </label>
            <textarea
              id="description"
              className="form-control shadow-none focus-none py-2 size"
              name="description"
              rows={4}
              placeholder="Additional client notes or details"
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
}

export default EditClient;
