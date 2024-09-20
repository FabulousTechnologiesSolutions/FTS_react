import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Act from "../../assets/img/6.png"

export default function ActivityTab() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="tabs example">
            <Tab label="Activity Feed" value="1" className='font-14' />
            <Tab label="Mentions" value="2" className='font-14'/>
          </TabList>
        </Box>
        <TabPanel value="1" className='p-0 pt-3'>
            <div className='d-flex align-items-center mb-2'>
                <div>
                    <img src={Act} alt="" />
                </div>
                <div className='ps-2'>
                    <div className='d-flex align-items-center'>
                        <p className='mb-0 font-14'>@DercoMani</p>
                        <span className='mb-0 font-12 ms-3 text-grey2'>2 mins ago</span>
                    </div>
                    <div>
                        <p className='font-12 mb-0'>Updated Project phase from front end to backend</p>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center mb-2'>
                <div>
                    <img src={Act} alt="" />
                </div>
                <div className='ps-2'>
                    <div className='d-flex align-items-center'>
                        <p className='mb-0 font-14'>@DercoMani</p>
                        <span className='mb-0 font-12 ms-3 text-grey2'>2 mins ago</span>
                    </div>
                    <div>
                        <p className='font-12 mb-0'>Updated Project phase from front end to backend</p>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center mb-2'>
                <div>
                    <img src={Act} alt="" />
                </div>
                <div className='ps-2'>
                    <div className='d-flex align-items-center'>
                        <p className='mb-0 font-14'>@DercoMani</p>
                        <span className='mb-0 font-12 ms-3 text-grey2'>2 mins ago</span>
                    </div>
                    <div>
                        <p className='font-12 mb-0'>Updated Project phase from front end to backend</p>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center mb-2'>
                <div>
                    <img src={Act} alt="" />
                </div>
                <div className='ps-2'>
                    <div className='d-flex align-items-center'>
                        <p className='mb-0 font-14'>@DercoMani</p>
                        <span className='mb-0 font-12 ms-3 text-grey2'>2 mins ago</span>
                    </div>
                    <div>
                        <p className='font-12 mb-0'>Updated Project phase from front end to backend</p>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center mb-2'>
                <div>
                    <img src={Act} alt="" />
                </div>
                <div className='ps-2'>
                    <div className='d-flex align-items-center'>
                        <p className='mb-0 font-14'>@DercoMani</p>
                        <span className='mb-0 font-12 ms-3 text-grey2'>2 mins ago</span>
                    </div>
                    <div>
                        <p className='font-12 mb-0'>Updated Project phase from front end to backend</p>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center mb-2'>
                <div>
                    <img src={Act} alt="" />
                </div>
                <div className='ps-2'>
                    <div className='d-flex align-items-center'>
                        <p className='mb-0 font-14'>@DercoMani</p>
                        <span className='mb-0 font-12 ms-3 text-grey2'>2 mins ago</span>
                    </div>
                    <div>
                        <p className='font-12 mb-0'>Updated Project phase from front end to backend</p>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel value="2">Content for Tab Two</TabPanel>
      </TabContext>
    </Box>
  );
}

