import { Box, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import DashboardCard from "../DashBoardCard";
import Header from "../Header";
import Sidebar from "../sidebar";

const Dashboard = () => {
  return (
     <Flex direction="column" minH="100vh">
      {/* Header */}
      <Header />

      {/* Main content */}
      <Flex flex="1">
        {/* Sidebar */}
        <Sidebar />

        {/* Dashboard Content */}
        <Box
          flex="1"
          p={6}
          bg="gray.50"       // optional light background
          minH="calc(100vh - 60px)" // full height minus header
        >
          {/* Metric Cards */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={6}>
            <DashboardCard title="Total Projects" value="25" bg="blue.50" />
            <DashboardCard title="Active Reports" value="12" bg="green.50" />
            <DashboardCard title="Pending Tasks" value="8" bg="yellow.50" />
            <DashboardCard title="Completed Tasks" value="18" bg="purple.50" />
          </SimpleGrid>

          {/* Chart/Table Placeholder */}
          <Box
            h="400px"
            bg="white"
            rounded="lg"
            shadow="md"
            p={4}
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Chart / Graph Placeholder
          </Box>
        </Box>
      </Flex>
    </Flex>

  );
};

export default Dashboard;
       