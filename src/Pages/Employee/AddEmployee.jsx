import React from "react";
import Select from "react-select";

function AddEmployee() {
  const projectOptions = [
    { value: "Project 1", label: "Project 1" },
    { value: "Project 2", label: "Project 2" },
    { value: "Project 3", label: "Project 3" },
    { value: "Project 4", label: "Project 4" },
    { value: "Project 5", label: "Project 5" },
    { value: "Project 6", label: "Project 6" },
    { value: "Project 7", label: "Project 7" },
  ];
  return (
    <div>
      <h3>Add Employee</h3>
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
            <label htmlFor="CNIC" className="mb-0 w-100">
              CNIC
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="CNIC"
              placeholder="Enter CNIC"
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="Category" className="mb-0 w-100">
              Category
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="Category"
            >
              <option value="" disabled selected>
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
            >
              <option value="" disabled selected>
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
            >
              <option value="" disabled selected>
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
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="ExperienceLevel" className="mb-0 w-100">
              Experience Level
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="ExperienceLevel"
            >
              <option value="" disabled selected>
                Select Experience Level
              </option>
              <option value="Junior">Junior</option>
              <option value="Mid-level">Mid-level</option>
              <option value="Senior">Senior</option>
            </select>
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
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="projects" className="mb-0 w-100">
              Projects Assigned
            </label>
            <Select
              options={projectOptions}
              isMulti
              className="border-1 focus-none multi-sel"
              name="projects"
            />
          </div>
     
          <div className="col-sm-6 mb-3">
            <label htmlFor="Picture" className="mb-0 w-100">
              Picture
            </label>
            <input
              type="file"
              className="form-control shadow-none focus-none py-2"
              id="Picture"
              accept="image/*"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="AgreementPDF" className="mb-0 w-100">
              Agreement PDF
            </label>
            <input
              type="file"
              className="form-control shadow-none focus-none py-2"
              id="AgreementPDF"
              accept="application/pdf"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="Salary" className="mb-0 w-100">
              Salary
            </label>
            <input
              type="number"
              className="form-control shadow-none focus-none py-2"
              id="Salary"
              placeholder="Enter salary"
            />
          </div>

          {/* Offer Letter */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="OfferLetter" className="mb-0 w-100">
              Offer Letter
            </label>
            <input
              type="file"
              className="form-control shadow-none focus-none py-2"
              id="OfferLetter"
              accept="application/pdf"
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
            ></textarea>
          </div>
<div className="col-sm-6 mb-3">
            <label htmlFor="ProbationAgreement" className="mb-0 w-100">
              Probation Agreement (Text or PDF)
            </label>
            <textarea
              id="ProbationAgreement"
              className="form-control shadow-none focus-none py-2 size"
              rows={3}
              placeholder="Enter probation agreement text or upload PDF"
            ></textarea>
            <input
              type="file"
              className="form-control shadow-none focus-none py-2 mt-2"
              id="ProbationAgreementFile"
              accept="application/pdf"
            />
          </div>

          <div class="col-12">
            <button
              type="submit"
              class="bg-blue border-0 px-5 py-2  focus-none text-white rounded-3"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
