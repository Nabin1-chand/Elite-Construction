import { Box, Text, SimpleGrid, Flex,Divider  } from "@chakra-ui/react";
import DashboardCard from "../DashBoardCard";
import Header from "../Header";
import Sidebar from "../sidebar";
import HoleCard from "../HoleCard";

const Dashboard = () => {
  const holes = Array.from({ length: 92 }, (_, i) => `B${i + 1}`);
  return (
    <Flex direction="column" minH="100vh" w="100vw">
      <Header />

      <Flex flex="1" minH="0">
        <Sidebar />

        {/* Dashboard Content */}
        <Box
          flex="1"
          p={6}
          mt={8}
          bg="gray.50"
          minH="0"
          display="flex"
          flexDirection="column"
          overflowY="auto"
        > 
         {/* Project Overview Section (Opposite Sides) */}
<Box
  bg="white"
  p={4}
  borderRadius="lg"
  boxShadow="md"
  mb={6}
>
  <Flex justify="space-between" align="center" flexWrap="wrap" mb={8} mt={3}>
    {/* LEFT SIDE - Summary Text */}
    <Box>
      <Text fontWeight="bold" fontSize="lg" mb={1}>
        Project Status Summary
      </Text>
      
    </Box>

    {/* RIGHT SIDE - Status Circles */}
    <Flex gap={6} align="center">
      {/* Not Started */}
      <Flex align="center" gap={2}>
        <Box w={4} h={4} borderRadius="full" bg="red.500" />
        <Text>Not Started</Text>
      </Flex>

      {/* In Progress */}
      <Flex align="center" gap={2}>
        <Box w={4} h={4} borderRadius="full" bg="yellow.400" />
        <Text>In Progress</Text>
      </Flex>

      {/* Completed */}
      <Flex align="center" gap={2}>
        <Box w={4} h={4} borderRadius="full" bg="green.500" />
        <Text>Completed</Text>
      </Flex>
    </Flex>
    
  </Flex>
       {/* Metric Cards */}
           <SimpleGrid columns={{ base: 2, md: 2, lg: 4}} spacing={8} mb={6}>
            <DashboardCard title="Total Projects" value="25" bg="blue.50" />
            <DashboardCard title="Pending Tasks" value="8" bg="yellow.50" />
            <DashboardCard title="Completed Tasks" value="18" bg="purple.50" />
            <DashboardCard title="Total Holes" value="82" bg="blue.50" />

          </SimpleGrid> 
</Box>

         
     


          
          <Box flex="1" bg="gray.50" p={6}>

            {/* TOTAL CARD */}
            <Box
              bg="white"
              // w="200px"
              w="100vw"
              // h="100px"
              borderRadius="lg"
              boxShadow="md"
              display="flex"
              flexDirection="column"
              alignItems="left"
              p={4}
              // justifyContent="center"
              mb={4}
            >

              <Text fontSize="2xl"mb={3} fontWeight="bold" color="black.500">
                Drill Holes Digram(B1-B92)
              </Text>
                <Divider mb={4} borderColor="black"/> 
              <SimpleGrid
                columns={{ base: 4, sm: 6, md: 10, lg: 12 }}
                spacing={3}
                 justifyItems="start"
              >
                {holes.map((hole) => (
                  <HoleCard key={hole} label={hole} />
                ))}
              </SimpleGrid>
            </Box>

            {/* HOLE CARDS GRID */}


          </Box>

        
        </Box>
      </Flex>
    </Flex>

  );
};

export default Dashboard;
