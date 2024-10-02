import React, { useState } from 'react';
import { CiSliderHorizontal } from "react-icons/ci";
import DoughnutGraph from './Graph/DoughnutGraph';
import { GoPackage } from "react-icons/go";
import { IoChevronForward } from "react-icons/io5";
import ActivityTab from './DashboardTab/ActivityTab';
import { BsThreeDotsVertical } from "react-icons/bs";
import SunFog from '../../src/assets/img/sun-fog.png'

import { CiFilter } from "react-icons/ci";
import { AiOutlineExport } from "react-icons/ai";
import TodoList from './DashboardTab/TodoList';
import UpcomingMeetings from './DashboardTab/UpcomingMeetings';
import { Link } from 'react-router-dom';



function Dashboard() {
  return (
    <div>
      <div>
        <h4>Dashboard</h4>
        <p>Dashboard where you can see statistics of overall app.</p>
      </div>
      <div>
        <div className="row">
          <div className="col-lg-8 mb-3">
            <div className="row">
              <div className="col-xxl-4 mb-3">
                  <div className='bg-white p-3 rounded-3 shadow'>
                    <div className='d-flex align-items-center'>
                      <div>
                        <img src={SunFog} alt="" className='fog-img'/>
                      </div>
                      <div className='d-sm-none ps-2 '>
                        <p className='mb-0 font-14'>Today</p>
                        <p className='mb-0 font-14'>18th November 2024</p>
                      </div>
                    </div>
                    <div className='d-flex align-items-end justify-content-between'>
                      <div className='mt-3'>
                        <p className='text-grey2 mb-0'>8:02:09 AM</p>
                        <p className='text-grey2 mb-0'>Realtime insight</p>
                      </div>
                      <div className='d-sm-none'>
                      <Link to="/schedule" className='rounded-2 font-14'>View Calendar</Link>
                      </div>
                    </div>
                    <div className='d-sm-block d-none mt-2'>
                      <p>Today</p>
                      <p>18th November 2024</p>
                    </div>
                    <div className='d-sm-block d-none'>
                      <Link to="/schedule" className='bg-blue w-100 border-0 py-2 d-inline-block text-center text-decoration-none px-2 rounded-2 text-white'>View Calendar</Link>
                    </div>
                  </div>
              </div>
              <div className="col-xxl-4 col-lg-6 mb-3">
              <UpcomingMeetings/>
              </div>
              <div className="col-xxl-4 col-lg-6 mb-3">
                <TodoList/>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className='d-sm-flex align-items-center justify-content-between my-3'>
                  <div>
                    <h5 className='mb-0'>Reports</h5>
                  </div>
                  <div className='d-flex align-items-center justify-content-between mt-sm-0 mt-3'>
                    <div className='border border-primary d-flex align-items-center py-2 px-2 rounded-3'>
                       <CiFilter className='fs-4 blue'/>
                        <select name="" id="" className='border-0 w-100 blue'>
                          <option value="">Last Month</option>
                          <option value="">Last week</option>
                        </select>
                    </div>
                    <div className='ps-2'>
                        <button className=' border border-primary bg-white py-2 px-3 rounded-3 blue'><AiOutlineExport className='blue me-2'/>Export</button>
                    </div>
                  </div>
                </div>
                <h6>Recent Projects</h6>
                <div className='table-responsive'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th className='bg-dark'>No.</th>
                        <th className='bg-dark'>Project Name</th>
                        <th className='bg-dark'>Employee Name</th>
                        <th className='bg-dark'>Deadline</th>
                        <th className='bg-dark'>PM Name</th>
                        <th className='bg-dark'>Phase</th>
                        <th className='bg-dark'>Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='align-middle'>
                        <td>01</td>
                        <td>Project Name here</td>
                        <td>Employee1</td>
                        <td>07/03/2024</td>
                        <td>Awais</td>
                        <td>Move to UI/UX</td>
                        <td><p className='text-success new text-center mb-0 rounded-2 py-1'>New</p></td>
                      </tr>
                      <tr className='align-middle'>
                        <td>01</td>
                        <td>Project Name here</td>
                        <td>Employee1</td>
                        <td>07/03/2024</td>
                        <td>Awais</td>
                        <td>Move to UI/UX</td>
                        <td><p className='lblue blue text-center mb-0 rounded-2 py-1'>Completed</p></td>
                      </tr>
                      <tr className='align-middle'>
                        <td>01</td>
                        <td>Project Name here</td>
                        <td>Employee1</td>
                        <td>07/03/2024</td>
                        <td>Awais</td>
                        <td>Move to UI/UX</td>
                        <td><p className='lred text-danger text-center mb-0 rounded-2 py-1'>Cancelled</p></td>
                      </tr>
                      <tr className='align-middle'>
                        <td>01</td>
                        <td>Project Name here</td>
                        <td>Employee1</td>
                        <td>07/03/2024</td>
                        <td>Awais</td>
                        <td>Move to UI/UX</td>
                        <td><p className='lprp text-center mb-0 rounded-2 py-1'>Blocked</p></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-6 mb-3">
                <div className='bg-white shadow p-2 rounded-3 h-100'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      <h5>Projects Progress</h5>
                    </div>
                    <div>
                      <CiSliderHorizontal />
                    </div>
                  </div>
                  <div className='line'>
                    <DoughnutGraph />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className='shadow bg-white p-4 rounded-3 h-100'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      <h5>Projects Progress</h5>
                    </div>
                    <div>
                      <CiSliderHorizontal />
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between mt-4'>
                    <div className='d-flex align-items-center'>
                      <div>
                        <GoPackage className='blue lblue p-2 fs-1 rounded-3' />
                      </div>
                      <div className='ps-2'>
                        <h6 className='mb-0'>Total Revenue</h6>
                        <p className='text-success mb-0'>60%+</p>
                      </div>
                    </div>
                    <div>
                      <IoChevronForward />
                    </div>
                  </div>
                  <div className='mt-3'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div>
                        <p className='mb-0'>UI/UX</p>
                      </div>
                      <div>
                        <p className='mb-0'>20%</p>
                      </div>
                    </div>
                    <div>
                      <p className='progress-line'></p>
                    </div>
                  </div>
                  <div className='mt-3'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div>
                        <p className='mb-0'>Frontend</p>
                      </div>
                      <div>
                        <p className='mb-0'>60%</p>
                      </div>
                    </div>
                    <div>
                      <p className='progress-line2'></p>
                    </div>
                  </div>
                  <div className='mt-3'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div>
                        <p className='mb-0'>Backend</p>
                      </div>
                      <div>
                        <p className='mb-0'>40%</p>
                      </div>
                    </div>
                    <div>
                      <p className='progress-line3'></p>
                    </div>
                  </div>
                  <div className='mt-3'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div>
                        <p className='mb-0'>Testing</p>
                      </div>
                      <div>
                        <p className='mb-0'>40%</p>
                      </div>
                    </div>
                    <div>
                      <p className='progress-line3'></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="col-lg-4">
              <div className='bg-white shadow p-3 rounded-2 d-sm-block d-none'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div>
                    <h4>Admin Feed</h4>
                  </div>
                  <div>
                    <BsThreeDotsVertical/>
                  </div>
                </div>
                <ActivityTab/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard