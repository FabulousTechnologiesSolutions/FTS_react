import React from "react";

const TaskDetail = () => {
  // Sample data for the task. In a real application, this would likely come from an API call.
  const taskData = {
    taskName: "Develop Landing Page",
    assignedTo: "Developer",
    relatedProject: "Project Alpha",
    priority: "High",
    dueDate: "2024-03-15",
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
        {/* Task Name */}
        <div className="col-sm-6 mb-3">
          <strong>Task Name:</strong>
          <p>{taskData.taskName}</p>
        </div>

        {/* Assigned To */}
        <div className="col-sm-6 mb-3">
          <strong>Assigned To:</strong>
          <p>{taskData.assignedTo}</p>
        </div>

        {/* Related Project */}
        <div className="col-sm-6 mb-3">
          <strong>Related Project:</strong>
          <p>{taskData.relatedProject}</p>
        </div>

        {/* Priority */}
        <div className="col-sm-6 mb-3">
          <strong>Priority:</strong>
          <p>{taskData.priority}</p>
        </div>

        {/* Due Date */}
        <div className="col-sm-6 mb-3">
          <strong>Due Date:</strong>
          <p>{taskData.dueDate}</p>
        </div>

        {/* Status */}
        <div className="col-sm-6 mb-3">
          <strong>Status:</strong>
          <p>{taskData.status}</p>
        </div>

        {/* Task Description */}
        <div className="col-sm-12 mb-3">
          <strong>Task Description:</strong>
          <p>{taskData.taskDescription}</p>
        </div>

        {/* Task Dependencies */}
        <div className="col-sm-6 mb-3">
          <strong>Task Dependencies:</strong>
          <ul>
            {taskData.taskDependencies.map((dependency, index) => (
              <li key={index}>{dependency}</li>
            ))}
          </ul>
        </div>

        {/* Time Estimation and Tracking */}
        <div className="col-sm-6 mb-3">
          <strong>Time Estimation:</strong>
          <p>{taskData.timeEstimation}</p>
        </div>

        {/* Automated Reminders */}
        <div className="col-sm-6 mb-3">
          <strong>Automated Reminders:</strong>
          <p>{taskData.automatedReminders}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
