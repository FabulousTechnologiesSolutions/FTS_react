import React from "react";

function AddClient() {
  return (
    <div>
      <h3>Add Client</h3>
      <form action="" className="">
        <div className="row mt-4">
          <div className="col-sm-6 mb-3">
            <label htmlFor="client-name" className="mb-0 w-100">
              Client Name:
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="client-name"
              placeholder="Enter client's name"
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="industry" className="mb-0 w-100">
              Industry/Business Type:
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="industry"
              placeholder="Enter client's industry or business type"
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="email" className="mb-0 w-100">
              Email
            </label>
            <input
              type="email"
              className="form-control shadow-none focus-none py-2"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="phone" className="mb-0 w-100">
              Phone
            </label>
            <input
              type="tel"
              className="form-control shadow-none focus-none py-2"
              id="phone"
              placeholder="Enter phone number"
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
            <label htmlFor="payment-status" className="mb-0 w-100">
              Payment Status:
            </label>
            <select
              id="payment-status"
              className="form-control shadow-none focus-none py-2"
              name="payment-status"
            >
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="contract-renewal" className="mb-0 w-100">
              Contract Renewal Alerts:
            </label>
            <input
              type="text"
              id="contract-renewal"
              className="form-control shadow-none focus-none py-2"
              name="contract-renewal"
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="client-portal" className="mb-0 w-100">
              Client Portal:
            </label>
            <input
              type="url"
              className="form-control shadow-none focus-none py-2"
              id="client-portal"
              placeholder="Client portal URL"
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="contract-details" className="mb-0 w-100">
              Contract Details:
            </label>
            <textarea
              id="contract-details"
              className="form-control shadow-none focus-none py-2 size"
              name="contract-details"
              rows={3}
              placeholder="Document contract terms and details"
            ></textarea>
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="client-satisfaction" className="mb-0 w-100">
              Client Satisfaction Surveys:
            </label>
            <textarea
              id="client-satisfaction"
              className="form-control shadow-none focus-none py-2 size"
              name="client-satisfaction"
              rows={3}
              placeholder="Notes on client satisfaction surveys"
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

export default AddClient;
