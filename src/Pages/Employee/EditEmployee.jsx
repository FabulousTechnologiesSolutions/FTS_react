import React from "react";

function EditEmployee() {
  return (
    <div>
      <h3>Edit Employee</h3>
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
              defaultValue="johndoe@example.com"
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
            <label htmlFor="Category" className="mb-0 w-100">
              Category
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="Category"
              defaultValue="Web Developer"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Mobile Application Developer">
                Mobile Application Developer
              </option>
            </select>
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="Role" className="mb-0 w-100">
              Role
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="Role"
              defaultValue="Frontend"
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Full Stack">Full Stack</option>
            </select>
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="AdditionalCategory" className="mb-0 w-100">
              Additional Category
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="AdditionalCategory"
              defaultValue="Web"
            >
              <option value="" disabled>
                Select Additional Category
              </option>
              <option value="Web">Web</option>
              <option value="Mobile">Mobile</option>
              <option value="Desktop">Desktop</option>
            </select>
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="Skills" className="mb-0 w-100">
              Skills
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="Skills"
              placeholder="Enter skills (e.g., JavaScript, React, Node.js)"
              defaultValue="JavaScript, React, Node.js"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="ExperienceLevel" className="mb-0 w-100">
              Experience Level
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="ExperienceLevel"
              defaultValue="Mid-level"
            >
              <option value="" disabled>
                Select Experience Level
              </option>
              <option value="Junior">Junior</option>
              <option value="Mid-level">Mid-level</option>
              <option value="Senior">Senior</option>
            </select>
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
                  defaultChecked 
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
                  defaultChecked 
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
            <label htmlFor="Workload" className="mb-0 w-100">
              Workload Management
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="Workload"
              placeholder="Enter current workload"
              defaultValue="3 Active Projects"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="PerformanceReviews" className="mb-0 w-100">
              Performance Reviews
            </label>
            <textarea
              id="PerformanceReviews"
              className="form-control shadow-none focus-none py-2 size"
              rows={3}
              placeholder="Enter performance reviews"
              defaultValue="Consistently exceeds expectations in project delivery."
            ></textarea>
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="ProfessionalDevelopment" className="mb-0 w-100">
              Professional Development
            </label>
            <textarea
              id="ProfessionalDevelopment"
              className="form-control shadow-none focus-none py-2 size"
              rows={3}
              placeholder="Track training, certifications, and development plans"
              defaultValue="Completed React Certification, enrolled in Advanced Node.js course."
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

export default EditEmployee;
