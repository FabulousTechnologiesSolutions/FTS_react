import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Link } from 'react-router-dom';
import Act from '../../assets/img/6.png';
import { IoIosCloseCircle } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";

function UpcomingMeetings() {
    const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the drop-list visibility
  const toggleDropList = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='position-relative'>
      <div className='d-flex align-items-center justify-content-between d-sm-none shadow bg-white py-3 px-2 rounded-3'>
            <div>
              <h6 className='mb-0'>Upcoming Meetings</h6>
            </div>
            <div>
              <button  className='border-0 bg-transparent blue'>
                <FaCaretDown onClick={toggleDropList}/>
              </button>
            </div>
            </div>
            <div className={`bg-white shadow rounded-3 p-3 drop-list ${isOpen ? '' : 'd-none'}`}>
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h6 className='mb-0'>Upcoming Meetings</h6>
                </div>
                <div>
                  <button className='border-0 bg-transparent d-sm-none blue' onClick={toggleDropList}>
                    <IoIosCloseCircle/>
                  </button>
                  <Link to="" className='font-12 d-sm-block d-none'>View all</Link>
                </div>
              </div>
              <div>
                <div className='lblue p-2 rounded-3 mt-3'>
                  <h6>Meeting Agenda</h6>
                  <div className='d-flex align-items-center'>
                    <div>
                      <p>18th November 2025 |</p>
                    </div>
                    <div className='ps-2'>
                      <p>04:00 PM</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='avatar-group-container'>
                      <AvatarGroup max={4}>
                        <Avatar alt="Remy Sharp" src={Act} className='avt' />
                        <Avatar alt="Travis Howard" src={Act} className='avt' />
                        <Avatar alt="Cindy Baker" src={Act} className='avt' />
                        <Avatar alt="Cindy Baker" src={Act} className='avt' />
                        <Avatar alt="Cindy Baker" src={Act} className='avt' />
                      </AvatarGroup>
                    </div>
                    <div className='ps-2'>
                      <Link to="" className='font-12'>See more details</Link>
                    </div>
                  </div>
                </div>
                <div className='lblue p-2 rounded-3 mt-3'>
                  <h6>Meeting Agenda</h6>
                  <div className='d-flex align-items-center'>
                    <div>
                      <p>18th November 2025 |</p>
                    </div>
                    <div className='ps-2'>
                      <p>04:00 PM</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='avatar-group-container'>
                      <AvatarGroup max={4}>
                        <Avatar alt="Remy Sharp" src={Act} className='avt' />
                        <Avatar alt="Travis Howard" src={Act} className='avt' />
                        <Avatar alt="Cindy Baker" src={Act} className='avt' />
                        <Avatar alt="Cindy Baker" src={Act} className='avt' />
                        <Avatar alt="Cindy Baker" src={Act} className='avt' />
                      </AvatarGroup>
                    </div>
                    <div className='ps-2'>
                      <Link to="" className='font-12'>See more details</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default UpcomingMeetings
