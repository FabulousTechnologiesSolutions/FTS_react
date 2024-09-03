import React from "react";

const EditPhase = () => {
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
                          <label htmlFor="PhaseName" className="mb-0 w-100">
                            Phase Name
                          </label>
                          <input
                            type="text"
                            className="form-control shadow-none focus-none py-2"
                            id="PhaseName"
                            placeholder="Enter project name"
                            defaultValue="Project Alpha"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditPhase;
