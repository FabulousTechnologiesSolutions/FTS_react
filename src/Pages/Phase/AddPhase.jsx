import React from "react";

function AddPhase() {
  return (
    <div>
      <h3>Add Project</h3>
      <form action="" className="">
        <div className="row mt-4">
          <div className="col-sm-6 mb-3">
            <label htmlFor="PhaseName" className="mb-0 w-100">
              Phase Name
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="PhaseName"
              placeholder="Enter project name"
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

export default AddPhase;
