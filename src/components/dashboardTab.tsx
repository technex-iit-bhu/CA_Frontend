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
  const [submittedTasks, setSubmittedTasks] = useState([]);
  const [activeTab, setActiveTab] = useState('live'); // This has be simplified since there's only one type of task now.
  // We need to replace this with actual live, expired and completed tasks
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
          setTasks(fetchedTasks);
        } else {
          console.error('Failed to fetch tasks');
        }
      } catch (error) {
        console.error('Server error', error);
      }
    };
    const fetchSubmittedTasks = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch('api/getSubmittedTasks', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.status === 200) {
          const fetchedTasks = await response.json();
          setSubmittedTasks(fetchedTasks);
        } else {
          console.error('Failed to fetch submitted tasks');
        }
      } catch (error) {
        console.error('Server error', error);
      }
    };
    fetchTasks();
    fetchSubmittedTasks();
  }, []);
  const fontSize = isLargerThan700 ? '20px' : '3.57vw';
  const width = isLargerThan700 ? '200px' : '28.5vw';

  const renderCards = (activeTab: string) => {
    const now = new Date();
    let filteredTasks = tasks;
    let verifiedTasks = submittedTasks.filter(({ verified }) => verified === true).map(({ task }) => task);
    if (activeTab === 'live') {
      filteredTasks = tasks.filter(({ deadline }) => new Date(deadline) > now);
    } else if (activeTab === 'expired') {
      filteredTasks = tasks.filter(({ deadline }) => new Date(deadline) <= now);
      if(filteredTasks.length===0)
      {
        return (
          <h1 className='cs flex h-[100%] w-[100%] items-center justify-center py-6 text-center text-1xl sm:text-2xl md:text-3xl lg:text-4xl'>
            {' '}
            No expired tasks!
          </h1>
        );
      }
      
    } else if (activeTab === 'completed') {
      filteredTasks=verifiedTasks;
    }

    return filteredTasks.map(
      ({ id, deadline, points, title, description }, index) => (
        <Cards
          key={id}
          date={new Date(deadline).toLocaleDateString()}
          points={points}
          title={title}
          description={description}
          taskNumber={`${index + 1}`}
          taskID={id}
          month={`${monthNames[now.getMonth()]}`}
        />
      )
    );
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
      <Box>{renderCards(activeTab)}</Box> {/* Updated call */}
    </Box>
  );
};

export default DashboardTab;
