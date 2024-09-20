import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import CalendarComponent from './ScheduleTab/CalendarComponent';
import ScheduleTask from './ScheduleTab/ScheduleTask';

function Schedule() {
  return (
    <div>
      <div>
        <h4>Schedule</h4>
        <p>Lorem ipsum dolor sit amet consectetur. Tempor sagittis </p>
      </div>
      <div className="row">
        <div className="col-xl-4">
           <div className="row">
           <div className="col-xl-12 col-lg-6">
                <div className='shadow rounded-4'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                    </LocalizationProvider>
                </div>
           </div>
            <div className="col-xl-12 col-lg-6">
                <div className='mt-xl-3 mt-lg-0 mt-3'>
                    <ScheduleTask/>
                </div>
            </div>
           </div>
        </div>
        <div className="col-xl-8 mt-xl-0 mt-3">
            <div>
                <CalendarComponent/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
