import { Box, Text, SimpleGrid, Flex, Divider, Select } from "@chakra-ui/react";
import DashboardCard from "../DashBoardCard";
import Header from "../Header";
import Sidebar from "../sidebar";
import HoleCard from "../HoleCard";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import HoleDetailModal from "../HoleDetailModal";
const Dashboard = () => {
  const holes = Array.from({ length: 92 }, (_, i) => `B${i + 1}`);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedHole, setSelectedHole] = useState(null)
  const [project, setProject] = useState("");
  const handleHoleClick = (hole) => {
    setSelectedHole(hole);
    onOpen();
  };
  // Example hole status (you can fetch from API later)
  const inProgress = ["B1", "B3", "B11"];
  const completed = ["B5", "B7"];
   const getHoleStatus = (hole) => {
    if (completed.includes(hole)) return "completed";
    if (inProgress.includes(hole)) return "in-progress";
    return "not-started";
  };
  const getHoleColor = (hole) => {
    if (completed.includes(hole)) return "green.300";
    if (inProgress.includes(hole)) return "yellow.400";
    return "gray.200";
  };
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
          {/* DropDown select Project */}
          <Box bg="white"
            p={4}
            borderRadius='lg'
            boxShadow="md"
            w="40%"
            mb={6}
          >
            <Text fontWeight="bold" mb={2}
              Select Project
            ></Text>
            <Select
              placeholder="Select Project---"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            >
              <option value="mrta-purple-south">
                MRTA Purple Line (South) Project Contract 3 Underground
              </option>
              <option value="project-2">Project 2</option>
              <option value="project-3">Project 3</option>
            </Select>
          </Box>
          <Box
            bg="white"
            p={5}
            borderRadius="lg"
            boxShadow="md"
            mb={6}
          >
            <Flex justify="space-between" mb={4}>
              {/* LEFT SIDE - Summary Text */}
              <Text fontWeight="bold" fontSize="lg">
                Project Status Overview
              </Text>


              {/* RIGHT SIDE - Status Circles */}
              <Flex gap={4}>
                {/* Not Started */}
                <Flex align="center" gap={1}>
                  <Box w={3} h={3} bg="gray.300" borderRadius="full" />
                  <Text fontSize="sm">Not Started</Text>
                </Flex>

                {/* In Progress */}
                <Flex align="center" gap={1}>
                  <Box w={3} h={3} bg="yellow.400" borderRadius="full" />
                  <Text fontSize="sm">In Progress</Text>
                </Flex>

                {/* Completed */}
                <Flex align="center" gap={1}>
                  <Box w={3} h={3} bg="green.400" borderRadius="full" />
                  <Text fontSize="sm">Completed</Text>
                </Flex>
              </Flex>

            </Flex>
            {/* Metric Cards */}
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
              <DashboardCard title="NOT STARTED" value="85" color="gray.100" />
              <DashboardCard title="IN PROGRESS" value="7" color="yellow.100" />
              <DashboardCard title="COMPLETED" value="0" color="green.100" />
              <DashboardCard title="TOTAL HOLES" value="92" color="blue.100" />
            </SimpleGrid>
          </Box>

          {/* ================= DRILLING HOLES ================= */}
          <Box bg="white" p={5} borderRadius="lg" boxShadow="md">
            <Text fontSize="lg" fontWeight="bold" mb={3}>
              Drilling Holes Diagram (B1 - B92)
            </Text>
            <Divider mb={4} />
            <SimpleGrid columns={{ base: 4, sm: 6, md: 10, lg: 12 }} spacing={4}>

              {holes.map((hole) => {
                const isInprogress = inProgress.includes(hole);
                return (
                  <HoleCard
                    key={hole}
                    lable={hole}
                    color={getHoleColor(hole)}
                    isClickable={true}
                    onClick={() => handleHoleClick(hole)}
                  />
                )
              })}
            </SimpleGrid>
            {/* open model */}
            <HoleDetailModal
              isOpen={isOpen}
              onClose={onClose}
              hole={selectedHole}
              status={selectedHole? getHoleStatus(selectedHole):null}
            />
          </Box>
        </Box>
      </Flex>
    </Flex>

  );
};

export default Dashboard;
