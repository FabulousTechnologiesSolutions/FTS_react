import React from "react";
import { FaTrash, FaEye, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Task = () => {
  const tasksData = [
    {
      id: 1,
      taskName: "Develop Landing Page",
      assignedTo: "Developer",
      relatedProject: "Project Alpha",
      priority: "High",
      startDate: "2024-04-10",
      endDate: "2024-04-10",
      status: "In Progress",
    },
    {
      id: 2,
      taskName: "API Integration",
      assignedTo: "Developer",
      relatedProject: "Project Beta",
      priority: "Medium",
      startDate: "2024-04-10",
      endDate: "2024-04-10",
      status: "Not Started",
    },
  ];

  return (
    <div>
      <h3 className="mb-1 fs-3">Lease Management</h3>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel odio
        earum quisquam neque voluptatibus ullam, reiciendis adipisci, quidem
        repellendus nulla qui expedita est. Delectus alias reiciendis
        praesentium incidunt voluptates.
      </p>
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="mb-0">Tasks</h3>
        <Link
          to="/add_task"
          className="bg-blue text-decoration-none text-white px-3 py-2 rounded-3"
        >
          Add Task
        </Link>
      </div>
      <div className="table-responsive mt-3">
        <table className="table">
          <thead>
            <tr className="align-middle">
              <th className="small">No.</th>
              <th className="small">Task Name</th>
              <th className="small">Assigned To</th>
              <th className="small">Related Project</th>
              <th className="small">Priority</th>
              <th className="small">Start Date</th>
              <th className="small">End Date</th>
              <th className="small">Status</th>
              <th className="small">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasksData.map((task, index) => (
              <tr key={task.id} className="align-middle">
                <td>{index + 1}</td>
                <td className="small">{task.taskName}</td>
                <td className="small">{task.assignedTo}</td>
                <td className="small">{task.relatedProject}</td>
                <td className="small">{task.priority}</td>
                <td className="small">{task.startDate}</td>
                <td className="small">{task.endDate}</td>
                <td className="small">{task.status}</td>
                <td className="small">
                  <div className="d-flex">
                    <Link to="/task_detail" className="mx-1 text-blue">
                      <FaEye />
                    </Link>
                    <Link to="/edit_task" className="mx-1 text-blue">
                      <FaPencilAlt />
                    </Link>
                    <Link to="#" className="mx-1 text-blue">
                      <FaTrash />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task;
