import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/main.css";
import "./assets/css/main2.css";
import "./assets/css/main3.css";
import Main from "./Layouts/Main";
import Dashboard from "./Pages/Dashboard";
import Employees from "./Pages/Employee/Employees";
import Settings from "./Pages/Settings";
import Reports from "./Pages/Reports";
import TimeTrackling from "./Pages/TimeTrackling";
import Communication from "./Pages/Communication";
import AddEmployee from "./Pages/Employee/AddEmployee";
import EditEmployee from "./Pages/Employee/EditEmployee";
import EmployeeDetail from "./Pages/Employee/EmployeeDetail";
import Manager from "./Pages/Manager/Manager";
import AddManager from "./Pages/Manager/AddManager";
import EditManager from "./Pages/Manager/EditManager";
import ManagerDetail from "./Pages/Manager/ManagerDetail";
import SaleMemberDetail from "./Pages/SalesTeam/SaleMemberDetail";
import SaleTeam from "./Pages/SalesTeam/SaleTeam";
import AddSaleMember from "./Pages/SalesTeam/AddSaleMember";
import EditSaleMember from "./Pages/SalesTeam/EditSaleMember";
import Client from "./Pages/Client/Client";
import AddClient from "./Pages/Client/AddClient";
import EditClient from "./Pages/Client/EditClient";
import ClientDetail from "./Pages/Client/ClientDetail";
import Project from "./Pages/Project/Project";
import AddProject from "./Pages/Project/AddProject";
import EditProject from "./Pages/Project/EditProject";
import ProjectDetail from "./Pages/Project/ProjectDetail";
import Phase from "./Pages/Phase/Phase";
import AddPhase from "./Pages/Phase/AddPhase";
import EditPhase from "./Pages/Phase/EditPhase";
import Task from "./Pages/Task/Task";
import AddTask from "./Pages/Task/AddTask";
import EditTask from "./Pages/Task/EditTask";
import TaskDetail from "./Pages/Task/TaskDetail";

function App() {
  return (
   <div>
     <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/dashboard" element={<Dashboard />} />
        
          <Route path="/settings" element={<Settings />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/time_trackling" element={<TimeTrackling />} />
          <Route path="/communication" element={<Communication />} />

          <Route path="/employees" element={<Employees />} />
          <Route path="/add_employee" element={<AddEmployee />} />
          <Route path="/edit_employee" element={<EditEmployee />} />
          <Route path="/employee_detail" element={<EmployeeDetail />} />

          <Route path="/managers" element={<Manager />} />
          <Route path="/add_manager" element={<AddManager />} />
          <Route path="/edit_manager" element={<EditManager />} />
          <Route path="/manager_detail" element={<ManagerDetail />} />

          <Route path="/sales_team" element={<SaleTeam />} />
          <Route path="/add_sale_member" element={<AddSaleMember />} />
          <Route path="/edit_sale_member" element={<EditSaleMember />} />
          <Route path="/sale_member_detail" element={<SaleMemberDetail />} />

          <Route path="/clients" element={<Client />} />
          <Route path="/add_client" element={<AddClient />} />
          <Route path="/edit_client" element={<EditClient />} />
          <Route path="/client_detail" element={<ClientDetail />} />

          <Route path="/projects" element={<Project />} />
          <Route path="/add_project" element={<AddProject />} />
          <Route path="/edit_project" element={<EditProject />} />
          <Route path="/project_detail" element={<ProjectDetail />} />

          <Route path="/phases" element={<Phase />} />
          <Route path="/add_phase" element={<AddPhase />} />
          <Route path="/edit_phase" element={<EditPhase />} />

          <Route path="/tasks" element={<Task />} />
          <Route path="/add_task" element={<AddTask />} />
          <Route path="/edit_task" element={<EditTask />} />
          <Route path="/task_detail" element={<TaskDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
