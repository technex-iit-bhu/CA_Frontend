import React, { useState } from 'react';
import { Box, Button, useMediaQuery } from '@chakra-ui/react';
import Cards from './dashboardCard';

// Create a data structure to hold the tasks for each tab
const tasks = {
  live: [
    {
      date: '01/06/24',
      points: '100',
      heading: 'Live Task 1',
      text: 'Connect to Technex and find your soulmate. Try and get laid in India’s biggest Techno-Management Fest',
      taskNumber: '1',
      month: 'June',
    },
    {
      date: '01/06/24',
      points: '100',
      heading: 'Live Task 1',
      text: 'Connect to Technex and find your soulmate. Try and get laid in India’s biggest Techno-Management Fest',
      taskNumber: '1',
      month: 'June',
    },
    {
      date: '01/06/24',
      points: '100',
      heading: 'Live Task 1',
      text: 'Connect to Technex and find your soulmate. Try and get laid in India’s biggest Techno-Management Fest',
      taskNumber: '1',
      month: 'June',
    },
    // ... other live tasks
  ],
  completed: [
    {
      date: '01/06/24',
      points: '100',
      heading: 'Completed Task 1',
      text: 'Connect to Technex and find your soulmate. Try and get laid in India’s biggest Techno-Management Fest',
      taskNumber: '1',
      month: 'June',
    },
    {
      date: '01/06/24',
      points: '100',
      heading: 'Completed Task 1',
      text: 'Connect to Technex and find your soulmate. Try and get laid in India’s biggest Techno-Management Fest',
      taskNumber: '1',
      month: 'June',
    },
    // ... other completed tasks
  ],
  expired: [
    {
      date: '01/05/24',
      points: '100',
      heading: 'Expired Task 1',
      text: 'Connect to Technex and find your soulmate. Try and get laid in India’s biggest Techno-Management Fest',
      taskNumber: '1',
      month: 'May',
    },
    // ... other expired tasks
  ],
};

const DashboardTab = () => {
  const [activeTab, setActiveTab] = useState<'live' | 'completed' | 'expired'>(
    'live'
  );
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
  const fontSize = isLargerThan700 ? '20px' : '3.57vw';
  const width = isLargerThan700 ? '200px' : '28.5vw';

  const renderCards = (tab: keyof typeof tasks) => {
    // Render the cards based on the active tab
    return tasks[tab].map((task, index) => (
      <Cards
        key={index} // Assuming tasks are static, else a unique ID should be used as key
        date={task.date}
        points={task.points}
        heading={task.heading}
        text={task.text}
        taskNumber={task.taskNumber}
        month={task.month}
      />
    ));
  };

  return (
    <Box>
      <Box maxWidth='100%' display='flex' justifyContent='center' mb='2vw'>
        <Button
          style={
            activeTab === 'live'
              ? { borderBottom: '0.5vh solid #A81F25', fontSize, width }
              : { fontSize, width }
          }
          onClick={() => setActiveTab('live')}
        >
          Live Tasks
        </Button>
        <Button
          style={
            activeTab === 'completed'
              ? { borderBottom: '0.5vh solid #A81F25', fontSize, width }
              : { fontSize, width }
          }
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </Button>
        <Button
          style={
            activeTab === 'expired'
              ? { borderBottom: '0.5vh solid #A81F25', fontSize, width }
              : { fontSize, width }
          }
          onClick={() => setActiveTab('expired')}
        >
          Expired
        </Button>
      </Box>
      {/* Render the cards dynamically based on the active tab */}
      <Box>{renderCards(activeTab)}</Box>
    </Box>
  );
};

export default DashboardTab;
