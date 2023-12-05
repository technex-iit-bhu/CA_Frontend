import React, { useState, useEffect } from 'react';
import { Box, Button, useMediaQuery } from '@chakra-ui/react';
import Cards from './dashboardCard';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DashboardTab = () => {
  // State to hold the tasks
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState('live'); // This has be simplified since there's only one type of task now.
  // We need to replqace this with actual live, expired and completed tasks
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');

  // Fetch tasks from the API when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('api/getTasks', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 200) {
          const fetchedTasks = await response.json();

          // Map through each task and assign an expiry time.
          // Backend peeps need to add this to user schema too to remove this hard coding
          const finalTasks = fetchedTasks.map((task: any) => ({
            ...task,
            expiryDate: '06/01/2004',
          }));
          setTasks(finalTasks);
        } else {
          console.error('Failed to fetch tasks');
        }
      } catch (error) {
        console.error('Server error', error);
      }
    };

    fetchTasks();
  }, []);

  const fontSize = isLargerThan700 ? '20px' : '3.57vw';
  const width = isLargerThan700 ? '200px' : '28.5vw';

  const renderCards = () => {
    const now = new Date();
    // Render the cards for live tasks
    // return tasks.map(
    //   ({ id, expiryDate, points, title, description }, index) => (
    //     <Cards
    //       key={id}
    //       date={expiryDate}
    //       points={points}
    //       title={title}
    //       description={description}
    //       taskNumber={`${index + 1}`}
    //       month={`${monthNames[now.getMonth() + 1]}`}
    //     />
    //   )
    // );
    return (
      <h1 className='h-[100%] w-[100%] flex items-center justify-center lg:text-9xl py-6 cs'> Coming soon</h1>
    )
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
        {/* The other buttons can remain for future functionality */}
        <Button
          style={
            activeTab === 'completed'
              ? { borderBottom: '0.5vh solid #A81F25', fontSize, width }
              : { fontSize, width }
          }
          onClick={() => setActiveTab('completed')}
          disabled // Disable the button since the functionality is not implemented yet
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
          disabled // Disable the button since the functionality is not implemented yet
        >
          Expired
        </Button>
      </Box>
      <Box>{renderCards()}</Box> {/* Updated call */}
    </Box>
  );
};

export default DashboardTab;
