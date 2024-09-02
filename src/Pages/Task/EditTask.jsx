import React from "react";

function EditTask() {
  return (
    <div className="px-5">
      <h3>Edit Task</h3>
      <form action="" className="">
        <div className="row mt-4">
          {/* Task Name */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="TaskName" className="mb-0 w-100">
              Task Name
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="TaskName"
              placeholder="Enter task name"
              defaultValue="Develop Landing Page" 
            />
          </div>

          {/* Assigned To */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="AssignedTo" className="mb-0 w-100">
              Assigned To
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="AssignedTo"
              defaultValue="Developer" 
            >
              <option value="" disabled>
                Select assignment
              </option>
              <option value="Developer">Developer</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          {/* Related Project */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="RelatedProject" className="mb-0 w-100">
              Related Project
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="RelatedProject"
              defaultValue="Project Alpha" 
            >
              <option value="" disabled>
                Select project
              </option>
              <option value="Project Alpha">Project Alpha</option>
              <option value="Project Beta">Project Beta</option>
              <option value="Project Gamma">Project Gamma</option>
            </select>
          </div>

          {/* Priority */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="Priority" className="mb-0 w-100">
              Priority
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="Priority"
              defaultValue="High" 
            >
              <option value="" disabled>
                Select priority level
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
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
              defaultValue="2024-03-15" 
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
              defaultValue="2024-03-15"
            />
          </div>

          {/* Status */}
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
                Select status
              </option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="col-sm-12 mb-3">
            <label htmlFor="TaskDescription" className="mb-0 w-100">
             Notes
            </label>
            <textarea
              id="TaskDescription"
              className="form-control shadow-none focus-none py-2 size"
              rows={4}
              placeholder="Provide a detailed description of the task"
              defaultValue="Develop the landing page for the new website redesign, focusing on responsive design and high performance." 
            ></textarea>
          </div>


          {/* Save Button */}
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

export default EditTask;
