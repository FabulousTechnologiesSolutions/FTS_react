import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

function TodoList() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropList = () => setIsOpen(!isOpen);

  const TodoItem = ({ title, date, time }) => (
    <div className='lblue p-2 rounded-3 mt-3'>
      <div className='d-flex'>
        <input type="checkbox" />
        <div className='ps-3'>
          <h6 className='mb-0'>{title}</h6>
          <div className='d-flex align-items-center'>
            <p className='font-12 mb-0'>{date} |</p>
            <p className='font-12 mb-0 ps-2'>{time}</p>
          </div>
          <button className='bg-blue text-white py-1 px-3 mt-2 border-0 rounded-2 font-12'>Mark as done</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="position-relative">
      <div className='d-flex align-items-center justify-content-between shadow bg-white py-3 d-sm-none px-2 rounded-3'>
        <h6 className='mb-0'>Tasks</h6>
        <button className='border-0 bg-transparent blue' onClick={toggleDropList}>
          <FaCaretDown />
        </button>
      </div>

      <div className={`bg-white shadow rounded-3 p-3 drop-list ${isOpen ? '' : 'd-none'}`}>
        <div className='d-flex align-items-center justify-content-between'>
          <h6 className='mb-0'>Tasks</h6>
          <button className='border-0 bg-transparent d-sm-none blue' onClick={toggleDropList}>
            <IoIosCloseCircle />
          </button>
          <Link to="" className='font-12 d-sm-block d-none'>View all</Link>
        </div>
        
        <TodoItem title="Attend Meeting with Dev Team" date="18th November 2025" time="04:00 PM" />
        <TodoItem title="Prepare Project Presentation" date="19th November 2025" time="02:00 PM" />

      </div>
    </div>
  );
}

export default TodoList;
