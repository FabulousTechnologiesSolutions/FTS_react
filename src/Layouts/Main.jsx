import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/dashboard-logo.png";
import { IoMdLogOut } from "react-icons/io";
import profile from "../assets/img/profile.png";
import bell from "../assets/img/bell.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import {
  FaUsers,
  FaUserTie,
  FaChartLine,
  FaHandshake,
  FaProjectDiagram,
  FaTasks,
  FaLayerGroup,
  FaCogs,
  FaFileAlt,
  FaClock,
  FaComments,
} from "react-icons/fa";

function Main() {
  const [isLeftVisible, setIsLeftVisible] = useState(false);

  const toggleLeftDisplay = () => {
    setIsLeftVisible(!isLeftVisible);
  };

  const hideLeftDisplay = () => {
    setIsLeftVisible(false);
  };


  function isActive(routes) {
    const location = useLocation();
    return routes.includes(location.pathname) ? "active" : "";
  }
  return (
    <section>
      <div className="main">
        <div className={isLeftVisible ? "left d-block" : "left d-none"}>
          <div className="left-top">
            <div className="d-flex align-items-center justify-content-end">
              <IoCloseCircleSharp
                className="d-md-none hidesidebar fs-4 text-white pointer"
                onClick={hideLeftDisplay}
              />
            </div>
            <Link to="/" href="dashboard.html" className="logodiv px-4">
              <img src={logo} alt="" className="w-100" />
            </Link>
          </div>
          <div className="left-mid">
            <div className="list ">
              <ul>
                <li>
                  <Link to="/dashboard" className={`sidelink ${isActive("/dashboard")}`}>
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">Dashboard</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/employees"
                    className={`sidelink ${isActive(["/employees", "/add_employee", "/edit_employee",, "/employee_detail"])}`}
                  >
                    <div className="d-flex align-items-center">
                      <FaUsers className="sideicon me-2" />
                      <p className="mb-0">Employees</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/managers"
                    className={`sidelink ${isActive(["/managers", "/add_manager", "/edit_manager", "/manager_detail"])}`}

                  >
                    <div className="d-flex align-items-center">
                      <FaUserTie className="sideicon me-2" />
                      <p className="mb-0">Managers</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/sales_team"
                    className={`sidelink ${isActive(["/sales_team", "/add_sale_member", "/edit_sale_member", "/sale_member_detail"])}`}
                  >
                    <div className="d-flex align-items-center">
                      <FaChartLine className="sideicon me-2" />
                      <p className="mb-0">Sales Team</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/clients"
                    className={`sidelink ${isActive(["/clients", "/add_client", "/edit_client", "/client_detail"])}`}
                  >
                    <div className="d-flex align-items-center">
                      <FaHandshake className="sideicon me-2" />
                      <p className="mb-0">Clients</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/projects"
                    className={`sidelink ${isActive(["/projects", "/add_project", "/edit_project", "/project_detail"])}`}
                  >
                    <div className="d-flex align-items-center">
                      <FaProjectDiagram className="sideicon me-2" />
                      <p className="mb-0">Projects</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/all_projects"
                    className={`sidelink ${isActive(["/all_projects","/tasks", "/add_task", "/edit_task", "/task_detail"])}`}
                  >
                    <div className="d-flex align-items-center">
                      <FaTasks className="sideicon me-2" />
                      <p className="mb-0">Tasks</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/phases"
                    className={`sidelink ${isActive(["/phases", "/add_phase", "/edit_phase", "/phase_detail"])}`}
                  >
                    <div className="d-flex align-items-center">
                      <FaLayerGroup className="sideicon me-2" />
                      <p className="mb-0">Phases</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/settings"
                    className={`sidelink ${isActive("/settings")}`}
                  >
                    <div className="d-flex align-items-center">
                      <FaCogs className="sideicon me-2" />
                      <p className="mb-0">Settings</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/reports"
                    className={`sidelink ${isActive("/reports")}`}
                  >
                    <div className="d-flex align-items-center">
                      <FaFileAlt className="sideicon me-2" />
                      <p className="mb-0">Reports & Analytics</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/time_tracking"
                    className={`sidelink ${isActive("/time_tracking")}`}
                  >
                    <div className="d-flex align-items-center">
                      <FaClock className="sideicon me-2" />
                      <p className="mb-0">Time Tracking</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/communication"
                    className={`sidelink ${isActive("/communication")}`}
                  >
                    <div className="d-flex align-items-center">
                      <FaComments className="sideicon me-2" />
                      <p className="mb-0">Communication Tools</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="left-bottom">
            <Link to="/" href="signin.html" className="logouts">
              <div className="d-flex align-items-center justify-content-center">
                <IoMdLogOut className="me-2" />
                <p className="mb-0">Logout</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="right-top input-shadow w-100">
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center">
                <span
                  className="me-2 tog d-flex bg-blue align-items-center d-md-none pointer"
                  onClick={toggleLeftDisplay}
                >
                  <GiHamburgerMenu />
                </span>
              </div>
              <div className=" d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <Link to="/" href="notification.html">
                    <img src={bell} alt="user" className="bellimg me-2" />
                  </Link>
                  <div>
                    <div className="dropdown d-flex justify-content-between w-100 align-items-center">
                      <Link
                        to="/"
                        href="#"
                        className="mb-0 text-decoration-none d-flex align-items-end"
                      >
                        <div className="me-2 me-sm-0">
                          <img src={profile} alt="" className="img-wade" />
                        </div>
                        <div className="ms-2 d-none d-sm-block">
                          <h6 className="mb-0 l-h fw-medium text-dark">
                            Wade Warren
                          </h6>
                          <span className="font-12 mb-0 text-secondary">
                            wade.warren@mail.com
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-bottom">
            <div className="bottom-main">
              <div className="content ">
                <div className="container-fluid">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
