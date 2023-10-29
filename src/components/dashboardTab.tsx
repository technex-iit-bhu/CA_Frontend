import React, { useState } from 'react';
import { Box, Button, useMediaQuery } from '@chakra-ui/react';
import Cards from './dashboardCard';

const DashboardTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
  const fontSize= isLargerThan700?'20px':'3.57vw';
  const width = isLargerThan700?'200px':'28.5vw';

  return (
    <Box>
      <Box width='100%' display='flex' justifyContent='center' mb='2vw'>
        <Button
          fontSize={fontSize}
          w={width}
          borderBottom={activeTab === 1 ? '0.5vw solid #A81F25' : 'none'}
          onClick={() => handleTabClick(1)}
        >
          Live Tasks
        </Button>
        <Button
          fontSize={fontSize}
          w={width}
          borderBottom={activeTab === 2 ? '0.5vw solid #A81F25' : 'none'}
          onClick={() => handleTabClick(2)}
        >
          Completed
        </Button>
        <Button
          fontSize={fontSize}
          w={width}
          borderBottom={activeTab === 3 ? '0.5vw solid #A81F25' : 'none'}
          onClick={() => handleTabClick(3)}
        >
          Expired
        </Button>
      </Box>
      {activeTab === 1 && (
        <Box>
          <Cards />
        </Box>
      )}
      {activeTab === 2 && (
        <Box>
          <Cards />
          <Cards />
        </Box>
      )}
      {activeTab === 3 && (
        <Box>
          <Cards />
          <Cards />
          <Cards />
        </Box>
      )}
    </Box>
  );
};

export default DashboardTab;
