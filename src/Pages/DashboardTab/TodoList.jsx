import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

function TodoList() {
  // State to manage the visibility of the drop-list
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the drop-list visibility
  const toggleDropList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" position-relative">
      {/* Todo List Header (visible on small screens) */}
      <div className='d-flex align-items-center justify-content-between shadow bg-white py-3 d-sm-none px-2 rounded-3'>
        <div>
          <h6 className='mb-0'>Todo List</h6>
        </div>
        <div>
          {/* Button to open drop-list */}
          <button className='border-0 bg-transparent blue' onClick={toggleDropList}>
            <FaCaretDown />
          </button>
        </div>
      </div>

      {/* Drop-list content (conditionally rendered based on `isOpen`) */}
      <div className={`bg-white shadow rounded-3 p-3 drop-list ${isOpen ? '' : 'd-none'}`}>
        <div className='d-flex align-items-center justify-content-between'>
          <div>
            <h6 className='mb-0'>Todo List</h6>
          </div>
          <div>
            {/* Button to close drop-list on small screens */}
            <button className='border-0 bg-transparent d-sm-none blue' onClick={toggleDropList}>
              <IoIosCloseCircle />
            </button>
            {/* Link for larger screens */}
            <Link to="" className='font-12 d-sm-block d-none'>View all</Link>
          </div>
        </div>

        {/* Todo items */}
        <div>
          <div className='lblue p-2 rounded-3 mt-3'>
            <div className='d-flex'>
              <div>
                <input type="checkbox" name="" id="" />
              </div>
              <div className='ps-3'>
                <h6 className='mb-0'>Attend Meeting with Dev Team</h6>
                <div className='d-flex align-items-center'>
                  <div>
                    <p className='font-12 mb-0'>18th November 2025 |</p>
                  </div>
                  <div className='ps-2'>
                    <p className='font-12 mb-0'>04:00 PM</p>
                  </div>
                </div>
                <div className='mt-2'>
                  <button className='bg-blue text-white py-1 px-3 border-0 rounded-2 font-12'>Mark as done</button>
                </div>
              </div>
            </div>
          </div>

          <div className='lblue p-2 rounded-3 mt-3'>
            <div className='d-flex'>
              <div>
                <input type="checkbox" name="" id="" />
              </div>
              <div className='ps-3'>
                <h6 className='mb-0'>Attend Meeting with Dev Team</h6>
                <div className='d-flex align-items-center'>
                  <div>
                    <p className='font-12 mb-0'>18th November 2025 |</p>
                  </div>
                  <div className='ps-2'>
                    <p className='font-12 mb-0'>04:00 PM</p>
                  </div>
                </div>
                <div className='mt-2'>
                  <button className='bg-blue text-white py-1 px-3 border-0 rounded-2 font-12'>Mark as done</button>
                </div>
              </div>
            </div>
          </div>

          {/* New Todo Job Button */}
          <div className='mt-3'>
            <button className='bg-blue text-white py-2 w-100 px-3 border-0 rounded-2 font-12'>New Todo Job</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
