import React from "react";

const TaskDetail = () => {
  // Sample data for the task. In a real application, this would likely come from an API call.
  const taskData = {
    taskName: "Develop Landing Page",
    assignedTo: "Developer",
    relatedProject: "Project Alpha",
    priority: "High",
    startDate: "2024-03-15",
    endDate: "2024-03-15",
    status: "In Progress",
    taskDescription:
      "Develop the landing page for the new website redesign, focusing on responsive design and high performance.",
    taskDependencies: ["Design Mockup Approval", "Content Finalization"],
    timeEstimation: "40 hours",
    automatedReminders: "2 Days Before",
  };

  return (
    <div className="px-5">
      <h3>Task Detail</h3>
      <div className="row mt-4">
        <div className="col-sm-6 mb-3">
          <strong>Task Name:</strong>
          <p>{taskData.taskName}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Assigned To:</strong>
          <p>{taskData.assignedTo}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Related Project:</strong>
          <p>{taskData.relatedProject}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Priority:</strong>
          <p>{taskData.priority}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Start Date:</strong>
          <p>{taskData.startDate}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>End Date:</strong>
          <p>{taskData.endDate}</p>
        </div>

        <div className="col-sm-6 mb-3">
          <strong>Status:</strong>
          <p>{taskData.status}</p>
        </div>

        <div className="col-sm-12 mb-3">
          <strong>Task Notes:</strong>
          <p>{taskData.taskDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
