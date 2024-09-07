import React from 'react'
import { HiMiniUsers } from "react-icons/hi2";
import { IoTrendingUpSharp } from "react-icons/io5";
import { HiArrowTrendingDown } from "react-icons/hi2";
import LineFilledGraph from './Graph/LineFilledGraph';
import { CiSliderHorizontal } from "react-icons/ci";
import DoughnutGraph from './Graph/DoughnutGraph';
import { GoPackage } from "react-icons/go";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";


function Dashboard() {
  return (
    <div>
        <div>
          <h4>Dashboard</h4>
          <p>Dashboard where you can see statistics of overall app.</p>
        </div>
        <div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3">
              <div className='bg-white p-2 shadow rounded-3'>
                  <div className='d-flex align-items-center justify-content-between'>
                      <div>
                          <p className='mb-0 font-12'>Total Employees</p>
                      </div>
                      <div>
                        <HiMiniUsers className='blue lblue p-2 fs-1 rounded-3'/>
                      </div>
                  </div>
                  <div>
                      <h4>60</h4>
                  </div>
                  <div className='d-flex align-items-center '>
                     <div>
                        <span className='text-info font-12'><IoTrendingUpSharp className='me-1'/>85%</span>
                     </div>
                     <div>
                      <span className='text-secondary ms-1 font-12'>Up from yesterday</span>
                     </div>
                  </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3">
              <div className='bg-white p-2 shadow rounded-3'>
                  <div className='d-flex align-items-center justify-content-between'>
                      <div>
                          <p className='mb-0 font-12'>Total Clients</p>
                      </div>
                      <div>
                        <HiMiniUsers className='blue lblue p-2 fs-1 rounded-3'/>
                      </div>
                  </div>
                  <div>
                      <h4>35</h4>
                  </div>
                  <div className='d-flex align-items-center '>
                     <div>
                        <span className='text-info font-12'><IoTrendingUpSharp className='me-1'/>85%</span>
                     </div>
                     <div>
                      <span className='text-secondary ms-1 font-12'>Up from yesterday</span>
                     </div>
                  </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3">
              <div className='bg-white p-2 shadow rounded-3'>
                  <div className='d-flex align-items-center justify-content-between'>
                      <div>
                          <p className='mb-0 font-12'>Total No.of Projects</p>
                      </div>
                      <div>
                        <GoPackage className='blue lblue p-2 fs-1 rounded-3'/>
                      </div>
                  </div>
                  <div>
                      <h4>58</h4>
                  </div>
                  <div className='d-flex align-items-center '>
                     <div>
                        <span className='text-info font-12'><IoTrendingUpSharp className='me-1'/>85%</span>
                     </div>
                     <div>
                      <span className='text-secondary ms-1 font-12'>Up from yesterday</span>
                     </div>
                  </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3">
              <div className='bg-white p-2 shadow rounded-3'>
                  <div className='d-flex align-items-center justify-content-between'>
                      <div>
                          <p className='mb-0 font-12'>In Progress Projects</p>
                      </div>
                      <div>
                        <BsBoxArrowInUpRight className='blue lblue p-2 fs-1 rounded-3'/>
                      </div>
                  </div>
                  <div>
                      <h4>35</h4>
                  </div>
                  <div className='d-flex align-items-center '>
                     <div>
                        <span className='text-danger font-12'><HiArrowTrendingDown className='me-1'/>85%</span>
                     </div>
                     <div>
                      <span className='text-secondary ms-1 font-12'>Up from yesterday</span>
                     </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-8 mb-3">
                <div className='bg-white shadow p-2 rounded-3'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      <h5>Completed Projects</h5>
                    </div>
                    <div>
                      <CiSliderHorizontal/>
                    </div>
                  </div>
                   <div className='line'>
                      <LineFilledGraph/>   
                   </div>
                </div>
            </div>
            <div className="col-lg-4 mb-3">
            <div className='bg-white shadow p-2 rounded-3 h-100'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      <h5>Projects Progress</h5>
                    </div>
                    <div>
                      <CiSliderHorizontal/>
                    </div>
                  </div>
                   <div className='line'>
                        <DoughnutGraph/>
                   </div>
                </div>
            </div>
          </div>
          <div className="row">
              <div className="col-lg-8 mb-3">

              </div>
              <div className="col-lg-4 mb-3">
                <div className='shadow bg-white p-3 rounded-3'>
                  <div className='d-flex align-items-center justify-content-between'>
                      <div>
                        <h5>Projects Progress</h5>
                      </div>
                      <div>
                        <CiSliderHorizontal/>
                      </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                          <div>
                            <GoPackage className='blue lblue p-2 fs-1 rounded-3'/>
                          </div>
                          <div className='ps-2'>
                            <h6 className='mb-0'>Total Revenue</h6>
                            <p className='text-success mb-0'>60%+</p>
                          </div>
                        </div>
                        <div>
                            <IoChevronForward/>
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
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard