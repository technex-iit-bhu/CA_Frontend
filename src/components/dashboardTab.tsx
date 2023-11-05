import React, { useState, CSSProperties } from 'react';
import { Box, Button, useMediaQuery } from '@chakra-ui/react';
import Cards from './dashboardCard';

const tabContentStyle: CSSProperties = {
  opacity: 1,
  transition: 'opacity 1s ease-out 0.5s,height 1s ease-out 0.5s',
};

const hiddenTabContentStyle: CSSProperties = {
  opacity: 0,
  height: 0,
  pointerEvents: 'none',
  transition: 'opacity 0.5s ease-out,height 0.5s ease-out',
};

const DashboardTab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
  const fontSize = isLargerThan700 ? '20px' : '3.57vw';
  const width = isLargerThan700 ? '200px' : '28.5vw';

  return (
    <Box>
      <Box width='100%' display='flex' justifyContent='center' mb='2vw'>
        <Button
          style={
            activeTab === 1
              ? { borderBottom: '0.5vh solid #A81F25', fontSize, width }
              : { fontSize, width }
          }
          onClick={() => setActiveTab(1)}
        >
          Live Tasks
        </Button>
        <Button
          style={
            activeTab === 2
              ? { borderBottom: '0.5vh solid #A81F25', fontSize, width }
              : { fontSize, width }
          }
          onClick={() => setActiveTab(2)}
        >
          Completed
        </Button>
        <Button
          style={
            activeTab === 3
              ? { borderBottom: '0.5vh solid #A81F25', fontSize, width }
              : { fontSize, width }
          }
          onClick={() => setActiveTab(3)}
        >
          Expired
        </Button>
      </Box>
      <Box style={activeTab === 1 ? tabContentStyle : hiddenTabContentStyle}>
        <Cards
          date='01/06/24'
          points='100'
          heading='Connect To Technex'
          text='Connect to Technex and find your soulmate. Try and get laid in India’s biggest Techno-Management Fest'
          taskNumber='1'
          month='June'
        />
      </Box>
      <Box style={activeTab === 2 ? tabContentStyle : hiddenTabContentStyle}>
        <Cards
          date='01/06/24'
          points='100'
          heading='Connect To Technex'
          text='Connect to Technex and find your soulmate. Try and get laid in India’s biggest Techno-Management Fest'
          taskNumber='1'
          month='June'
        />
        <Cards
          date='08/06/24'
          points='150'
          heading='Connect To Technex'
          text='Connect to Technex and find your soulmate. Try and get laid in India’s biggest Techno-Management Fest'
          taskNumber='2'
          month='June'
        />
      </Box>
      <Box style={activeTab === 3 ? tabContentStyle : hiddenTabContentStyle}>
        <Cards
          date='01/05/24'
          points='100'
          heading='Connect To Technex'
          text='Connect to Technex and find your soulmate. Try and get laid in India’s biggest Techno-Management Fest'
          taskNumber='1'
          month='May'
        />
        <Cards
          date='01/05/24'
          points='50'
          heading='Connect To Technex'
          text='Connect to Technex and find your soulmate. Try and get laid in India’s biggest Techno-Management Fest'
          taskNumber='2'
          month='May'
        />
        <Cards
          date='69/69/24'
          points='-69'
          heading='Connect To Technex'
          text='Connect to Technex and find your soulmate. Try and get laid in India’s biggest Techno-Management Fest'
          taskNumber='3'
          month='May'
        />
      </Box>
    </Box>
  );
};

export default DashboardTab;
